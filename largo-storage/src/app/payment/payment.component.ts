import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  contact: any;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Access your account and securely pay your rent through our online bill pay service.
                For information on accessing your account call (361) 275-9698.`
    });
    this.titleService.setTitle('State Storage Largo | Payment');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
