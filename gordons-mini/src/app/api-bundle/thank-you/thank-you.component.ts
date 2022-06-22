import { Component, OnInit, OnDestroy } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DataSharingService } from "../services/data-sharing.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SignOutService } from "../services/sign-out.service";
import { thankYouPageContent, thankYouPageTitle } from "../../data/title";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-thank-you",
  templateUrl: "./thank-you.component.html",
  styleUrls: ["./thank-you.component.scss"],
})
export class ThankYouComponent implements OnInit, OnDestroy {
  script: any;
  strConfirmation: string;
  strAccessCode: string;
  tokenExit: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  description: string;
  monthlyRate: number;
  PaymentAmount: number;
  CCApprovalCode: string;
  amountToPayThankYou: number;
  eventName: string;
  paymentNavigationUrl: string;
  thankYouPageTitle: string;
  thankYouPageContent: string;
  facilityName: string;
  unitTypeid: any;
  paymentSuccess = false;
  navigateToPayment:boolean;
  MoveIn = {
    dteMoveIn: "",
    intUnitTypeID: 0,
  };

  private signOutSubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private dataSharingService: DataSharingService,
    public router: Router,
    private signOutService: SignOutService
  ) {
    this.facilityName = environment.facilityName;
    this.fetchMetaData();
    this.meta.updateTag({
      name: "description",
      content: `${this.thankYouPageContent}`,
    });
    this.titleService.setTitle(`${this.thankYouPageTitle}`);
  }

  ngOnInit() {
    this.strConfirmation = this.dataSharingService.strConfirmation;
    console.log(this.strConfirmation)
    this.strAccessCode = this.dataSharingService.strAccessCode;
    console.log(this.strAccessCode)
    this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
    this.navigateToReserve = this.dataSharingService.navigateToReserve;
    this.description = this.dataSharingService.LstUnitTypes.Description;
    this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
    this.PaymentAmount = this.dataSharingService.PaymentAmount;
    this.CCApprovalCode = this.dataSharingService.CCApprovalCode;
    this.amountToPayThankYou = this.dataSharingService.amountToPayThankYou;
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    console.log(this.MoveIn.dteMoveIn )
    this.eventName = this.dataSharingService.eventName;
    this.paymentSuccess = this.dataSharingService.paymentSuccess;
    this.unitTypeid = this.dataSharingService.LstUnitTypes.UnitTypeID;
    this.navigateToPayment = this.dataSharingService.navigateToPayment;
    console.log(this.navigateToPayment)

    if (localStorage.getItem("strTenantToken")) {
      this.tokenExit = localStorage.getItem("strTenantToken");
    }

    if (localStorage.getItem("paymentNavigationUrl")) {
      this.paymentNavigationUrl = localStorage.getItem("paymentNavigationUrl");
    }
    const today = new Date();
    window["dataLayer"] = window["dataLayer"] || [];
    window["dataLayer"] = window["dataLayer"] || [];
    window["dataLayer"].push({
      event: "purchase",
      transaction_id: this.strConfirmation,
      unit_rate: this.monthlyRate,
      items:
        {
          item_name: this.description,
          item_id: this.unitTypeid,
          price: this.amountToPayThankYou,
          quantity: 1,
        },
        date:
              today.getFullYear() +
              "-" +
              (today.getMonth() + 1) +
              "-" +
              today.getDate(),
            time:
              today.getHours() +
              ":" +
              today.getMinutes() +
              ":" +
              today.getSeconds(),
    });
   

  }

  public fetchMetaData() {
    this.thankYouPageTitle = thankYouPageTitle;
    this.thankYouPageContent = thankYouPageContent;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut).subscribe(
      (result) => {
        localStorage.removeItem("strTenantToken");
        if (!!localStorage.getItem("APIKey")) {
          localStorage.removeItem("APIKey");
        }
        this.router.navigate(["/"]);
      },
      (err) => {}
    );
  }

  public ngOnDestroy(): void {
    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }
    window.removeEventListener("beforeunload", (event) => {});
    this.dataSharingService.PaymentAmount = null;
    this.dataSharingService.CCApprovalCode = null;
    this.dataSharingService.navigateToReserve = null;
    this.dataSharingService.navigateToMoveIn = null;
    this.dataSharingService.navigateToPayment = null;
    this.dataSharingService.strConfirmation = null;
    this.dataSharingService.strAccessCode = null;
    this.dataSharingService.LstUnitTypes.MonthlyRate = null;
    this.dataSharingService.MoveIn.dteMoveIn = null;
  
  }
}
