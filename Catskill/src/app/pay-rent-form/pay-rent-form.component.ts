import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { TenantInfo, Tenant} from '../models/tenant';
import { LstPayTypes, PayTypes } from '../models/payment';


import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss']
})
export class PayRentFormComponent implements OnInit {

  tenantInfo: TenantInfo;
  tenant: any;
  payRentForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes: LstPayTypes[];
  selectedDescription: string;
  result: any;
  balance: number;

  PayTypeIDValue: number;

  options = false;

  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
    private paymentService: PaymentService,
  ) {
    this.payRentForm = this.formBuilder.group({

      objPayment: this.formBuilder.group({
        CCAccountNumber: ['', Validators.required],
        CCAccountName: [''],
        expirationDate: [''],
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
   }

  ngOnInit() {
    this.getTenantInfo(this.tenant);
    this.getPayMethods(this.payTypes);
  }

  get f() { return this.payRentForm.controls; }

  selectChangeHandler (event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);

    const indexValue  = event.target.value;
    console.log(indexValue);
   const  index = this.lstPayTypes.findIndex(x => x.PayTypeDescription === indexValue);

   this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;

   console.log('pay type id ', this.PayTypeIDValue);

  this.payRentForm.patchValue({
    PayType: {
      PayTypeID: this.PayTypeIDValue,
    }
  });
  }

  handleChange(event: any) {
    this.options = !this.options;
    console.log('id is', event.id);
  }

  getPayMethods(PayTypes) {
    this.fetchDataService.getPayMethods(PayTypes)
    .subscribe( PayTypes => {
        this.lstPayTypes = PayTypes.lstPayTypes;
      }
    );
  }

  getTenantInfo(tenant) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe( tenantData => {
        console.log('tenant info', tenantData);
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          // console.log(this.balance);
        }
      });
  }

  getPayment(paymentData) {
    this.paymentService.getPayment(paymentData)
      .subscribe( paymentData => {
        console.log('payment service worked', paymentData);
      });
  }

  onSubmit() {
    this.submitted = true;

    console.log('pay rent is working');

    // if (this.payRentForm.invalid) {
    //   return;
    // } else {
    // }
    this.getPayment(this.payRentForm.value);
    console.log(this.payRentForm.value);
  }
}
