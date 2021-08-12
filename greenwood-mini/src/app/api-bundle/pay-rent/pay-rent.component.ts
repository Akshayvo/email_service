import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1,ogPayRentPageLocation2,ogPayRentPageLocation3,
   twitterPayRentPage, twitterPayRentPageLocation1,twitterPayRentPageLocation2,twitterPayRentPageLocation3,} from '../../data/script';
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
    if (this.router.url.includes('rebel-mini')) {
      this.name = ' Rebel Mini Storage';
  }
    else if (this.router.url.includes('howard-city')) {
      this.name = ' Howard City Location';
  }
  else if (this.router.url.includes('ionia')) {
      this.name = ' Ionia Location';
  }
  else if (this.router.url.includes('alpine')) {
      this.name = ' Alpine Location';
  }
   else if (this.router.url.includes('red-barn')) {
    this.name = ' Red Barn Location';
  } else if (this.router.url.includes('wayland-westside')) {
    this.name = ' Wayland Westside street Location';
  } else if (this.router.url.includes('wayland-mill')) {
    this.name = ' Wayland mill Location';
  } else if (this.router.url.includes('wayland-southside')) {
    this.name = ' Wayland Southside Location';
  } 
  else if (this.router.url.includes('dutton')) {
    this.name = ' Dutton Location';
  } 
  else if (this.router.url.includes('m45')) {
    this.name = ' M-45 Southside Location';
  } 
  else if (this.router.url.includes('otsego')) {
    this.name = ' Otsego Location';
  } 
  else if (this.router.url.includes('allendale')) {
    this.name = ' Allendale Location';
  } 
  // else if (this.router.url.includes('robertsdale')) {
  //   this.name = 'Robertsdale Location';
  // }
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
    if (this.router.url.includes('rebel-mini')) {
      this.og = ogPayRentPageLocation1;
    }
    else if (this.router.url.includes('howard-city')) {
      this.og = ogPayRentPageLocation2;
    }
    else if (this.router.url.includes('ionia')) {
      this.og = ogPayRentPageLocation3;
    }
}

public fetchTwitter() {
  if (this.router.url.includes('rebel-mini')) {
    this.twitter = twitterPayRentPageLocation1;
  }
  else if (this.router.url.includes('howard-city')) {
    this.twitter = twitterPayRentPageLocation2;
  }
  else if (this.router.url.includes('ionia')) {
    this.twitter = twitterPayRentPageLocation3;
  }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
    
  }
}
