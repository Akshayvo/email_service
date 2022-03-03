import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit, OnDestroy {

  verifyCodeForm: FormGroup;
  submitted = false;
  showLoader = false;
  navTo: string;
  paymentTab: string;

   private verifyCodeUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dataSharingService: DataSharingService,

  ) {
    this.verifyCodeForm = this.formBuilder.group({
      strEmailID: ['', [Validators.required, Validators.email]],
      strPasswordToken: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (window.localStorage) {
      this.navTo = localStorage.getItem('paymentNavigationUrl');
    }

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  get f() { return this.verifyCodeForm.controls; }

  goBack() {
    this.router.navigate(['pay-rent/forgotPassword']);

    if (!!localStorage.getItem('paymentTab')) {
      this.router.navigate([`pay-rent/${this.navTo}/${this.paymentTab}/forgotPassword`]);
    } else {
      this.router.navigate([`pay-rent/${this.navTo}/forgotPassword`]);
    }
    
  }

  verifyCode(data: any): void {
  this.verifyCodeUnsubscribe$ =  this.authService.verifyCode(data)
    .subscribe(
      result => {
        if (result.blnSuccess === true) {
          this.showLoader = false;
          this.router.navigate(['pay-rent/reset']);
          if (!!localStorage.getItem('paymentTab')) {
            this.router.navigate([`pay-rent/${this.navTo}/${this.paymentTab}/reset`]);
          } else {
            this.router.navigate([`pay-rent/${this.navTo}/reset`]);
          }
        }
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.verifyCodeForm.invalid) {
      return;
    } else {
      this.showLoader = true;
      this.verifyCode(this.verifyCodeForm.value);
      this.dataSharingService.verificationCode = this.verifyCodeForm.value.strPasswordToken;
    }
  }

  public ngOnDestroy(): void  {
    if (this.verifyCodeUnsubscribe$ && !this.verifyCodeUnsubscribe$.closed) {
      this.verifyCodeUnsubscribe$.unsubscribe();
    }
  }
}
