import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { Route, Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { payRentPageTitle, payRentPageContent } from '../../data/title';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  contact: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  // showLoginDetail = true;


  constructor(
    private titleService: Title,
    private router: Router,
    private dataSharingService: DataSharingService,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.payRentPageContent}`
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
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
  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }
}
