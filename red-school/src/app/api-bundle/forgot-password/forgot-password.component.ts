import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  forgotPasswordForm: FormGroup;
  submitted = false;
  showLoader = false;
  showNoError = false;
  paymentTab: string;

   private forgotPasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dataSharingService: DataSharingService,

  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      strEmailID: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  get f() { return this.forgotPasswordForm.controls; }

  goBack() {
    if (!!this.paymentTab) {
      this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
    } else {
      this.router.navigate([`/pay-rent/login`]);
    }
  }

  forgotPassword(data: any): void {
  this.forgotPasswordUnsubscribe$ =  this.authService.forgotPassword(data)
    .subscribe(
      result => {
        this.showLoader = false;
        if (result.intErrorCode === 1) {
          if (!!this.paymentTab) {
            this.router.navigate([`/pay-rent/${this.paymentTab}/verifyCode`]);
          } else {
            this.router.navigate([`/pay-rent/verifyCode`]);
          }
        } else {
          if (result.intErrorCode === 0) {
            this.showNoError = true;
          }
        }
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    } else {
      this.showLoader = true;
      this.forgotPassword(this.forgotPasswordForm.value);
    }
  }

  public ngOnDestroy(): void  {
    if (this.forgotPasswordUnsubscribe$ && !this.forgotPasswordUnsubscribe$.closed) {
      this.forgotPasswordUnsubscribe$.unsubscribe();
    }
  }

}
