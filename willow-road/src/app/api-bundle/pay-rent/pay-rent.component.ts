import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1,
   twitterPayRentPage, twitterPayRentPageLocation1,
   ogPayRentPageLocation2, twitterPayRentPageLocation2 } from '../../data/script';
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
    if (this.router.url.includes('willow-rd')) {
      this.name = 'Willow rd Location';
  } else if (this.router.url.includes('vista-dr')) {
    this.name = 'Vista Dr Location';
  } 
    if (!!localStorage.getItem('APIKey')) {
      this.dataSharingService.apiKey = localStorage.getItem('APIKey');
    }
  }

  ngOnInit() {
    this.showPaymentPageType = environment.signUpForAuotoPay;
    this.fetchContactDetails();
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }

  public fetchOg() {
    if (this.router.url.includes('willow-rd')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('vista-dr')) {
      this.og = ogPayRentPageLocation2;
    } 
}

public fetchTwitter() {
  if (this.router.url.includes('willow-rd')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('vista-dr')) {
    this.twitter = twitterPayRentPageLocation2;
  } 
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
