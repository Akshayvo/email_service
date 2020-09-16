import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { loginDetail} from '../../data/pay-rent';
import { contact } from '../../data/contact';
import { payRent } from '../../data/blurb';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { payRentHeading } from '../../data/heading';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})

export class PayRentComponent implements OnInit {

  loginDetail: any;
  contact: any;
  payRent: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;

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
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
    this.payRentHeading = payRentHeading;
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
}
