import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4,ogPayRentPageLocation5,ogPayRentPageLocation6,ogPayRentPageLocation7,ogPayRentPageLocation8,
  twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3,twitterPayRentPageLocation4,twitterPayRentPageLocation5,twitterPayRentPageLocation6,twitterPayRentPageLocation7,twitterPayRentPageLocation8 } from '../../data/script';
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
    if (this.router.url.includes('260-n-grove')) {
      this.name = ' AFFORDABLE STORAGE #1 - 260 N GROVE';
  } else if (this.router.url.includes('201-n-grove')) {
    this.name = ' AFFORDABLE STORAGE #2 - 201 N GROVE';
  } else if (this.router.url.includes('246-w-south-lane')) {
    this.name = 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE';
  }
  else if (this.router.url.includes('817-s-getty')) {
    this.name = 'AFFORDABLE STORAGE #4 - 817 S. GETTY';
  }
  else if (this.router.url.includes('430-s-hwy-83')) {
    this.name = 'AFFORDABLE STORAGE #5 - 430 S HWY 83';
  }
  else if (this.router.url.includes('500-east-garden-street')) {
    this.name = 'AFFORDABLE STORAGE #6 - 500 E. GARDEN';
  }
  else if (this.router.url.includes('2633-east-main-street')) {
    this.name = 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST';
  }
  else if (this.router.url.includes('244-n-grove')) {
    this.name = 'AFFORDABLE STORAGE #8 - 244 N. GROVE';
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
    if (this.router.url.includes('260-n-grove')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('201-n-grove')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('246-w-south-lane')) {
      this.og = ogPayRentPageLocation3;
    }
    else if (this.router.url.includes('817-s-getty')) {
      this.og = ogPayRentPageLocation4;
    }
    else if (this.router.url.includes('430-s-hwy-83')) {
      this.og = ogPayRentPageLocation5;
    }
    else if (this.router.url.includes('500-east-garden-street')) {
      this.og = ogPayRentPageLocation6;
    }
    else if (this.router.url.includes('2633-east-main-street')) {
      this.og = ogPayRentPageLocation7;
    }
    else if (this.router.url.includes('244-n-grove')) {
      this.og = ogPayRentPageLocation8;
    }
}

public fetchTwitter() {
  if (this.router.url.includes('260-n-grove')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('201-n-grove')) {
    this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('246-w-south-lane')) {
    this.twitter = twitterPayRentPageLocation3;
  }
  else if (this.router.url.includes('817-s-getty')) {
    this.twitter = twitterPayRentPageLocation3;
  }
  else if (this.router.url.includes('430-s-hwy-83')) {
    this.twitter = twitterPayRentPageLocation3;
  }
  else if (this.router.url.includes('500-east-garden-street')) {
    this.twitter = twitterPayRentPageLocation3;
  }
  else if (this.router.url.includes('2633-east-main-street')) {
    this.twitter = twitterPayRentPageLocation3;
  }
  else if (this.router.url.includes('244-n-grove')) {
    this.twitter = twitterPayRentPageLocation3;
  }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
