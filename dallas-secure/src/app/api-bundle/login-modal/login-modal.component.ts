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


  @Output() someEvent = new EventEmitter<string>();

  loginModalForm: FormGroup;
  showForgotPassword: boolean;
  showLoader: boolean;
  submitted: boolean;
  allowedToshow: boolean;
  credentialsInvalid: boolean;
  showPayRent: boolean;
  authData: string;
  navTo: string;
  paymentTab: string;
  private authUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    public router: Router,
    public elementRef: ElementRef,
  ) {
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  ngOnInit() {
    this.loginModalForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
  }



  get f() { return this.loginModalForm.controls; }

  closeBox() {
    this.someEvent.next();
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
            this.navTo = localStorage.getItem('paymentNavigationUrl');
            this.dataSharingService.changePassword = true;
            if (!!localStorage.getItem('paymentTab')) {
              this.router.navigate([`pay-rent/${this.navTo}/${this.paymentTab}/changePassword`]);
            } else {
              this.router.navigate([`pay-rent/${this.navTo}/changePassword`]);
            }
          }, (err) => {
            this.credentialsInvalid = true;
            this.showLoader = false;
          }
        );
    }

  public ngOnDestroy(): void {
    if (this.authUnsubscribe$ && !this.authUnsubscribe$.closed) {
      this.authUnsubscribe$.unsubscribe();
    }


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
}
