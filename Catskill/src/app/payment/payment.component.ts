import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'PAY RENT';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We make it easy for you to pay your rent and check your balance online, 24/7. Simply login with the credentials supplied by our office to gain access!`
    });
    this.titleService.setTitle('Pay Your Rent Online | Catskill Self Storage, Catskill, NY, 12414 ');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
