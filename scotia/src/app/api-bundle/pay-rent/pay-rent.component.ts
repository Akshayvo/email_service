import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { loginDetail} from '../../data/pay-rent';
import { contact } from '../../data/contact';
import { payRent } from '../../data/blurb';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})

export class PayRentComponent implements OnInit {

  loginDetail: any;
  contact: any;
  payRent: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online, quickly and conveniently with our online bill pay service!`
    });
    this.titleService.setTitle('Pay Rent | Scotia Storage, Scotia, NY, 12302');
  }

  ngOnInit() {
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    window.scrollTo(0, 0);
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
