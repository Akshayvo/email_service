import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
@Component({
  selector: 'app-payment-iframe-page',
  templateUrl: './payment-iframe-page.component.html',
  styleUrls: ['./payment-iframe-page.component.scss']
})
export class PaymentIframePageComponent implements OnInit {

  contact: any;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online by following our easy instructions. If you have a
                question about how to access your account, call (361) 215-6637 today!`
    });
    this.titleService.setTitle('Pay Rent  | Calallen Mini Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
