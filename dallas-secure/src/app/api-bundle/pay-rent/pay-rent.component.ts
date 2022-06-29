import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, 
  twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3 } from '../../data/script';
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
    if (this.router.url.includes('dallas-secure-storage')) {
      this.name = ' Dallas Secure Storage';
  } else if (this.router.url.includes('godsey-secure-storage')) {
    this.name = ' Godsey Secure Storage';
  } else if (this.router.url.includes('location-3')) {
    this.name = 'Location-3';
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
    if (this.router.url.includes('dallas-secure-storage')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('godsey-secure-storage')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('location-3')) {
      this.og = ogPayRentPageLocation3;
    }
}

public fetchTwitter() {
  if (this.router.url.includes('dallas-secure-storage')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('godsey-secure-storage')) {
    this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('location-3')) {
    this.twitter = twitterPayRentPageLocation3;
  }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
