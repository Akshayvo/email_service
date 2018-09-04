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
    // this.meta.addTag({
    //   name: 'description',
    //   content: `Opened in 2003 Catskill Self Storage services the Catskill,
    //   Leeds, and Cairo communities with quality storage and U-Haul Rentals`
    // });
    this.titleService.setTitle('Pay Rent Catskill Self Storage');
  }

  ngOnInit() {
  }

}
