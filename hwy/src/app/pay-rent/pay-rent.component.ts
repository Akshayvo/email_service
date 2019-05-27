import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { payment} from '../data/payment';
import { contact } from '../data/contact';
import { payRent } from '../data/blurb';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})

export class PayRentComponent implements OnInit {

  payment: any;
  contact: any;
  payRent: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online here by following the instructions on this page.`
    });
    this.titleService.setTitle('Pay Rent | Hwy 412 Mini Storage');
  }

  ngOnInit() {
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    window.scrollTo(0, 0);
  }

  public fetchPayment() {
    this.payment = payment;
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
  }
}
