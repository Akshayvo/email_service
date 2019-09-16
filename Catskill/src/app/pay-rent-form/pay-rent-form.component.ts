import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';
import { SignOutService } from '../services/sign-out.service';
import { LstPayTypes, PayTypes, PayTypeForResult } from '../models/payment';
import { UnpaidAR } from "../models/tenant";

import { month } from '../data/date';

import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss']
})
export class PayRentFormComponent implements OnInit {

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

  MinDate: string
  minDate: Date;

  marked = false;
  signUp = {};
  logOut = {};

  otherValue = '0';

  UnpaidAR: UnpaidAR[];

  showSuccessPayment = false;

  LastPaymentOn: string;
  LastPaymentAmount: string;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
    private signOutService: SignOutService,
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
      this.year.push(newYear);
      newYear = newYear + 1;
    }


  }

  ngOnInit() {
    this.getPayMethods(this.payTypes);
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


    this.payRentForm.patchValue({
      objPayment: {
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        }
      }
    });
  }

  handleChange(e) {
    if (e.target.id === '2') {
      this.showInput = true;
    } else {
      this.showInput = false;
    }
  }

  getTenantInfo(tenant) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe(tenantData => {
        // console.log(tenantData);
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled,
          this.date = Tenant.LastPaymentOn; 
          this.LastPaymentOn = this.datePipe.transform(this.date, "dd/MM/yyyy");
          this.LastPaymentAmount = Tenant.LastPaymentAmount;

          this.UnpaidAR =  Tenant.UnpaidAR;
          // console.log( typeof(this.UnpaidAR), Tenant.UnpaidAR);

          for (let i in this.UnpaidAR) {
            // const date = this.UnpaidAR[i].FromDate;
            // console.log(date);
            this.UnpaidAR[i].FromDate = this.datePipe.transform(this.UnpaidAR[i].FromDate, "dd/MM/yyyy");
            this.UnpaidAR[i].ToDate = this.datePipe.transform(this.UnpaidAR[i].ToDate, "dd/MM/yyyy");

            if (this.UnpaidAR[i].AmountOwed < 0) {
              this.UnpaidAR[i].demoAmountOwed = Math.abs(this.UnpaidAR[i].AmountOwed);
            }
          }
        

          this.payRentForm.patchValue({
            objPayment: {
              SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
            }
          });
          if (this.balance < 0) {
            this.displayBalance = Math.abs(this.balance);
          } else {
            this.displayBalance = this.balance;
          }
          this.payRentForm.patchValue({
            objPayment: {
              PaymentAmount: this.balance,
            }
          })
        }
      }
      , (err: any) => {
        if(err.status === 401) {
          localStorage.removeItem('strTenantToken');
          this.router.navigate(['/pay-rent/login']);
          this.sessionExpire = "Session Expired. Please Login for completing the payment."
          console.log('session expired.')
        }
      });
  }

  getPayMethods(PayTypes) {
    this.fetchDataService.getPayMethods(PayTypes)
      .subscribe(PayTypes => {
        this.lstPayTypes = PayTypes.lstPayTypes;
        // const defaultDescription = this.lstPayTypes[3].PayTypeDescription;
        // const defaultPayTypeID = this.lstPayTypes[3].PayTypeID;
        // this.payRentForm.patchValue({
        //   objPayment: {
        //     PayType: {
        //       PayTypeDescription: defaultDescription,
        //       PayTypeID: defaultPayTypeID,
        //     }
        //   }
        // });
      }
      );
  }

  toggleEvent(e: any) {
    this.toggleSignUp = true;
  }


  getPayment(paymentData) {
    if (this.toggleSignUp === true) {
      if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
      this.signUpAutoPay(this.signUp);
    } else {
      console.log('sign off');
      this.OptionOutOfAutoPay(this.signUp);
    }
    }
    this.invalidPayment = null,
    this.paymentService.getPayment(paymentData)
      .subscribe(paymentData => {
        this.showloaderForPayment = false;
        this.PaymentAmount = paymentData.PayTypeForResult.PaymentAmount;
        this.CCApprovalCode = paymentData.PayTypeForResult.CCApprovalCode;
        console.log(paymentData.intErrorCode, "error code for payment");
        if ( paymentData.intErrorCode === 1 ) {
          this.showSuccessPayment = true;
        } else {
          this.invalidPayment = "Unable to make the payment. Please check your card detail."
        }
      }, (err: any) => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 400) {
            this.showloaderForPayment = false;
            this.invalidPayment = "Invalid Amount, Payment Amount must be greater than 0.";
          }
        }
      }
      );
  }

  signOut(logOut: any) {
    this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        this.router.navigate(['/pay-rent/login']);
      }, (err) => {
      }
      );
  }

  // toggleSignUpForAutoPay(e: any) {
  //   if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
  //     this.signUpAutoPay(this.signUp);
  //   } else {
  //     console.log('sign off');
  //     this.OptionOutOfAutoPay(this.signUp);
  //   }
  // }

  signUpAutoPay(signUp: any) {
    this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  OptionOutOfAutoPay(signUp: any) {
    this.tenantInfoService.OptionOutOfAutoPay(signUp)
      .subscribe(result => {
      }, (err) => {
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.payRentForm.invalid) {
      return;
    } else {
      this.showloaderForPayment = true
      this.getPayment(this.payRentForm.value);
    }
  }
}
