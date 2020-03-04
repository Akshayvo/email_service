import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { loginDetail } from '../../data/pay-rent';
import { payRentHeading } from '../../data/heading';


@Component({
  selector: 'app-payment-iframe-page',
  templateUrl: './payment-iframe-page.component.html',
  styleUrls: ['./payment-iframe-page.component.scss']
})
export class PaymentIframePageComponent implements OnInit {

  contact: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  loginDetail = [];
  heading: string;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
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
    this.fetchContactDetails();
    this.fetchLoginDetail();
    window.scrollTo(0, 0);
    this.fetchHeading();
  }

  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchHeading() {
    this.heading = payRentHeading;
  }
}
