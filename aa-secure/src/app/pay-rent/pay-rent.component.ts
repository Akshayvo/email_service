import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  contact: any;

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online in seconds with our easy to use online tenant portal!      `
    });
    this.titleService.setTitle('Pay Rent | AA Secure Storage');

   }

  ngOnInit() {

  }

}
