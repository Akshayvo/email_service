import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { payment} from '../../data/payment';
import { contact } from '../../data/contact';
import { payRent } from '../../data/blurb';
import { CanonicalService } from '../../services/canonical.service';
import { loginDetail } from '../../data/pay-rent';
import { payRentHeading } from '../../data/heading';
import { payRentPageContent, payRentPageTitle } from '../../data/title';

@Component({
  selector: 'app-payment-iframe-page',
  templateUrl: './payment-iframe-page.component.html',
  styleUrls: ['./payment-iframe-page.component.scss']
})
export class PaymentIframePageComponent implements OnInit {

  payment: any;
  contact: any;
  payRent: any;
  loginDetail = [];
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.fetchLoginDetail();
      this.fetchContactDetails();
      this.canonical.create();
      this.fetchMetaData();

      this.meta.addTag({
        name: 'description',
        content: `${this.payRentPageContent}`
      });
      this.titleService.setTitle(`${this.payRentPageTitle}`);
  }

  ngOnInit() {
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    this.fetchPayRentHeading();
    window.scrollTo(0, 0);
  }

  public fetchPayment() {
    this.payment = payment;
  }

  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }


  public fetchPayRentHeading() {
    this.payRentHeading = payRentHeading;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }


  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
  }
}