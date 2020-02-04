import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
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
      content: `Pay your rent online with our easy-to-use tenant portal. Follow the instructions
      here or call our office to learn how to access your account.`
    });
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
