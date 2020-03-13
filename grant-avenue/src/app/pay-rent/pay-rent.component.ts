
import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact } from '../data/contact';
import { instruction, policy, payRent, policyHeading } from '../data/pay-rent';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  contact: any;
  instruction: string;
  payRent: any;
  policy: any;
  policyHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online 24/7, with our easy tenant portal! Just follow the
                instructions on the page, or call our office, and one of our friendly managers will be glad to help!`
    });
    this.titleService.setTitle('Pay Rent  | Grant Avenue Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
    this.fetchPayRentData();
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRentData() {
    this.instruction = instruction;
    this.payRent = payRent;
    this.policy = policy;
    this.policyHeading = policyHeading;
  }

}
