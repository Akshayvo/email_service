import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact } from '../../data/contact';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-payment-iframe-page',
  templateUrl: './payment-iframe-page.component.html',
  styleUrls: ['./payment-iframe-page.component.scss']
})
export class PaymentIframePageComponent implements OnInit {

  contact: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
    private canonical: CanonicalService,
  ) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Follow the instructions on the page to find your credentials, and pay your rent online 24/7.`
    });
    this.titleService.setTitle('Pay Rent | The Store House');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchContact();
  }

  public fetchContact() {
    this.contact = contact;
  }

}
