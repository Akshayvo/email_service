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
  showMessage = false;
  navTo: string;
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

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  ngOnInit() {

    if (window.localStorage) {
      this.navTo = localStorage.getItem('paymentNavigationUrl');
    }
  }

  get f() { return this.forgotPasswordForm.controls; }

  goBack() {
    this.router.navigate(['pay-rent']);
  }

  forgotPassword(data: any): void {
  this.forgotPasswordUnsubscribe$ =  this.authService.forgotPassword(data)
    .subscribe(
      result => {
        if (result.intErrorCode === 1) {
          this.showLoader = false;

          if (!!localStorage.getItem('paymentTab')) {
            this.router.navigate([`pay-rent/${this.navTo}/${this.paymentTab}/verifyCode`]);
          } else {
            this.router.navigate([`pay-rent/${this.navTo}/verifyCode`]);
          }
        } else {
          this.showLoader = false;
          this.showMessage = true;
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
