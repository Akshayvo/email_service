import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { payRentHeading } from '../../data/heading';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, 
   twitterPayRentPage, twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, } from '../../data/script';
@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  contact: any;
  name: string;
  id: number;
  tabs: any;
  showPaymentPageType: number;
  twitter: any;
  payRentHeading: any;
  og: any;
  constructor(
    private router: Router,
    private meta: Meta,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService

  ) {
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });
    this.canonical.create();
  //   if (this.router.url.includes('platte-ave')) {
  //     this.name = ' Platte Ave';
  // } else if (this.router.url.includes('marquis-ave')) {
  //   this.name = ' Marquis';
  // } else if (this.router.url.includes('lincoln-ave')) {
  //   this.name = ' Lincoln';
  // } else if (this.router.url.includes('belforest')) {
  //   this.name = 'Belforest';
  // } else if (this.router.url.includes('fairhope')) {
  //   this.name = 'Fairhope';
  // } else if (this.router.url.includes('robertsdale')) {
  //   this.name = 'Robertsdale';
  // }
  //   if (!!localStorage.getItem('APIKey')) {
  //     this.dataSharingService.apiKey = localStorage.getItem('APIKey');
  //   }
  }

  ngOnInit() {
    this.showPaymentPageType = environment.signUpForAuotoPay;
    this.fetchContactDetails();
    // this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    // localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }

  public fetchOg() {
    this.og = ogPayRentPage;
}

public fetchTwitter() {
  // if (this.router.url.includes('platte-ave')) {
  //   this.twitter = twitterPayRentPageLocation1;
  // } else if (this.router.url.includes('marquis-ave')) {
  //   this.twitter = twitterPayRentPageLocation2;
  // } else if (this.router.url.includes('lincoln-ave')) {
  //   this.twitter = twitterPayRentPageLocation3;
  // } else if (this.router.url.includes('belforest')) {
  //   this.twitter = twitterPayRentPageLocation4;
  // } else if (this.router.url.includes('fairhope')) {
  //   this.twitter = twitterPayRentPageLocation5;
  // } else if (this.router.url.includes('robertsdale')) {
  //   this.twitter = twitterPayRentPageLocation6;
  // }
  this.twitter = twitterPayRentPage;
}

  public fetchContactDetails() {
    this.payRentHeading = payRentHeading;
    // this.contact = contact;
    this.tabs = tabs;
  }
}
