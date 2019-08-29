import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { LstPayTypes, PayTypes } from '../models/payment';

import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';
import { SignOutService } from '../services/sign-out.service';

import {  month } from '../data/date';

@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss']
})
export class PayRentFormComponent implements OnInit {

  @Input() balance: number;

  payRentForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes: LstPayTypes[];
  selectedDescription: string;
  result: any;

  month: any;

  year = [];
  textBox: any;

  PayTypeIDValue: number;

  showInput = false;

  submitted = false;
  marked = false;

  signUp = {};

  logOut = {};

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
    private signOutService: SignOutService,
  ) {
    this.payRentForm = this.formBuilder.group({

      objPayment: this.formBuilder.group({
        CCAccountNumber: ['', Validators.required],
        CCAccountName: [''],
        CCExpirationMonth: [''],
        CCExpirationYear: [''],
        CCAccountCVV2: [''],
        CCAccountBillingAddress: [''],
        CCAccountZIP: [''],
        SignUpForAutoPay: false,
        PaymentAmount: ['', Validators.required],
        PayType: this.formBuilder.group({
          PayTypeDescription: [''],
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
  }

  get f() { return this.payRentForm.controls; }

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

  handleChange()  {
    if (this.payRentForm.value.objPayment.PaymentAmount === 'otherValue') {
      this.showInput = true;
    } else {
      this.showInput = false;
    }
  }


  getPayMethods(PayTypes) {
    this.fetchDataService.getPayMethods(PayTypes)
    .subscribe( PayTypes => {
        this.lstPayTypes = PayTypes.lstPayTypes;
      }
    );
  }

  getPayment(paymentData) {
    this.paymentService.getPayment(paymentData)
      .subscribe( paymentData => {
        console.log('payment service worked', paymentData);
      }, (err) => {
      }
      );
  }

  signOut(logOut: any) {
    console.log('sign out method is working');
    this.signOutService.signOut(logOut)
    .subscribe( result => {
      console.log('logged out', result);
      localStorage.removeItem('strTenantToken');
    }, (err) => {
    }
    );
  }

  toggleEvent(e: any) {
    console.log(this.payRentForm.value.objPayment.SignUpForAutoPay);
    if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
      this.signUpAutoPay(this.signUp);
    }
  }

  signUpAutoPay(signUp: any) {
    this.tenantInfoService.signUpAutoPay(signUp)
      .subscribe( result => {
        console.log(result);
      }, (err) => {
      });
  }

  onKey(e: any) {
    this.payRentForm.patchValue({
      objPayment: {
        PaymentAmount: this.textBox,
      }
    });
  }

  onSubmit() {
    this.submitted = true;
  }
}
