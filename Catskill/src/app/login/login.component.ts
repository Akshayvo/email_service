import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { throwError } from 'rxjs';

import { TenantInfo, Tenant} from '../models/tenant';
import { TenantInfoService } from '../services/tenant-info.service';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  credentialsInvalid = false;

  allowedToshow = false;

  showForgotPassword = false;
  showPayRent = false;

  showLoader = false;

  authData: string;
  tenantInfo: TenantInfo;
  tenant: any;
  balance: number;



  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tenantInfoService: TenantInfoService, 

  ) {
  const authToken = environment.authToken;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
  }

  get f() { return this.loginForm.controls; }

  handleForgotPassword() {
    this.showForgotPassword = true;
  }

  handleShowLoader() {
    this.showLoader = true;
  }

  getTenantInfo(tenant) {
    this.tenantInfoService.getTenantInfo(tenant)
      .subscribe( tenantData => {
        console.log('tenant info', tenantData);
        if (tenantData) {
          const { Tenant } = tenantData;
          this.balance = Tenant.Balance;
          console.log(this.balance);
        }
      }
      , (err) => {
      });
  }

  auth(data: any): void {
    this.authService.auth(data)
      .subscribe(
        auth => {
          this.showPayRent = true;
          this.authData = auth.strTenantToken;
          localStorage.setItem('strTenantToken', this.authData);
          // environment.authToken = this.authData;

          this.getTenantInfo(this.tenant);
        }, (err) => {
          this.credentialsInvalid = true;
          this.showLoader = false;
        }
      );
  }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.allowedToshow = true;
      this.auth(this.loginForm.value);
    }
  }

}
