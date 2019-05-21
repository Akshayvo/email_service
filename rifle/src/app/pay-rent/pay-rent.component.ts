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
  currentActive: any = 'PAY RENT';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online with our easy-to-use tenant bill-pay service! Follow the instructions on the page or call (970) 230-1048 for help!`
    });
    this.titleService.setTitle('Pay Rent | Rifle Self Storage');
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
