import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
      content: `Pay your rePay your rent online 24 hours a day, 7 days a week! Simply follow the instructions or
      call (613) 932-0480 and our manager will be happy to help!`
    });
    this.titleService.setTitle('Pay Rent Online | Cornwall Self Storage');
  }

  ngOnInit() {
    this.fetchContact();
    this.fetchPayRent();
    window.scrollTo(0, 0);
  }



  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
  }
}
