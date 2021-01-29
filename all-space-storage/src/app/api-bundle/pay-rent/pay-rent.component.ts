import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4, twitterPayRentPage, twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, twitterPayRentPageLocation4 } from '../../data/script';
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
    if (this.router.url.includes('poughkeepsie/arlington') ) {
      this.name = 'Poughkeepsie/Arlington';
  }  else if (this.router.url.includes('poughkeepsie/hyde-park')) {
    this.name = 'Poughkeepsie/Hyde Park';
  } else if (this.router.url.includes('highland')) {
    this.name = 'Highland';
  } else if (this.router.url.includes('lake-katrine')) {
    this.name = 'Kingston/Lake Katrine';
  } else if (this.router.url.includes('pawling')) {
    this.name = 'Pawling';
  }
    if (!!localStorage.getItem('APIKey')) {
      this.dataSharingService.apiKey = localStorage.getItem('APIKey');
    }
  }

  ngOnInit() {
    this.showPaymentPageType = environment.paymentPageType;
    this.fetchContactDetails();
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }

  public fetchOg() {
    if (this.router.url.includes('poughkeepsie/arlington')) {
      this.og = ogPayRentPageLocation1;
    } else {
      if (this.router.url.includes('poughkeepsie/hyde-park')) {
        this.og = ogPayRentPageLocation2;
      } else {
        if (this.router.url.includes('highland')) {
          this.og = ogPayRentPageLocation3;
        } else {
          if (this.router.url.includes('lake-katrine')) {
          this.og = ogPayRentPageLocation4;
          } else {
            if (this.router.url.includes('pawling')) 
            this.og = ogPayRentPageLocation4;
        }
      }
    }
}}

public fetchTwitter() {
    if (this.router.url.includes('poughkeepsie/arlington')) {
      this.twitter = twitterPayRentPageLocation1;
    } else {
      if (this.router.url.includes('poughkeepsie/hyde-park')) {
        this.twitter = twitterPayRentPageLocation2;
      } else {
        if (this.router.url.includes('highland')) {
          this.twitter = twitterPayRentPageLocation3;
        } else {
          if (this.router.url.includes('lake-katrine')){
          this.twitter = twitterPayRentPageLocation4;
          } else {
            if (this.router.url.includes('pawling'))
            this.twitter = twitterPayRentPageLocation4;
          }
        }
      }
    }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
