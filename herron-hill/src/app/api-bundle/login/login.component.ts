import { Component, OnInit, Injectable, OnDestroy, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TenantInfo } from '../models/tenant';
import { DataSharingService } from '../services/data-sharing.service';
import { loginDetail } from '../../data/pay-rent';
import { contact } from '../../data/contact';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, twitterPayRentPage } from '../../data/script';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
@Injectable()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  submitted = false;
  credentialsInvalid = false;

  allowedToshow = false;

  loginDetail = [];
  contact: any;


  showForgotPassword = false;
  showPayRent = false;

  showLoader = false;
  paymentTab: string;
  showLoginPage = true;

  authData: string;
  tenantInfo: TenantInfo;
  tenant: any;
  balance: number;
  open = false;
  og: any;
  twitter: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  
  private authUnsubscribe$: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private dataSharingService: DataSharingService,
    private authService: AuthService,
    private meta: Meta,
    public router: Router,
    public elementRef: ElementRef,
  ) {
    this.fetchMetaData();
    // this.fetchOg();
    // this.fetchTwitter();
    // this.og.forEach(element => {
    //   this.meta.addTag({
    //     property: element.property,
    //     content: element.content
    //   })
    // });

    // this.twitter.forEach(element => {
    //   this.meta.addTag({
    //     name: element.name,
    //     content: element.content
    //   })
    // });

  }

  ngOnInit() {
    this.fetchLoginDetail();
    this.fetchContactDetails();

    this.loginForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
    if (window.localStorage) {
      const token = localStorage.getItem('strTenantToken');
      if (token != null) {
        if (this.dataSharingService.changePassword === true) {
          this.router.navigate(['/pay-rent/rent-sub/changePassword']);
        } else {
          if (this.router.url.includes('rent-sub')) {
            this.router.navigate(['/pay-rent/rent-sub/payment']);
          } else {
            if (this.router.url.includes('sign-up')) {
              this.router.navigate(['/pay-rent/sign-up/auto-pay']);
            } else {
              this.router.navigate([`/pay-rent/payment`]);
            }
          }
        }
       }
    }

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  get f() { return this.loginForm.controls; }

  openBox() {
    this.open = !this.open;
  }

  // public fetchOg() {
  //   this.og = ogPayRentPage;
  // }

  // public fetchTwitter() {
  //   this.twitter = twitterPayRentPage;
  // }

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
  }

  public navigate (location: any) {
    if (!!this.paymentTab) {
      this.router.navigate([`/pay-rent/${this.paymentTab}/${location}`]);
    } else {
      this.router.navigate([`/pay-rent/${location}`]);
    }
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchContactDetails() {
    this.contact = contact;
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
          // this.dataSharingService.strTenantToken = this.authData;
          if (this.router.url.includes('rent-sub')) {
            this.router.navigate(['/pay-rent/rent-sub/payment']);
          } else {
            if (this.router.url.includes('sign-up')) {
              this.router.navigate(['/pay-rent/sign-up/auto-pay']);
            } else {
              this.router.navigate(['/pay-rent/payment']);
            }
          }
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
      if (window.localStorage) {
        localStorage.removeItem('strTempTenantToken');
      }
      this.allowedToshow = true;
      this.auth(this.loginForm.value);
    }
  }


  public ngOnDestroy(): void {
      if (this.authUnsubscribe$ && !this.authUnsubscribe$.closed) {
      this.authUnsubscribe$.unsubscribe();
    }
  }
}
