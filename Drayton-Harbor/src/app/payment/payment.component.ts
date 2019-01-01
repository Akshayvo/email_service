import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact } from '../data/contact';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  currentActive: any = 'PAY RENT';
  contact: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Use our online bill pay service to pay your rent and manage your account through this page.
                If you have any questions about setting up your account call (360)332-1047`
    });
    this.titleService.setTitle('Pay Your Rent | Drayton Harbor Mini Storage');
  }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contact = contact;
  }
}
