import { Component, OnInit, Inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { contact } from "../../data/contact";
import { WINDOW } from "@ng-toolkit/universal";
import { payRentPageContent, payRentPageTitle } from "../../data/title";
import { payRentHeading } from "../../data/heading";
import { ogPayRentPage, twitterPayRentPage } from "../../data/script";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  og: any;
  twitter: any;
  contact: any;
  payRentHeading: string;
  payRentPageTitle: string;
  payRentPageContent: string;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.updateTag({
      name: "description",
      content: `${this.payRentPageContent}`,
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchpayRentHeading();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
  }

  public fetchpayRentHeading() {
    this.payRentHeading = payRentHeading;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
