import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact } from '../data/contact';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  currentActive: any = 'PAY RENT';
  contact: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online, 24/7 with our easy online tenant portal! Just follow the instructions on the page and log into your account.`
    });
    this.titleService.setTitle('Pay Rent | SUM Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contact = contact;
  }

}
