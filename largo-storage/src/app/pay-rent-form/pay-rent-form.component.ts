import { Component, OnInit, OnDestroy, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';
import { SignOutService } from '../services/sign-out.service';
import { LstPayTypes, PayTypes, PayTypeForResult, ObjPayment } from '../models/payment';
import { UnpaidAR } from '../models/tenant';


import { month } from '../data/date';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';
import { SurchargeService } from '../services/surcharge.service';



@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss'],
  providers:[DatePipe],
})
export class PayRentFormComponent implements OnInit, OnDestroy {

  balance: number;
  payRentForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes: LstPayTypes[];
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

  date: Date;

  MinDate: string;
  minDate: Date;

  surcharge: number;

  marked = false;
  signUp = {};
  logOut = {};

  otherValue = '0';
  id: string;

  UnpaidAR: UnpaidAR[];

  showSuccessPayment = false;

  LastPaymentOn: string;
  LastPaymentAmount: string;

  paytypeid: number;
  AmountToPay: number;

  customOtherValue: number;
  errorMessage: string;
  showError = false;
  count = 0;

  private OptionOutOfAutoPayUnsubscribe$: Subscription;
  private signUpAutoPayUnsubscribe$: Subscription;
  private signOutUnsubscribe$: Subscription;
  private getPaymentUnsubscribe$: Subscription;
  private getPayMethodsUnsubscribe$: Subscription;
  private getTenantInfoUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
    private signOutService: SignOutService,
    private surchargeService: SurchargeService,
    public router: Router,
    private datePipe: DatePipe,
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


  }

  ngOnInit() {
    this.getPayMethods();
    this.fetchMonth();
    this.getTenantInfo(this.tenant);

  }

  get f() { return this.payRentForm.controls; }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchMonth() {
    this.month = month;
  }


  selectChangeHandler(event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue = event.target.value;
    const index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === indexValue);

    this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;

    this.surchargeService.getIdPaytype(this.PayTypeIDValue);


    this.payRentForm.patchValue({
      objPayment: {
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        }
      }
    });


    if ( this.showInput) {
      if (this.customOtherValue) {
        this.surchargeService.getAmt(this.customOtherValue);
        this.getSurCharge();
      }
    } else {
      this.getSurCharge();
    }

  }


  handleChange(e: any) {
    if (e.target.id === '2') {
      this.showInput = true;
      this.id = e.target.id;
      this.surcharge = 0;
    } else {
      // this.surcharge = 0;
      this.surchargeService.getAmt(this.balance);
      this.getSurCharge();
      this.showInput = false;

    }
  }

  onKeyUp(e: any) {
    if (e.target.value) {
      this.customOtherValue = e.target.value;
      this.surchargeService.getAmt(e.target.value);
      setTimeout(() => {
        this.getSurCharge();
   }, 1000);

    } else {
        this.surcharge = 0;
    }
  }

  getTenantInfo(tenant: any) {
  this.getTenantInfoUnsubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        console.log(tenantData);
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          this.surchargeService.getAmt(this.balance);
          this.surchargeService.getIdPaytype(this.paytypeid);
          this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled,
          this.date = Tenant.LastPaymentOn;
          this.LastPaymentOn = this.datePipe.transform(this.date, 'dd/MM/yyyy');
          this.LastPaymentAmount = Tenant.LastPaymentAmount;

          this.UnpaidAR =  Tenant.UnpaidAR;
          // console.log( typeof(this.UnpaidAR), Tenant.UnpaidAR);

          // tslint:disable-next-line:forin
          for (const i in this.UnpaidAR) {
            // const date = this.UnpaidAR[i].FromDate;
            // console.log(date);
            this.UnpaidAR[i].FromDate = this.datePipe.transform(this.UnpaidAR[i].FromDate, 'dd/MM/yyyy');
            this.UnpaidAR[i].ToDate = this.datePipe.transform(this.UnpaidAR[i].ToDate, 'dd/MM/yyyy');

            if (this.UnpaidAR[i].AmountOwed < 0) {
              this.UnpaidAR[i].demoAmountOwed = Math.abs(this.UnpaidAR[i].AmountOwed);
            }
          }

          if (this.balance < 0) {
            this.displayBalance = Math.abs(this.balance);
          } else {
            this.displayBalance = this.balance;
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
              PaymentAmount: this.balance,
            }
          });

          this.getSurCharge();
        }
      }
      , (err: any) => {
        if (err.status === 401) {
          localStorage.removeItem('strTenantToken');
          this.router.navigate(['/pay-rent/login']);
          this.sessionExpire = 'Session Expired. Please Login for completing the payment.';
        }
      });
  }

  getPayMethods() {
   this.getPayMethodsUnsubscribe$ = this.fetchDataService.getPayMethods()
      .subscribe(payTypesResponse => {
        this.lstPayTypes = payTypesResponse.lstPayTypes;
        const defaultDescription = this.lstPayTypes[1].PayTypeDescription;
        const defaultPayTypeID = this.lstPayTypes[1].PayTypeID;
        this.paytypeid = this.lstPayTypes[1].PayTypeID;
        this.surchargeService.getIdPaytype(defaultPayTypeID);
        this.payRentForm.patchValue({
          objPayment: {
            PayType: {
              PayTypeDescription: defaultDescription,
              PayTypeID: defaultPayTypeID,
            }
          }
        });

      }
      );
  }

  toggleEvent(e: any) {
    this.toggleSignUp = true;
  }

  getSurCharge() {
    this.surcharge = 0;
    this.surchargeService.getSurCharge()
    .subscribe(result => {
      this.AmountToPay = result.decTotalAmount;

      if (this.showInput) {
        // console.log("other value from surcharge", this.customOtherValue);
       if (this.customOtherValue) {
          this.surcharge = result.decTotalAmount - this.customOtherValue;
        }
        } else {
          this.surcharge = result.decTotalAmount - this.balance;
        }
      }, (err: any) => {
        if (err.status === 400) {
          this.showError = true;
          this.errorMessage = 'Please enter the valid amount';
        }
      }
    );
  }

  getPayment(paymentData: any) {
    if (this.toggleSignUp === true) {
      if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
      this.signUpAutoPay(this.signUp);
    } else {
      this.OptionOutOfAutoPay(this.signUp);
    }
    }
    this.invalidPayment = null,
   this.getPaymentUnsubscribe$ = this.paymentService.getPayment(paymentData)
      .subscribe(paymentDataResponse => {
        this.showloaderForPayment = false;
        this.PaymentAmount = paymentDataResponse.PayTypeForResult.PaymentAmount;
        this.CCApprovalCode = paymentDataResponse.PayTypeForResult.CCApprovalCode;
        console.log(paymentDataResponse.intErrorCode, 'error code for payment');
        if ( paymentDataResponse.intErrorCode === 1 ) {
          this.showSuccessPayment = true;
        } else {
          this.invalidPayment = 'Unable to make the payment. Please check your card detail.';
        }
      }, (err: any) => {
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
   this.signOutUnsubscribe$ = this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        this.router.navigate(['/pay-rent/login']);
      }, (err) => {
      }
      );
  }

  signUpAutoPay(signUp: any) {
  this.signUpAutoPayUnsubscribe$ =  this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  OptionOutOfAutoPay(signUp: any) {
   this.OptionOutOfAutoPayUnsubscribe$ = this.tenantInfoService.OptionOutOfAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  public ngOnDestroy(): void {
    if (this.OptionOutOfAutoPayUnsubscribe$ && this.OptionOutOfAutoPayUnsubscribe$.closed) {
      this.OptionOutOfAutoPayUnsubscribe$.unsubscribe();
    }

    if (this.signUpAutoPayUnsubscribe$ && this.signUpAutoPayUnsubscribe$.closed) {
      this.signUpAutoPayUnsubscribe$.unsubscribe();
    }

    if (this.signOutUnsubscribe$ && this.signOutUnsubscribe$.closed) {
      this.signOutUnsubscribe$.unsubscribe();
    }

    if (this.getPaymentUnsubscribe$ && this.getPaymentUnsubscribe$.closed) {
      this.getPaymentUnsubscribe$.unsubscribe();
    }

    if (this.getPayMethodsUnsubscribe$ && this.getPayMethodsUnsubscribe$.closed) {
      this.getPayMethodsUnsubscribe$.unsubscribe();
    }

    if (this.getTenantInfoUnsubscribe$ && this.getTenantInfoUnsubscribe$.closed) {
      this.getTenantInfoUnsubscribe$.unsubscribe();
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.payRentForm.invalid) {
      return;
    } else {
      this.showloaderForPayment = true;
      this.getPayment(this.payRentForm.value);
    }
  }
}
