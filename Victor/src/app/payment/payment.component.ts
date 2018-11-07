import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'Pay Rent';
  tabs: any = [
    { id: '1',
      name: "Victor Self Storage - Mall",
      path: "./mall"
    },
    { id: '2',
      name: "Victor Self Storage -  Village",
      path: "./village"
    }
  ];

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Save time and access your account online with our convenient customer portal.`
    });
    this.titleService.setTitle('Pay Your Rent Online | Victor Self Storage');
  }

  ngOnInit() {
  }

}
