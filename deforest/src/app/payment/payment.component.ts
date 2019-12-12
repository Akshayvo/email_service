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
      content: `Just follow our simple instructions and  you'll have access
                to your account 24/7! If you still have questions, call our office!`
    });
    this.titleService.setTitle('Pay Rent  | Deforest Self Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactInfo = contact;
  }
}
