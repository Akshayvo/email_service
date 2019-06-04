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
      content: `Pay your rent online quickly and easily with our online tenant portal! Follow the instructions or call today to learn how to access your account.`
    });
    this.titleService.setTitle('Pay Rent | Orchard Park Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contact = contact;
  }

}
