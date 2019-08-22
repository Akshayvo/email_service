import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { TenantInfo, Tenant} from '../models/tenant';
import { TenantInfoService } from '../services/tenant-info.service';

@Component({
  selector: 'app-pay-rent-form',
  templateUrl: './pay-rent-form.component.html',
  styleUrls: ['./pay-rent-form.component.scss']
})
export class PayRentFormComponent implements OnInit {

  tenantInfo: TenantInfo;
  tenant: Tenant;
  payRentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tenantInfoService: TenantInfoService,
  ) {
    this.payRentForm = this.formBuilder.group({
    });
   }

  ngOnInit() {
    this.getTenantInfo(this.tenant);
  }

  get f() { return this.payRentForm.controls; }

  getTenantInfo(tenant: any) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe( tenantInfo => {
        console.log(tenantInfo);
        // console.log(tenant.Balance);
        // const BalanceValue = this.tenant.Balance;
        // console.log(BalanceValue);
      });
  }
}
