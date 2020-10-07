import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TenantInfo } from '../models/tenant';
import { DataSharingService } from '../services/data-sharing.service';
import { contactsLocation1, contactsLocation2, contactsLocation3, contactsLocation4, contactsLocation5 } from '../../data/contact';
import { loginDetail } from '../../data/pay-rent';

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

  showForgotPassword = false;
  showPayRent = false;

  showLoader = false;

  showLoginPage = true;

  authData: string;
  tenantInfo: TenantInfo;
  tenant: any;
  balance: number;
  navTo: any;
  open = false;
  loginDetail = [];

  contact: any;
  name: string;
  id: number;
  paymentTab: string;
  private authUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private activatedRoute: ActivatedRoute,

    private  dataSharingService: DataSharingService,
  ) {

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  ngOnInit() {
    this.fetchLoginDetail();
    this.loginForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
    //  this.navTo = this.dataSharingService.paymentNavigation;
    this.navTo = localStorage.getItem('paymentNavigationUrl');

    if (window.localStorage) {
      const token = localStorage.getItem('strTenantToken');
      if (token != null) {
          // this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/changePassword`]);
          } else {
            if (this.router.url.includes('rent-sub')) {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/payment`]);
            } else {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`]);
            }
          }
       }
    }
    this.fetchContactDetail();

  }

  get f() { return this.loginForm.controls; }

  openBox() {
    this.open = !this.open;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchContactDetail() {
    if (this.router.url.includes('affordable-secure-storage-floral-city')) {
      this.id = 1;
      this.name = 'Affordable Secure Storage - Floral City';
      this.contact = contactsLocation1;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc1);
    } else if (this.router.url.includes('affordable-secure-storage-west-hernando')) {
        this.id = 2;
        this.name = 'Affordable Secure Storage - West Hernando';
        this.contact = contactsLocation2;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
        localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc2);
      } else if (this.router.url.includes('affordable-secure-storage-labelle')) {
        this.id = 3;
        this.name = 'Affordable Secure Storage - Labelle';
        this.contact = contactsLocation3;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
        localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc3);
      } else if (this.router.url.includes('affordable-secure-storage-hernando')) {
        this.id = 5;
        this.name = 'Affordable Secure Storage - Hernando';
        this.contact = contactsLocation5;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
        localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc5);
      }
  }

  public navigate (location: any) {
    this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/${location}`]);
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
          // if (this.activatedRoute.snapshot.url[1].path === 'changePassword') {
          //   this.router.navigate([`/pay-rent/${this.navTo}/changePassword`]);
          // } else {
            if (this.router.url.includes('rent-sub')) {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/payment`]);
            } else {
              if (this.router.url.includes('sign-up')) {
                this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`]);
              }
            }
          // }
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
