import { Component, OnInit  } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { payRentHeading } from '../../data/heading';
import { loginDetail } from '../../data/pay-rent';


@Component({
  selector: 'app-payment-iframe-page',
  templateUrl: './payment-iframe-page.component.html',
  styleUrls: ['./payment-iframe-page.component.scss']
})
export class PaymentIframePageComponent implements OnInit {

  contact: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;
  loginDetail = [];

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.payRentPageContent}`
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchLoginDetail();
    this.fetchpayRentHeading();
    this.fetchContactDetails();
  }

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }


  public fetchpayRentHeading() {
    this.payRentHeading = payRentHeading;
  }

}
