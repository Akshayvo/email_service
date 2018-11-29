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
      content: `Pay your rent online, quickly and conveniently with our online bill pay service!`
    });
    this.titleService.setTitle('Pay Rent | Scotia Storage, Scotia, NY, 12302');
  }

  ngOnInit() {
  }

}
