import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { TenantInfo, Tenant} from '../models/tenant';
import { LstPayTypes, PayTypes } from '../models/payment';


import { TenantInfoService } from '../services/tenant-info.service';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss']
})
export class PayRentFormComponent implements OnInit {

  tenantInfo: TenantInfo;
  tenant: Tenant;
  payRentForm: FormGroup;
  payTypes: PayTypes;
  lstPayTypes: LstPayTypes[];
  selectedDescription: string;
  result: any;
  balance: number;

  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
    private fetchDataService: FetchDataService,
  ) {
    this.payRentForm = this.formBuilder.group({
      lstPayTypes: new FormArray([
        this.initLstPayTypes(),
      ]),

      objPayment: this.formBuilder.group({
        CCAccountNumber: ['', Validators.required],
        CCAccountName: [''],
        expirationDate: [''],
        CCAccountCVV2: [''],
        CCAccountBillingAddress: [''],
        CCAccountZIP: [''],
        SignUpForAutoPay: false,
        PaymentAmount: ['', Validators.required]
      }),
    });
   }

  ngOnInit() {
    this.getTenantInfo(this.tenant);
    this.getPayMethods(this.payTypes);
  }

  get f() { return this.payRentForm.controls; }

  initLstPayTypes() {
    return this.formBuilder.group({
      PayTypeDescription: ['']
    });
  }

  selectChangeHandler (event: any) {

    this.selectedDescription = JSON.stringify(event.target.value);

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
      .subscribe( tenant => {
        console.log('tenant info', tenant);
        this.balance = tenant.Balance;
        
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.payRentForm.invalid) {
      return;
    } else {
    }
    console.log(this.payRentForm.value);
  }
}
