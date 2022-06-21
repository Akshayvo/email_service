import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';
import { SignOutService } from '../services/sign-out.service';
import { LstPayTypes, PayTypes, PayTypeForResult,  } from '../models/payment';
import { UnpaidAR } from '../models/tenant';
import { month } from '../../data/date';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { SurchargeService } from '../services/surcharge.service';
import { DataSharingService } from '../services/data-sharing.service';
import { MakeAReservationService } from '../services/make-a-reservation.service';
import { MoveInService } from '../services/moveIn.service';
import { AddTenantService } from '../services/add-tenant.service';
import { environment } from '../../../environments/environment';
import { objSIMSetting } from '../../data/configuration';

@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss'],
  providers: [DatePipe],
})

export class PayRentFormComponent implements OnInit, OnDestroy {

  showPaymentForReserve: boolean;
  showPaymentForMoveIn: boolean;
  balance: number;
  payRentForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes = [];
  payTypeForResult: PayTypeForResult;
  selectedDescription: string;
  result: any;
  month: any;
  PaymentAmount: number;
  CCApprovalCode: string;
  year = [];
  textBox: any;
  tenant: any;
  PayTypeIDValue: number;
  displayBalance: number;
  invalidPayment: string;
  sessionExpire: string;
  showInput = false;
  submitted = false;
  showloaderForPayment = false;
  toggleSignUp = false;
  IsAutoPaymentsEnabled = false;
  makePaymentForUnit = false;
  TotalReserveAmount: number;
  totalMoveInAmount: number;
  date: Date;
  reservationInProgress: boolean;
  MinDate: string;
  minDate: Date;
  strAccessCode: string;
  surcharge: number;
  unitTypeNotAvailability: boolean;
  showLoader = false;
  blnAllowPartialPayments: boolean;
  cards: any;
  paymentSuccess = false;
  navigateToPayment = false;
  marked = false;
  signUp = {};
  logOut = {};
  defaultCardType: string;

  otherValue = 0;
  id: string;

  UnpaidAR: UnpaidAR[];

  showSuccessPayment = false;

  lastPaymentOn: string;
  lastPaymentAmount: string;

  paytypeid: number;
  amountToPay: number;

  customOtherValue: number;
  errorMessage: string;
  showError = false;
  count = 0;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  existTempToken: string;
  tokenExit: string;
  showConfirmation: boolean;
  strConfirmation: string;
  tokenRemoved = false;
  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };
  navigateToMoveInPayment: boolean;
  tenantTokenExist = false;

  cardType: string;
  paymentTab: string;
  tenantData = {
    objTenant: {}
  };

  private OptionOutOfAutoPaySubscribe$: Subscription;
  private signUpAutoPaySubscribe$: Subscription;
  private signOutSubscribe$: Subscription;
  private makePaymentSubscribe$: Subscription;
  private getPayMethodsSubscribe$: Subscription;
  private getTenantInfoSubscribe$: Subscription;
  private makeAReservationSubscribe$: Subscription;
  private  addTenantSubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
    private signOutService: SignOutService,
    private surchargeService: SurchargeService,
    public router: Router,
    private datePipe: DatePipe,
    private dataSharingService: DataSharingService,
    private makeAReservationService: MakeAReservationService,
    private moveInService: MoveInService,
    private addTenantService: AddTenantService,
  ) {
    this.payRentForm = this.formBuilder.group({
      objPayment: this.formBuilder.group({
        CCAccountNumber: ['', Validators.required],
        CCAccountName: ['', Validators.required],
        CCExpirationMonth: ['', Validators.required],
        CCExpirationYear: ['', Validators.required],
        CCAccountCVV2: [''],
        CCAccountBillingAddress: ['', Validators.required],
        CCAccountZIP: ['', Validators.required],
        SignUpForAutoPay:  [],
        PaymentAmount: ['', Validators.required],
        PayType: this.formBuilder.group({
          PayTypeDescription: ['', Validators.required],
          PayTypeID: [''],
        })
      }),
    });

    let newYear = new Date().getFullYear();
    for (let i = 1; i < 15; i++) {
      this.year.push({
        id: newYear.toString().slice(-2),
        label: newYear,
      });

      newYear = newYear + 1;
    }


    this.navigateToReserve = this.dataSharingService.navigateToReserve;
    this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
  
    if (!!this.dataSharingService.LstUnitTypes.ReservationFeeTax) {
      // tslint:disable-next-line: max-line-length
      const amount =  parseFloat((this.dataSharingService.LstUnitTypes.ReservationFee + this.dataSharingService.LstUnitTypes.ReservationFeeTax).toFixed(2));
      if (amount && amount > 0) {
        this.surchargeService.setAmt(amount);
        // this.getSurCharge();
      }
    } else {
      this.TotalReserveAmount = this.dataSharingService.LstUnitTypes.ReservationFee;
      if(!!this.TotalReserveAmount && this.TotalReserveAmount > 0) {
        this.surchargeService.setAmt(this.TotalReserveAmount);
        // this.getSurCharge();
      }
    }

    if (!!this.dataSharingService.MoveInData.TotalChargesAmount) {
      this.totalMoveInAmount =
      // tslint:disable-next-line: max-line-length
      parseFloat((this.dataSharingService.MoveInData.TotalChargesAmount + this.dataSharingService.MoveInData.TotalTaxAmount).toFixed(2));
      if (!!this.totalMoveInAmount && this.totalMoveInAmount > 0) {
        this.surchargeService.setAmt(this.totalMoveInAmount);
        // this.getSurCharge();
      }
    } else {
      this.totalMoveInAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
      if (!!this.totalMoveInAmount && this.totalMoveInAmount > 0) {
        this.surchargeService.setAmt(this.totalMoveInAmount);
        // this.getSurCharge();
      }
    }



    if (this.router.url.includes('payReservationCharges')) {
      this.navigateToReserve = true;
      this.navigateToMoveIn = false;
      this.payRentForm.patchValue({
        objPayment: {
         PaymentAmount: this.TotalReserveAmount
        }
      });
    } else {
      if (this.router.url.includes('payMoveInCharges')) {
        this.navigateToReserve = false;
        this.navigateToMoveIn = true;
        this.payRentForm.patchValue({
          objPayment: {
           PaymentAmount: this.totalMoveInAmount
          }
        });
      } else {
        if (this.router.url.includes('payment')) {
          this.navigateToMoveIn = false;
          this.navigateToReserve = false;
          this.navigateToMoveInPayment = true;
        }

      }
    }

    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;

    this.fetchCards();
  }

  public fetchCards() {
    this.cards = environment.cards;
  }

  ngOnInit() {
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }

    this.blnAllowPartialPayments = objSIMSetting.objPaymentSetting.blnAllowPartialPayments;
    this.tenantData.objTenant = this.dataSharingService.objTenant;
    if (!!localStorage.getItem('strTenantToken')) {
      this.getPayMethods();
    } else {
      if (!localStorage.getItem('strTempTenantToken')) {
        if (this.dataSharingService.addingTenant === true) {
          this.getPayMethods();
        } else {
          if (!!this.paymentTab) {
            this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
          } else {
            this.router.navigate(['/pay-rent/login']);
          }
        }
      } else {
        this.getPayMethods();
      }
    }
    this.fetchMonth();
  }

  get f() { return this.payRentForm.controls; }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchMonth() {
    this.month = month;
  }

  autoCardType(number: any) {
   this.cardType = this.getCardType(number.target.value);
   const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === this.cardType);
   // tslint:disable-next-line: max-line-length
   const cardTypeId = ((index!=null && index > -1 ) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[0].PayTypeID);
   this.paytypeid =  cardTypeId;
   this.surchargeService.getIdPaytype(this.paytypeid);
   this.payRentForm.patchValue({
     objPayment: {
       PayType: {
         PayTypeDescription: this.cardType,
         PayTypeID: cardTypeId,
       }
     }
   });
  }

   getCardType(number: any) {
    // visa
    let re = new RegExp('^4');
    if (number.match(re) != null) {
        return 'Visa';
    }

    // Mastercard
    // Updated for Mastercard 2017 BINs expansion
     // tslint:disable-next-line: max-line-length
     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) {
        return 'Master Card';
     }

    // AMEX
    re = new RegExp('^3[47]');
    if (number.match(re) != null) {
        return 'Amex';
    }

    // Discover
    re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
    if (number.match(re) != null) {
        return 'Discover';
    }

    return '';
}

  selectChangeHandler(event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue = event.target.value;
    const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === indexValue);
    if (this.lstPayTypes && this.lstPayTypes.length > 0) {
    this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
    this.surchargeService.getIdPaytype(this.PayTypeIDValue);
    this.payRentForm.patchValue({
      objPayment: {
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        }
      }
    });
  }

    if (this.router.url.includes('payReservationCharges')) {
      this.surchargeService.setAmt(this.TotalReserveAmount);
      this.getSurCharge();
    } else {
      if (this.router.url.includes('payMoveInCharges')) {
        this.surchargeService.setAmt(this.totalMoveInAmount);
        this.getSurCharge();
      } else {
        if ( this.showInput) {
          if (this.customOtherValue) {
            this.surchargeService.setAmt(this.customOtherValue);
            this.getSurCharge();
          }
        } else {
          this.getSurCharge();
        }
      }
    }
  }


  handleChange(e: any) {
    if (e.target.id === '2') {
      this.showInput = true;
      this.id = e.target.id;
      this.surchargeService.setAmt(0);
      this.getSurCharge();
    } else {
      this.surchargeService.setAmt(this.balance);
      this.getSurCharge();
      this.showInput = false;

    }
  }

  onKeyUp(e: any) {
    this.customOtherValue = e.target.value;
    this.surchargeService.setAmt(e.target.value);
        setTimeout(() => {
        this.getSurCharge();
    }, 1000);
  }

  getTenantInfo() {
  this.getTenantInfoSubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          this.surchargeService.setAmt(this.balance);
          if (this.router.url.includes('payReservationCharges')) {
            this.surchargeService.setAmt(this.TotalReserveAmount);
          } else {
            if (this.router.url.includes('payMoveInCharges')) {
              this.surchargeService.setAmt(this.totalMoveInAmount);
            } else {
              this.surchargeService.setAmt(this.balance);
            }
          }
          this.surchargeService.getIdPaytype(this.paytypeid);
          this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled;
          this.date = Tenant.LastPaymentOn;
          this.lastPaymentOn = this.datePipe.transform(this.date, 'MM/dd/yyyy');
          this.lastPaymentAmount = Tenant.LastPaymentAmount;

          this.UnpaidAR = Tenant.UnpaidAR;

          // tslint:disable-next-line:forin
          for (const i in this.UnpaidAR) {
            this.UnpaidAR[i].FromDate = this.datePipe.transform(this.UnpaidAR[i].FromDate, 'MM/dd/yyyy');
            this.UnpaidAR[i].ToDate = this.datePipe.transform(this.UnpaidAR[i].ToDate, 'MM/dd/yyyy');

            if (this.UnpaidAR[i].AmountOwed < 0) {
              this.UnpaidAR[i].amountOwed = Math.abs(this.UnpaidAR[i].AmountOwed);
            }
          }

          if (this.balance < 0) {
            this.displayBalance = Math.abs(this.balance);
          } else {
            this.displayBalance = this.balance;
          }

          if (this.balance <= 0 ) {
            this.showInput = true;
          }

        // tslint:disable-next-line: max-line-length
          this.defaultCardType = ((Tenant.CCNumber) ? this.getCardType(Tenant.CCNumber) : this.lstPayTypes[0].PayTypeDescription);
          const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === this.defaultCardType);
          // tslint:disable-next-line: max-line-length
          const defaultCardPayTypeId = ((index!=null && index > -1 ) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[0].PayTypeID);

          if (localStorage.getItem('strTenantToken')) {
            this.paytypeid =  defaultCardPayTypeId;
            this.surchargeService.getIdPaytype(this.paytypeid);
            this.payRentForm.patchValue({
              objPayment: {
                PayType: {
                  PayTypeDescription: this.defaultCardType,
                  PayTypeID: defaultCardPayTypeId,
                }
              }
            });
          }

          this.payRentForm.patchValue({
            objPayment: {
              CCAccountNumber: Tenant.CCNumber,
              CCAccountName: Tenant.CCBillingAccountName,
              CCExpirationMonth: Tenant.CCExpirationMonth,
              CCExpirationYear: Tenant.CCExpirationYear,
              CCAccountBillingAddress: Tenant.CCBillingAddress,
              CCAccountZIP: Tenant.CCBillingZIP,
              SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
              // tslint:disable-next-line: max-line-length
              PaymentAmount: (this.navigateToMoveInPayment ? this.balance : (this.navigateToReserve ? this.TotalReserveAmount : this.totalMoveInAmount)),
            }
          });
          this.showLoader = false;
          this.getSurCharge();
        }
      }
      , (err: any) => {
        if (err.status === 401) {
          localStorage.removeItem('strTenantToken');
          if (!!this.paymentTab) {
            this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
          } else {
            this.router.navigate(['/pay-rent/login']);
          }
          this.sessionExpire = 'Session Expired. Please Login for completing the payment.';
        }
      });
  }

  public navigateToConfirmation() {
    this.router.navigate([`${environment.locationName}/view-rates/confirmation`]);
  }

  getPayMethods() {
    this.getPayMethodsSubscribe$ = this.fetchDataService.getPayMethods()
       .subscribe(payTypesResponse => {
 
         this.cards.forEach(element => {
             const index = payTypesResponse.lstPayTypes.findIndex(x => x.PayTypeDescription === element);
              if (index!=null && index > -1) {
                 this.lstPayTypes.push(payTypesResponse.lstPayTypes[index]);
               }
           
         });
 
 
         if (!!localStorage.getItem('strTenantToken')) {
           this.tenantTokenExist = true;
           this.showLoader = true;
           this.getTenantInfo();
         } else {
           const defaultDescription = this.lstPayTypes[0].PayTypeDescription;
           const defaultPayTypeID = this.lstPayTypes[0].PayTypeID;
           this.paytypeid =  this.lstPayTypes[0].PayTypeID;
           console.log('lstPayTypes', this.lstPayTypes, this.paytypeid);
           this.surchargeService.getIdPaytype(this.paytypeid);
           console.log('this.surchargeService.getIdPaytype(this.paytypeid);', this.surchargeService.getIdPaytype(this.paytypeid));
           this.getSurCharge();
           this.payRentForm.patchValue({
             objPayment: {
               PayType: {
                 PayTypeDescription: defaultDescription,
                 PayTypeID: defaultPayTypeID,
               }
             }
           });
         }
       }
     );
   }

  // toggleEvent(e: any) {
  //   this.toggleSignUp = true;
  // }

  getSurCharge() {
    this.surcharge = 0;
    this.surchargeService.getSurCharge()
    .subscribe(result => {
      this.amountToPay = result.decTotalAmount;
      this.dataSharingService.amountToPayThankYou = this.amountToPay
      this.TotalReserveAmount = result.decTotalAmount;


    if (this.router.url.includes('payReservationCharges')) {
      this.surcharge = result.decTotalAmount - this.TotalReserveAmount;
    } else {
      if (this.router.url.includes('payMoveInCharges')) {
        this.surcharge = result.decTotalAmount - this.totalMoveInAmount;
      } else {
        if (this.showInput) {
          if (this.customOtherValue) {
             this.surcharge = result.decTotalAmount - this.customOtherValue;
           }
         } else {
             if (this.balance > 0) {
               this.surcharge = result.decTotalAmount - this.balance;
             }
           }
      }
    }
      }, (err: any) => {
        if (err.status === 400) {
          this.showError = true;
          this.errorMessage = 'Please enter the valid amount';
        }
      }
    );
  }

  makePayment(paymentData: any) {
    this.makePaymentForUnit = true;
    if (this.toggleSignUp === true) {
      if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
        this.signUp = {
          objTenant: {
            CCNumber: this.payRentForm.value.objPayment.CCAccountNumber,
            CCBillingAccountName: this.payRentForm.value.objPayment.CCAccountName,
            CCExpirationMonth: this.payRentForm.value.objPayment.CCExpirationMonth,
            CCExpirationYear: this.payRentForm.value.objPayment.CCExpirationYear,
            CCBillingAddress: this.payRentForm.value.objPayment.CCAccountBillingAddress,
            CCBillingZIP: this.payRentForm.value.objPayment.CCAccountZIP,
            PreferredPaymentMethod: this.payRentForm.value.objPayment.PayType.PayTypeID,
          }
        };
      this.signUpAutoPay(this.signUp);
    } else {
      this.OptionOutOfAutoPay(this.signUp);
    }
    }

    this.invalidPayment = null;
    this.makePaymentSubscribe$ = this.paymentService.makePayment(paymentData)
      .subscribe(paymentDataResponse => {
        // this.showloaderForPayment = false;
        if (paymentDataResponse && paymentDataResponse.PayTypeForResult &&  paymentDataResponse.PayTypeForResult.PaymentAmountTotal) {
          this.dataSharingService.PaymentAmount = paymentDataResponse.PayTypeForResult.PaymentAmountTotal;
        }
        this.dataSharingService.CCApprovalCode = paymentDataResponse.PayTypeForResult.CCApprovalCode;
        if ( paymentDataResponse.intErrorCode === 1 ) {

          this.makePaymentForUnit = false;
          if (this.router.url.includes('/payment')){
            this.dataSharingService.navigateToPayment = true
          }
          if (this.navigateToReserve) {
            this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
            this.makeAReservation(this.MoveIn);
          } else {
            if (this.navigateToMoveIn) {
              this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
              this.moveIn(this.MoveIn);
            } else {
              this.dataSharingService.paymentSuccess = true;
              if (!!this.paymentTab) {
                this.router.navigate([`pay-rent/${this.paymentTab}/thank-you`])
              } else {
                this.router.navigate([`pay-rent/thank-you`]);
              }
              
            }
          }
          this.showSuccessPayment = true;
        } else {
          this.showloaderForPayment = false;
          this.makePaymentForUnit = false;
          this.invalidPayment = 'Unable to make the payment. Please check your card detail.';
        }


      }, (err: any) => {
        this.makePaymentForUnit = false;
        this.showloaderForPayment = false;
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400) {
            this.showloaderForPayment = false;
            this.invalidPayment = 'Invalid Amount, Payment Amount must be greater than 0.';
          }
        }
      }
    );
  }

  signOut(logOut: any) {
   this.signOutSubscribe$ = this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        if (!!this.paymentTab) {
          this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
        } else {
          this.router.navigate(['/pay-rent/login']);
        }
      }, (err) => {
      }
    );
  }

  signUpAutoPay(signUp: any) {
  this.signUpAutoPaySubscribe$ =  this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  OptionOutOfAutoPay(signUp: any) {
   this.OptionOutOfAutoPaySubscribe$ = this.tenantInfoService.OptionOutOfAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  makeAReservation(strConfirmation: any) {
    this.makePaymentForUnit = true;
  this.reservationInProgress = true;
  this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
  this.makeAReservationSubscribe$ =  this.makeAReservationService.makeAReservation(strConfirmation)
    .subscribe(strConfirmationResponse => {
      this.strConfirmation = strConfirmationResponse.strConfirmation;
      this.dataSharingService.strConfirmation = strConfirmationResponse.strConfirmation;
      this.showConfirmation = false;
      this.dataSharingService.eventName = 'reservation';
      this.makePaymentForUnit = false;
      this.submitted = false;
       this.tokenExit = localStorage.getItem('strTenantToken');

       if (this.tokenExit) {
         this.tenantTokenExist = true;
       }

      this.existTempToken = localStorage.getItem('strTempTenantToken');

      if (this.existTempToken) {
        localStorage.removeItem('strTempTenantToken');
        this.tokenRemoved = true;
      }
      this.router.navigate([`${environment.locationName}/view-rates/thank-you`]);
      this.reservationInProgress = false;
    }, (err: any) => {
      this.makePaymentForUnit = false;

      if (err.status === 403) {

      } else {
        if (err.status === 401 ) {
          localStorage.removeItem('strTempTenantToken');
        }
      }
      this.reservationInProgress = false;
    }
    );
  }

  convertDate(date: any) {
    const formattedNormalDate = new Date(date);
    // tslint:disable-next-line:max-line-length
    return `${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
  }

  moveIn(strAccessCode: any) {
    this.makePaymentForUnit = true;
    this.reservationInProgress = true;
    this.MoveIn['blnGenerateDocuments'] = true;
    this.MoveIn.dteMoveIn = this.convertDate(new Date());
    this.makeAReservationSubscribe$ =  this.moveInService.moveIn(strAccessCode)
      .subscribe(strConfirmationResponse => {
        this.strAccessCode = strConfirmationResponse.strAccessCode;
        this.dataSharingService.strAccessCode = strConfirmationResponse.strAccessCode;
        this.dataSharingService.eventName = 'MoveIn';
        this.makePaymentForUnit = false;
        this.submitted = false;
         this.tokenExit = localStorage.getItem('strTenantToken');
         if (this.tokenExit) {
           this.tenantTokenExist = true;
         }
        this.existTempToken = localStorage.getItem('strTempTenantToken');
        if (this.existTempToken) {
          localStorage.removeItem('strTempTenantToken');
          this.tokenRemoved = true;
        }
        this.router.navigate([`${environment.locationName}/view-rates/thank-you`]);
        this.reservationInProgress = false;
      }, (err: any) => {
        this.makePaymentForUnit = false;

        if (err.status === 403) {
          this.showConfirmation = false;

        } else {
          if (err.status === 401 ) {
            localStorage.removeItem('strTempTenantToken');
          }
          if (err.status === 500 ) {
            this.unitTypeNotAvailability = true;
          }
        }
        this.reservationInProgress = false;
      }
      );
    }

   addTenant(data: any): void {
     this.addTenantSubscribe$ = this.addTenantService.addTenant(data)
         .subscribe(result => {
         localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
         if (this.navigateToMoveIn ) {
           if (this.dataSharingService.MoveInData.TotalChargesAmount > 0 ) {
             this.makePayment(this.payRentForm.value);
           } else {
             this.moveIn(this.MoveIn);
           }
         } else {
           if (this.navigateToReserve) {
             if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
               this.makePayment(this.payRentForm.value);
             } else {
               this.makeAReservation(this.MoveIn);
             }
           }
         }
       });
     }

     onSubmit() {
      this.submitted = true;
      if (this.payRentForm.invalid) {
        return;
      } else {
        this.showloaderForPayment = true;
        // if ( this.navigateToMoveIn === false && this.navigateToReserve === false) {
          if (this.amountToPay > 0) {
            this.payRentForm.patchValue({
              objPayment: {
                PaymentAmount: this.amountToPay
              }
            });
          } else if (this.customOtherValue > 0) {
            this.payRentForm.patchValue({
              objPayment: {
                PaymentAmount: this.customOtherValue
              }
            });
          } else {
            this.payRentForm.patchValue({
              objPayment: {
                PaymentAmount: this.balance
              }
            });
          }
        // }

        if (!localStorage.getItem('strTenantToken') &&
        !localStorage.getItem('strTempTenantToken')) {
          this.addTenant(this.tenantData);
        } else {
          this.makePayment(this.payRentForm.value);
        }
        
      }
      
    }

  public ngOnDestroy(): void {
    if (this.OptionOutOfAutoPaySubscribe$ && this.OptionOutOfAutoPaySubscribe$.closed) {
      this.OptionOutOfAutoPaySubscribe$.unsubscribe();
    }

    if (this.signUpAutoPaySubscribe$ && this.signUpAutoPaySubscribe$.closed) {
      this.signUpAutoPaySubscribe$.unsubscribe();
    }

    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }

    if (this.makePaymentSubscribe$ && this.makePaymentSubscribe$.closed) {
      this.makePaymentSubscribe$.unsubscribe();
    }

    if (this.getPayMethodsSubscribe$ && this.getPayMethodsSubscribe$.closed) {
      this.getPayMethodsSubscribe$.unsubscribe();
    }

    if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
      this.getTenantInfoSubscribe$.unsubscribe();
    }
    if (this.makeAReservationSubscribe$ && this.makeAReservationSubscribe$.closed) {
      this.makeAReservationSubscribe$.unsubscribe();
    }
    if (this.addTenantSubscribe$ && this.addTenantSubscribe$.closed) {
     this.addTenantSubscribe$.unsubscribe();
    }
  }
}
