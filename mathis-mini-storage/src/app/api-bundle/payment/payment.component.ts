import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { Route, Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  contact: any;
  // showLoginDetail = true;


  constructor(
    private titleService: Title,
    private router: Router,
    private dataSharingService: DataSharingService,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent online 24 hours a day, 7 days a week with our handy tenant portal!
                Follow the instructions and manage your account on your schedule!`
    });
    this.titleService.setTitle('Pay Rent  | Mathis Mini Storage');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
    // if (this.router.url.includes('/payment')) {
    //   this.dataSharingService.showLoginDetail = false;
    //   this.showLoginDetail = this.dataSharingService.showLoginDetail;
    // } else {
    //   this.showLoginDetail = true;
    // }
  }

  public fetchContactDetails() {
    this.contact = contact;
  }
}
