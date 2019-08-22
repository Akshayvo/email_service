import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { TenantInfo, Tenant} from '../models/tenant';
import { LstPayTypes } from '../models/payment';


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
  lstPayTypes: LstPayTypes[];
  selectedDescription: string;

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
    });
   }

  ngOnInit() {
    this.getTenantInfo(this.tenant);
    this.getPayMethods(this.lstPayTypes);
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

  getPayMethods(lstPayTypes: any): void {
    this.fetchDataService.getPayMethods(lstPayTypes)
    .subscribe(
      result => {
        this.LstPayTypes = result;
      }
    );
  }

  getTenantInfo(tenant: any) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe( tenantInfo => {
        console.log(tenantInfo);
        // console.log(tenant.Balance);
        // const BalanceValue = this.tenant.Balance;
        // console.log(BalanceValue);
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.payRentForm.invalid) {
      return;
    } else {
      // this.addTenant(this.payRentForm.value);
    }
    console.log(this.payRentForm.value);
  }
}
