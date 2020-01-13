import { Component, OnInit, Injectable, OnDestroy, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {


  @Output() someEvent = new EventEmitter<string>();

  loginForm: FormGroup;
  showForgotPassword: boolean;
  showLoader: boolean;
  submitted: boolean;
  allowedToshow: boolean;
  credentialsInvalid: boolean;
  showPayRent: boolean;
  authData: string;
  private authUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    public elementRef: ElementRef,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
  }



  get f() { return this.loginForm.controls; }

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
            this.router.navigate(['/pay-rent/changePassword']);
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

    if (this.loginForm.invalid) {
      return;
    } else {
      if (window.localStorage) {
        localStorage.removeItem('strTempTenantToken');
      }
      this.allowedToshow = true;
      this.auth(this.loginForm.value);
    }
  }

}
