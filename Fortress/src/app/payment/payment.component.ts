import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { payment} from '../data/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payment: any;
  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'PAY RENT';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We strive to offer the best possible customer service,
                which now includes on line bill pay! Follow the instructions or
                call our friendly and helpful staff to learn how to log in and pay your rent 24/7!`
    });
    this.titleService.setTitle('Pay Your Rent Online | Fortress Mini Storage');
  }

  ngOnInit() {
    this.fetchPayment();
    window.scrollTo(0, 0);
  }

  public fetchPayment() {
    this.payment = payment;
  }
}
