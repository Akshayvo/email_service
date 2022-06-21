import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { SignOutService } from '../services/sign-out.service';
import { LstPayTypes, PayTypes, PayTypeForResult, } from '../models/payment';
import { UnpaidAR, ObjTenant} from '../models/tenant';
import { month } from '../../data/date';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SurchargeService } from '../services/surcharge.service';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-auto-pay',
  templateUrl: './auto-pay.component.html',
  styleUrls: ['./auto-pay.component.scss']
})

export class AutoPayComponent implements OnInit, OnDestroy {
  objTenant: ObjTenant;
  showPaymentForReserve: boolean;
  showPaymentForMoveIn: boolean;
  balance: number;
  autoPayForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes: LstPayTypes[];
  payTypeForResult: PayTypeForResult;
  selectedDescription: string;
  result: any;
  month: any;
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
  makeAutoPayStatus = false;
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
  marked = false;
  signUp = {};
  logOut = {};
  defaultCardType: string;

  otherValue = 0;
  id: string;

  UnpaidAR: UnpaidAR[];

  showSuccessStatus = false;

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
  objTenantCopy: any;

  cardType: string;
  successMessage: string;
  progressMessage: string;
  paymentTab: string;
  isDataUpdated = false;
  enableUpdateButton = false;
  canExit = true;
  messageSavedData: string;
  isDataSaved = false;

  private OptionOutOfAutoPaySubscribe$: Subscription;
  private signUpAutoPaySubscribe$: Subscription;
  private signOutSubscribe$: Subscription;
  private makePaymentSubscribe$: Subscription;
  private getPayMethodsSubscribe$: Subscription;
  private getTenantInfoSubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private signOutService: SignOutService,
    private surchargeService: SurchargeService,
    private  dataSharingService: DataSharingService,
    public router: Router,

  ) {
    this.autoPayForm = this.formBuilder.group({
      objTenant: this.formBuilder.group({
        CCNumber: [''],
        CCBillingAccountName: [''],
        CCExpirationMonth: [''],
        CCExpirationYear: [''],
        CCBillingAddress: [''],
        CCBillingZIP: [''],
        PayType: this.formBuilder.group({
          PayTypeDescription: ['', ],
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




    if (this.router.url ===  '/pay-rent/sign-up/payment' ) {
      this.navigateToMoveInPayment = true;
    }

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

  public hasUnsavedData() {
    return this.canExit;
  }


  ngOnInit() {
    if (!!localStorage.getItem('strTenantToken')) {
      this.getPayMethods();
    } else {
      if (!localStorage.getItem('strTempTenantToken')) {
        this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
      } else {
        this.getPayMethods();
      }
    }
    this.fetchMonth();

    if (!!this.dataSharingService.isDataSaved && !!this.dataSharingService.isDataUpdated) {
      this.isDataUpdated = this.dataSharingService.isDataUpdated;
      this.enableUpdateButton = true;
    }
  }

  get f() { return this.autoPayForm.controls; }

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
   const cardTypeId = ((index!=null && index > -1 ) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[1].PayTypeID);
   this.paytypeid =  cardTypeId;
   this.surchargeService.getIdPaytype(this.paytypeid);
   this.autoPayForm.patchValue({
     objTenant: {
      // PreferredPaymentMethod: cardTypeId,
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

  saveDetail() {
    this.dataSharingService.cardDetailsObject = Object.assign({}, this.autoPayForm.controls.objTenant.value);
    this.isDataSaved = true;
    this.dataSharingService.isDataSaved = true;
    this.messageSavedData = 'Card Details saved.';
  }

  selectChangeHandler(event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue = event.target.value;
    const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === indexValue);
    this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
    this.surchargeService.getIdPaytype(this.PayTypeIDValue);
    this.autoPayForm.patchValue({
      objTenant: {
        // PreferredPaymentMethod: this.PayTypeIDValue,
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        }
      }
    });
  }


  getTenantInfo() {
    this.getTenantInfoSubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          this.surchargeService.setAmt(this.balance);
          this.surchargeService.getIdPaytype(this.paytypeid);
          this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled;
          this.date = Tenant.LastPaymentOn;
          this.dataSharingService.signUpForAutoPay = Tenant.IsAutoPaymentsEnabled;
        // tslint:disable-next-line: max-line-length
          this.defaultCardType = ((Tenant.CCNumber) ? this.getCardType(Tenant.CCNumber) : this.lstPayTypes[1].PayTypeDescription);
          const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === this.defaultCardType);
          // tslint:disable-next-line: max-line-length
          const defaultCardPayTypeId = ((index!=null && index > -1 ) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[1].PayTypeID);

          if (localStorage.getItem('strTenantToken')) {
            this.paytypeid =  defaultCardPayTypeId;
            this.surchargeService.getIdPaytype(this.paytypeid);
            this.autoPayForm.patchValue({
              objTenant: {
                // PreferredPaymentMethod: defaultCardPayTypeId,
                PayType: {
                  PayTypeDescription: this.defaultCardType,
                  PayTypeID: defaultCardPayTypeId,
                }
              }
            });
          }
          const tempObject = {
            CCNumber: Tenant.CCNumber,
            CCBillingAccountName: Tenant.CCBillingAccountName,
            CCExpirationMonth: Tenant.CCExpirationMonth,
            CCExpirationYear: Tenant.CCExpirationYear,
            CCBillingAddress: Tenant.CCBillingAddress,
            CCBillingZIP: Tenant.CCBillingZIP,
            PayType: {
              PayTypeDescription: this.defaultCardType,
              PayTypeID: defaultCardPayTypeId,
            }
          };

          if (!!this.dataSharingService.isDataUpdated && !!this.dataSharingService.isDataSaved) {
            this.autoPayForm.patchValue({
              objTenant: {
                CCNumber: this.dataSharingService.cardDetailsObject.CCNumber,
                CCBillingAccountName: this.dataSharingService.cardDetailsObject.CCBillingAccountName,
                CCExpirationMonth: this.dataSharingService.cardDetailsObject.CCExpirationMonth,
                CCExpirationYear: this.dataSharingService.cardDetailsObject.CCExpirationYear,
                CCBillingAddress: this.dataSharingService.cardDetailsObject.CCBillingAddress,
                CCBillingZIP: this.dataSharingService.cardDetailsObject.CCBillingZIP,
                // SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
              }
            });
          } else {
            this.autoPayForm.patchValue({
              objTenant: {
                CCNumber: Tenant.CCNumber,
                CCBillingAccountName: Tenant.CCBillingAccountName,
                CCExpirationMonth: Tenant.CCExpirationMonth,
                CCExpirationYear: Tenant.CCExpirationYear,
                CCBillingAddress: Tenant.CCBillingAddress,
                CCBillingZIP: Tenant.CCBillingZIP,
                // SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
              }
            });
          }

          this.autoPayForm.controls.objTenant.valueChanges.subscribe(data => {
            this.objTenantCopy = data;
            this.dataSharingService.isDataUpdated = (JSON.stringify(this.objTenantCopy) !== JSON.stringify(tempObject));
            this.isDataUpdated = this.dataSharingService.isDataUpdated;
            this.enableUpdateButton = true;
          });
          this.showLoader = false;
        }
      }
      , (err: any) => {
        if (err.status === 401) {
          localStorage.removeItem('strTenantToken');
          this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
          this.sessionExpire = 'Session Expired. Please Login for completing the payment.';
        }
      });
  }

  public navigateToConfirmation(location: any) {
    this.router.navigate([location]);
  }

  getPayMethods() {
   this.getPayMethodsSubscribe$ = this.fetchDataService.getPayMethods()
      .subscribe(payTypesResponse => {
        this.lstPayTypes = payTypesResponse.lstPayTypes;
        if (!!localStorage.getItem('strTenantToken')) {
          this.tenantTokenExist = true;
          this.showLoader = true;
          this.getTenantInfo();
        }
        if (!localStorage.getItem('strTenantToken')) {
          const defaultDescription = this.lstPayTypes[1].PayTypeDescription;
          const defaultPayTypeID = this.lstPayTypes[1].PayTypeID;
          this.paytypeid =  this.lstPayTypes[1].PayTypeID;
          this.surchargeService.getIdPaytype(defaultPayTypeID);
          this.autoPayForm.patchValue({
            objTenant: {
              // PreferredPaymentMethod: defaultPayTypeID,
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

  toggleEvent() {
    this.enableUpdateButton = true;
    this.count = this.count + 1;
    this.toggleSignUp = true;
    this.dataSharingService.signUpForAutoPay = !this.dataSharingService.signUpForAutoPay;
  }

  goBack() {
    this.showSuccessStatus = false;
    this.showloaderForPayment = false;
    this.IsAutoPaymentsEnabled = this.dataSharingService.signUpForAutoPay;
  }

  signOut(logOut: any) {
   this.signOutSubscribe$ = this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
      }, (err) => {
      }
    );
  }

  signUpAutoPay(signUp: any) {
    this.makeAutoPayStatus = true;
    this.progressMessage = 'Sign Up Auto Pay';
    this.signUpAutoPaySubscribe$ =  this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe(result => {
        this.makeAutoPayStatus = false;
        if (result.intErrorCode === 1) {
          this.showSuccessStatus = true;
          if (this.dataSharingService.isDataUpdated ) {
            this.successMessage = `Card Details Updated.`;
            if (this.toggleSignUp === true) {
              this.customSignUp();
            }
            if (this.IsAutoPaymentsEnabled === false && this.toggleSignUp === false) {
              this.OptionOutOfAutoPay(this.signUp);
            }
          } else {
            this.successMessage = 'Sign Up Auto Pay is Completed.';
          }
        }
        this.toggleSignUp = false;
        this.dataSharingService.isDataUpdated = false;
      }, (err) => {
    });
  }

  OptionOutOfAutoPay(signUp: any) {
    this.makeAutoPayStatus = true;
    this.progressMessage = 'Option Out Of AutoPay';
    this.OptionOutOfAutoPaySubscribe$ = this.tenantInfoService.OptionOutOfAutoPay(signUp)
      .subscribe(result => {
        this.makeAutoPayStatus = false;
        if (result.intErrorCode === 1) {
          this.showSuccessStatus = true;
          switch (true) {
            case (this.isDataUpdated && this.count > 0):
              this.successMessage = 'Card Details Updated and Option Out Of AutoPay is Completed';
              break;
            case (this.isDataUpdated && this.count === 0):
              this.successMessage = 'Card Details Updated.';
              break;
            default:
              this.successMessage = 'Option Out Of AutoPay is Completed.';
          }
        }
        this.toggleSignUp = false;
        this.dataSharingService.isDataUpdated = false;
      }, (err) => {
    });
  }

  convertDate(date: any) {
    const formattedNormalDate = new Date(date);
    // tslint:disable-next-line:max-line-length
    return `${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
  }

  customSignUp () {
    if (this.dataSharingService.signUpForAutoPay === true) {
      const signUpData = {
        objTenant: {
          CCNumber: this.autoPayForm.value.objTenant.CCNumber,
          CCBillingAccountName: this.autoPayForm.value.objTenant.CCBillingAccountName,
          CCExpirationMonth: this.autoPayForm.value.objTenant.CCExpirationMonth,
          CCExpirationYear: this.autoPayForm.value.objTenant.CCExpirationYear,
          CCBillingAddress: this.autoPayForm.value.objTenant.CCBillingAddress,
          CCBillingZIP: this.autoPayForm.value.objTenant.CCBillingZIP,
          PreferredPaymentMethod: this.autoPayForm.value.objTenant.PayType.PayTypeID,
        }
      };
    this.signUpAutoPay(signUpData);
    } else {
      this.OptionOutOfAutoPay(this.signUp);
    }
  }

  customDataUpdate() {
    const data = {
      objTenant: {
        CCNumber: this.autoPayForm.value.objTenant.CCNumber,
        CCBillingAccountName: this.autoPayForm.value.objTenant.CCBillingAccountName,
        CCExpirationMonth: this.autoPayForm.value.objTenant.CCExpirationMonth,
        CCExpirationYear: this.autoPayForm.value.objTenant.CCExpirationYear,
        CCBillingAddress: this.autoPayForm.value.objTenant.CCBillingAddress,
        CCBillingZIP: this.autoPayForm.value.objTenant.CCBillingZIP,
        PreferredPaymentMethod: this.autoPayForm.value.objTenant.PayType.PayTypeID,
      }
    };
  this.signUpAutoPay(data);
  }

  autoPayStatus() {
    switch (true) {
      case ((this.dataSharingService.isDataUpdated ===  true) && (this.toggleSignUp === true)):
        this.customDataUpdate();
        // this.customSignUp();
        break;
      case (this.toggleSignUp === true):
        this.customSignUp();
        break;
      case (this.dataSharingService.isDataUpdated === true):
        this.customDataUpdate();
        break;
    }
  }

  onSubmit() {
    this.submitted = true;
    this.makeAutoPayStatus = true;
    if (this.autoPayForm.invalid) {
      return;
    } else {
      this.showloaderForPayment = true;
      this.autoPayStatus();
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
    window.removeEventListener('beforeunload', (event) => {

    });
  }
}
