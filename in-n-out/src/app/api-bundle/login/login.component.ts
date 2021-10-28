import { Component, OnInit, Injectable, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { TenantInfo } from "../models/tenant";
import { DataSharingService } from "../services/data-sharing.service";
import {
  contactsLocation1,
  contactsLocation2,
  contactsLocation3,
  contactsLocation4,
  contactsLocation5,
  contactsLocation6,
} from "../../data/contact";
import { loginDetail } from "../../data/pay-rent";
import {
  ogPayRentPageLocation1,
  ogPayRentPageLocation2,
  ogPayRentPageLocation3,
  ogPayRentPageLocation4,
  ogPayRentPageLocation5,
  twitterPayRentPageLocation1,
  twitterPayRentPageLocation2,
  twitterPayRentPageLocation3,
  twitterPayRentPageLocation4,
  ogPayRentPageLocation6,
  twitterPayRentPageLocation5,
  twitterPayRentPageLocation6,
} from "../../data/script";
import { Meta } from "@angular/platform-browser";

@Injectable()
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
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
    private dataSharingService: DataSharingService
  ) {
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach((element) => {
      this.meta.addTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitter.forEach((element) => {
      this.meta.addTag({
        name: element.name,
        content: element.content,
      });
    });

    if (!!localStorage.getItem("paymentTab")) {
      this.paymentTab = localStorage.getItem("paymentTab");
    }
  }

  ngOnInit() {
    this.fetchLoginDetail();
    this.loginForm = this.formBuilder.group({
      strUserName: ["", Validators.required],
      strPassword: ["", Validators.required],
      intAuthMethod: 1,
    });
    //  this.navTo = this.dataSharingService.paymentNavigation;
    this.navTo = localStorage.getItem("paymentNavigationUrl");

    if (window.localStorage) {
      const token = localStorage.getItem("strTenantToken");
      if (token != null) {
        if (!!this.paymentTab) {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([
              `/pay-rent/${this.navTo}/${this.paymentTab}/changePassword`,
            ]);
          } else {
            if (this.router.url.includes("rent-sub")) {
              this.router.navigate([
                `/pay-rent/${this.navTo}/${this.paymentTab}/payment`,
              ]);
            } else {
              this.router.navigate([
                `/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`,
              ]);
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

  get f() {
    return this.loginForm.controls;
  }

  openBox() {
    this.open = !this.open;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchContactDetail() {
    if (this.router.url.includes("commerce-st")) {
      this.id = 1;
      this.name = "In-N-Out Storage - Commerce St";
      this.contact = contactsLocation1;
      this.dataSharingService.apiKey =
        this.dataSharingService.locationAPIKey.loc1;
      localStorage.setItem(
        "APIKey",
        this.dataSharingService.locationAPIKey.loc1
      );
    } else if (this.router.url.includes("pleasantview")) {
      this.id = 2;
      this.name = "In-N-Out Storage - Pleasantview";
      this.contact = contactsLocation2;
      this.dataSharingService.apiKey =
        this.dataSharingService.locationAPIKey.loc2;
      localStorage.setItem(
        "APIKey",
        this.dataSharingService.locationAPIKey.loc2
      );
    } else if (this.router.url.includes("clifford-north")) {
      this.id = 3;
      this.name = "In-N-Out Storage - Clifford North";
      this.contact = contactsLocation3;
      this.dataSharingService.apiKey =
        this.dataSharingService.locationAPIKey.loc3;
      localStorage.setItem(
        "APIKey",
        this.dataSharingService.locationAPIKey.loc3
      );
    } else if (this.router.url.includes("clifford-south")) {
      this.id = 4;
      this.name = "In-N-Out Storage - Clifford South";
      this.contact = contactsLocation4;
      this.dataSharingService.apiKey =
        this.dataSharingService.locationAPIKey.loc4;
      localStorage.setItem(
        "APIKey",
        this.dataSharingService.locationAPIKey.loc4
      );
    } else if (this.router.url.includes("woodland")) {
      this.id = 5;
      this.name = "In-N-Out Storage - Woodland";
      this.contact = contactsLocation5;
      this.dataSharingService.apiKey =
        this.dataSharingService.locationAPIKey.loc5;
      localStorage.setItem(
        "APIKey",
        this.dataSharingService.locationAPIKey.loc5
      );
    } 
   
  }

  public navigate(location: any) {
    if (!!this.paymentTab) {
      this.router.navigate([
        `/pay-rent/${this.navTo}/${this.paymentTab}/${location}`,
      ]);
    } else {
      this.router.navigate([`/pay-rent/${this.navTo}/${location}`]);
    }
  }

  public fetchOg() {
    if (this.router.url.includes("commerce-st")) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes("pleasantview")) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes("clifford-north")) {
      this.og = ogPayRentPageLocation3;
    } else if (this.router.url.includes("clifford-south")) {
      this.og = ogPayRentPageLocation4;
    } else if (this.router.url.includes("location5")) {
      this.og = ogPayRentPageLocation5;
    } 
    
  }

  public fetchTwitter() {
    if (this.router.url.includes("commerce-st")) {
      this.twitter = twitterPayRentPageLocation1;
    } else if (this.router.url.includes("pleasantview")) {
      this.twitter = twitterPayRentPageLocation2;
    } else if (this.router.url.includes("clifford-north")) {
      this.twitter = twitterPayRentPageLocation3;
    } else if (this.router.url.includes("clifford-south")) {
      this.twitter = twitterPayRentPageLocation4;
    } else if (this.router.url.includes("location5")) {
      this.twitter = twitterPayRentPageLocation5;
    } 
   
  }

  handleForgotPassword() {
    this.showForgotPassword = true;
  }

  handleShowLoader() {
    this.showLoader = true;
  }

  auth(data: any): void {
    this.authUnsubscribe$ = this.authService.auth(data).subscribe(
      (auth) => {
        this.showPayRent = true;
        this.authData = auth.strTenantToken;
        localStorage.setItem("strTenantToken", this.authData);
        if (!!localStorage.getItem("paymentTab")) {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([
              `/pay-rent/${this.navTo}/${this.paymentTab}/changePassword`,
            ]);
          } else {
            if (this.router.url.includes("rent-sub")) {
              this.router.navigate([
                `/pay-rent/${this.navTo}/${this.paymentTab}/payment`,
              ]);
            } else {
              this.router.navigate([
                `/pay-rent/${this.navTo}/${this.paymentTab}/auto-pay`,
              ]);
            }
          }
        } else {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${this.navTo}/changePassword`]);
          } else {
            this.router.navigate([`/pay-rent/${this.navTo}/payment`]);
          }
        }
      },
      (err) => {
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
        localStorage.removeItem("strTempTenantToken");
      }
      this.allowedToshow = true;
      this.auth(this.loginForm.value);
    }
  }
}
