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

  contactInfo: any;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Need to pay your bill online? Follow the instructions
                here or contact us and start paying at your convenience, 24/7!`
    });
    this.titleService.setTitle('Pay Your Bill Online');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }
}
