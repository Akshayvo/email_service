import { Component, OnInit, Injectable, OnDestroy, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {


  @Output() closeLoginPrompt = new EventEmitter<string>();

  loginModalForm: FormGroup;
  showForgotPassword: boolean;
  showLoader: boolean;
  submitted: boolean;
  allowedToshow: boolean;
  credentialsInvalid: boolean;
  showPayRent: boolean;
  paymentTab: string;
  authData: string;
  private authUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dataSharingService: DataSharingService,
    public elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    this.loginModalForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }



  get f() { return this.loginModalForm.controls; }

  closeBox() {
    this.closeLoginPrompt.next();
  }

  handleForgotPassword() {
    this.showForgotPassword = true;
  }

  handleShowLoader() {
    this.showLoader = true;
  }

  auth(data: any): void {
    this.authUnsubscribe$ =  this.authService.auth(data)
        .subscribe(
          auth => {
            this.showPayRent = true;
            this.authData = auth.strTenantToken;
            localStorage.setItem('strTenantToken', this.authData);
            this.dataSharingService.changePassword = true;

            if (!!this.paymentTab) {
              this.router.navigate([`/pay-rent/${this.paymentTab}/changePassword`]);
            } else {
              this.router.navigate([`/pay-rent/changePassword`]);
            }
            // this.router.navigate(['/pay-rent/changePassword']);
          }, (err) => {
            this.credentialsInvalid = true;
            this.showLoader = false;
          }
        );
    }



  onSubmit() {
    this.submitted = true;

    if (this.loginModalForm.invalid) {
      return;
    } else {
      if (window.localStorage) {
        localStorage.removeItem('strTempTenantToken');
      }
      this.allowedToshow = true;
      this.auth(this.loginModalForm.value);
    }
  }

  public ngOnDestroy(): void {
    if (this.authUnsubscribe$ && !this.authUnsubscribe$.closed) {
      this.authUnsubscribe$.unsubscribe();
    }
  }

}
