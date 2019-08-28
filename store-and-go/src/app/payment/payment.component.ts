import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../data/contact';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  currentActive: any = 'PAY RENT';
  contactDetails: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online with our easy to use tenant portal. Follow the instructions
      on the page or call our office to activate your account.`
    });
    this.titleService.setTitle('Pay Rent | Store & Go Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contactDetails = contact;
  }
}
