import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4, ogPayRentPageLocation5, ogPayRentPageLocation6,
   twitterPayRentPage, twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, twitterPayRentPageLocation4, twitterPayRentPageLocation5, twitterPayRentPageLocation6 } from '../../data/script';
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
    if (this.router.url.includes('confederate')) {
      this.name = ' Confederate Way Location';
  } else if (this.router.url.includes('refuge')) {
    this.name = ' Burnt Mountain Road';
  } else if (this.router.url.includes('talking-rock')) {
    this.name = ' Talking Rock Road';
  } else if (this.router.url.includes('northside')) {
    this.name = ' Northside Drive';
  } else if (this.router.url.includes('north-main')) {
    this.name = ' North Main Street';
  } else if (this.router.url.includes('campus-drive')) {
    this.name = ' Campus Drive';
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
    if (this.router.url.includes('confederate')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('refuge')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('talking-rock')) {
      this.og = ogPayRentPageLocation3;
    } else if (this.router.url.includes('northside')) {
      this.og = ogPayRentPageLocation4;
    } else if (this.router.url.includes('north-main')) {
      this.og = ogPayRentPageLocation5;
    } else if (this.router.url.includes('campus-drive')) {
      this.og = ogPayRentPageLocation6;
    }
}

public fetchTwitter() {
  if (this.router.url.includes('confederate')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('refuge')) {
    this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('talking-rock')) {
    this.twitter = twitterPayRentPageLocation3;
  } else if (this.router.url.includes('northside')) {
    this.twitter = twitterPayRentPageLocation4;
  } else if (this.router.url.includes('north-main')) {
    this.twitter = twitterPayRentPageLocation5;
  } else if (this.router.url.includes('campus-drive')) {
    this.twitter = twitterPayRentPageLocation6;
  }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
