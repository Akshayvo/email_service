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
      content: `Simply follow the instructions on the page to log into your account at Access Self Storage. If you have any questions, please call our offices today!`
    });
    this.titleService.setTitle('Pay Rent | Access Self Storage');
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
