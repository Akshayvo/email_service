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
    // this.fetchMetaData();
    // this.fetchOg();
    // this.fetchTwitter();
    // this.og.forEach(element => {
    //   this.meta.updateTag({
    //     property: element.property,
    //     content: element.content
    //   })
    // });

    // this.twitter.forEach(element => {
    //   this.meta.updateTag({
    //     name: element.name,
    //     content: element.content
    //   })
    // });
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

  public fetchpayRentHeading() {
    this.payRentHeading = payRentHeading;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
