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
      name: 'pay-ment-name',
      content: `pay-ment-content`
    });
    this.titleService.setTitle('Pay-Rent-PageTitle');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contactDetails = contact;
  }
}
