import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TenantInfo } from '../models/tenant';
import { DataSharingService } from '../services/data-sharing.service';
import { contactsLocation1, contactsLocation2, contactsLocation3, contactsLocation4, contactsLocation5, contactsLocation6, } from '../../data/contact';
import { loginDetail1,loginDetail2 } from '../../data/pay-rent';
import { ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4, ogPayRentPageLocation5,
   twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, twitterPayRentPageLocation4,ogPayRentPageLocation6,
   twitterPayRentPageLocation5, twitterPayRentPageLocation6 } from '../../data/script';
import { Meta } from '@angular/platform-browser';


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
  loginDetail1 = [];
  loginDetail2 = [];
  

  contact: any;
  name: string;
  id: number;
  paymentTab: string;
  twitter: any;
  og: any;
  private authUnsubscribe$: Subscription;
  acceptedValues = [6];
  acceptedValuesComingSoon = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private meta: Meta,
    private  dataSharingService: DataSharingService,
  ) {
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });

    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }

  ngOnInit() {
    // this.fetchLoginDetail(); 
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
        if (!!this.paymentTab) {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/changePassword`]);
          } else {
          if (this.router.url.includes('rent-sub')) {
            this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/payment`]);
          } else {
            this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`]);
          }
        }
        } else {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${this.navTo}/changePassword`]);
          } else {
          this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
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

  public fetchLoginDetail1() {
    this.loginDetail = loginDetail1;
  }
  public fetchLoginDetail2() {
    this.loginDetail = loginDetail2;
  }

  public fetchContactDetail() {

    if (this.router.url.includes('chillicothe')) {
      this.id = 1;
      this.name = 'Herlihy Self Storage';
      this.contact = contactsLocation1;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc1);
      this.fetchLoginDetail1();
    } else  if (this.router.url.includes('grove-city')) {
      this.id = 2;
      this.name = 'U Stor 104 Self-Storage';
      this.contact = contactsLocation2;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc2);
      this.fetchLoginDetail2();
    } else  if (this.router.url.includes('')) {
      this.id = 3;
      this.name = '';
      this.contact = contactsLocation3;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc3);
    } else  if (this.router.url.includes('')) {
      this.id = 4;
      this.name = '';
      this.contact = contactsLocation4;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc4);
    } else  if (this.router.url.includes('')) {
      this.id = 5;
      this.name = '';
      this.contact = contactsLocation5;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc5);
    } else  if (this.router.url.includes('')) {
      this.id = 6;
      this.name = '';
      this.contact = contactsLocation6;
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc6;
      localStorage.setItem('APIKey', this.dataSharingService.locationAPIKey.loc6);
    }
  }

  public navigate (location: any) {
    if (!!this.paymentTab) {
      this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/${location}`]);
    } else {
      this.router.navigate([`/pay-rent/${this.navTo}/${location}`]);
    }
  }

  public fetchOg() {
    if (this.router.url.includes('chillicothe')) {
      this.og = ogPayRentPageLocation1;
    } else  if (this.router.url.includes('grove-city')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('')) {
      this.og = ogPayRentPageLocation3;
    } else if (this.router.url.includes('')) {
      this.og = ogPayRentPageLocation4;
    } else if (this.router.url.includes('')) {
      this.og = ogPayRentPageLocation5;
    } else if (this.router.url.includes('')) {
      this.og = ogPayRentPageLocation6;
    }
    }

public fetchTwitter() {
  if (this.router.url.includes('chillicothe')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('grove-city')) {
      this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('')) {
        this.twitter = twitterPayRentPageLocation3;
  } else if (this.router.url.includes('')) {
        this.twitter = twitterPayRentPageLocation4;
  } else if (this.router.url.includes('')) {
    this.twitter = twitterPayRentPageLocation5;
  } else if (this.router.url.includes('')) {
    this.twitter = twitterPayRentPageLocation6;
  }
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
          if (!!localStorage.getItem('paymentTab')) {
            if (this.dataSharingService.changePassword === true) {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/changePassword`]);
            } else {
            if (this.router.url.includes('rent-sub')) {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/payment`]);
            } else {
              this.router.navigate([`/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`]);
            }
          }
          } else {
            if (this.dataSharingService.changePassword === true) {              
              this.router.navigate([`/pay-rent/${this.navTo}/changePassword`]);
            } else {
            this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
            }
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
