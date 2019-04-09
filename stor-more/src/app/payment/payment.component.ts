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
      name: 'description',
      content: `Use our convenient online tenant portal to pay your rent 24/7! Just follow the instructions to 
                access your account or call (321) 500-7867 for assistance.`
    });
    this.titleService.setTitle('Pay Rent');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contactDetails = contact;
  }
}
