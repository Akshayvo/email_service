import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { loginDetail} from '../../data/pay-rent';
import { contact } from '../../data/contact';
import { payRent } from '../../data/blurb';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { environment } from '../../../environments/environment';
import { tabs } from '../../data/tab';
import { payRentHeading } from '../../data/heading';
import { ogPayRentPage, twitterPayRentPage } from '../../data/script';
import { CanonicalService } from '../../services/canonical.service';


@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})

export class PayRentComponent implements OnInit {

  loginDetail: any;
  contact: any;
  payRent: any;
  tabs: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;
  showPaymentPageType: number;
  og: any;
  twitter: any;
  

  constructor(
    private titleService: Title,
    private canonical: CanonicalService,
    private meta: Meta
  ) {
    this.fetchMetaData();
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
    this.meta.addTag({
      name: 'description',
      content: `${this.payRentPageContent}`
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
    this.canonical.create();
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.showPaymentPageType = environment.signUpForAuotoPay;
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    window.scrollTo(0, 0);
  }
  public fetchOg() {
    this.og = ogPayRentPage;
  }

  public fetchTwitter() {
    this.twitter = twitterPayRentPage;
  }

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
  }

  public fetchPayment() {
    this.loginDetail = loginDetail;
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
  }
  public fetchContactDetails() {
    this.payRentHeading = payRentHeading;
    this.tabs = tabs;
  }
}
