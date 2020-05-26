import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TenantInfo } from '../models/tenant';
import { DataSharingService } from '../services/data-sharing.service';
import { contact, contactsLocation2, contactsLocation1, contactsLocation3 } from '../data/contact';

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
  contact: any;
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


  private authUnsubscribe$: Subscription;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private activatedRoute: ActivatedRoute,

    private  dataSharingService: DataSharingService,
  ) {


  }

  ngOnInit() {
    if (this.router.url.includes('hunterdon-storage-ringoes')) {
      // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      // this.name = 'Hunterdon Storage at Ringoes';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('hunterdon-storage-1')) {
      // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      // this.name = 'Hunterdon Storage I';
      this.contact = contactsLocation2;
    } else  if (this.router.url.includes('hunterdon-storage-2')) {
      // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      // this.name = 'Hunterdon Storage II';
      this.contact = contactsLocation3;
    }

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
          this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
       }
    }
  }

  get f() { return this.loginForm.controls; }

  openBox() {
    this.open = !this.open;
  }


  public navigate (location: any) {
    this.router.navigate([`/pay-rent/${this.navTo}/${location}`]);
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
            this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
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
