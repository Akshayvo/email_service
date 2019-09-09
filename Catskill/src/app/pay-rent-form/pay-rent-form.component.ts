import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { LstPayTypes, PayTypes } from '../models/payment';

import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';
import { SignOutService } from '../services/sign-out.service';
import { PayTypeForResult } from '../models/payment';

import {  month } from '../data/date';

import { Router } from '@angular/router';


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
  showInput = false;
  submitted = false;
  marked = false;
  signUp = {};
  logOut = {};

  otherValue = 0;

  showSuccessPayment = false;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
    private signOutService: SignOutService,
    public router: Router,
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
        SignUpForAutoPay: false,
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


  selectChangeHandler (event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue  = event.target.value;
    const  index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === indexValue);

    this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
    

    this.payRentForm.patchValue({
      objPayment: {
        PayType: {
          PayTypeID: this.PayTypeIDValue,
        }
      }
    });
  }

  handleChange(e)  {
    if (e.target.id === '2') {
      this.showInput = true;
    } else {
      this.showInput = false;
    }
  }

  getTenantInfo(tenant) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe( tenantData => {
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
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
      , (err) => {
      });
  }

  getPayMethods(PayTypes) {
    this.fetchDataService.getPayMethods(PayTypes)
    .subscribe( PayTypes => {
        this.lstPayTypes = PayTypes.lstPayTypes;
        const defaultDescription = this.lstPayTypes[3].PayTypeDescription;
        const defaultPayTypeID = this.lstPayTypes[3].PayTypeID;
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

  getPayment(paymentData) {
    this.paymentService.getPayment(paymentData)
      .subscribe( paymentData => {
        this.showSuccessPayment = true;
        this.PaymentAmount = paymentData.PayTypeForResult.PaymentAmount;
        this.CCApprovalCode = paymentData.PayTypeForResult.CCApprovalCode;
      }, (err) => {
      }
      );
  }

  signOut(logOut: any) {
    this.signOutService.signOut(logOut)
    .subscribe( result => {
      localStorage.removeItem('strTenantToken');
      this.router.navigate(['/pay-rent/login']);
    }, (err) => {
    }
    );
  }

  toggleEvent(e: any) {
    if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
      this.signUpAutoPay(this.signUp);
    }
  }

  signUpAutoPay(signUp: any) {
    this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe( result => {
      }, (err) => {
      });
  }

  onKey(e: any) {
     this.otherValue  = e.target.value;
     setTimeout(() => {
       this.payRentForm.patchValue({
         objPayment: {
           PaymentAmount: e.target.value,
         }
       });
      }, 0);
    }



  onSubmit() {
    this.submitted = true;

    if (this.payRentForm.invalid) {
      return;
    } else {
      this.getPayment(this.payRentForm.value);
    }
  }
}
