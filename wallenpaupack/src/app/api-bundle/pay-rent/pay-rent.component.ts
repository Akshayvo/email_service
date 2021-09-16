import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
<<<<<<< HEAD
import { ogPayRentPage, ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4, 
   twitterPayRentPage, twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, twitterPayRentPageLocation4,} from '../../data/script';
=======
import { ogPayRentPage, ogPayRentPageLocation1, ogPayRentPageLocation2, ogPayRentPageLocation3, ogPayRentPageLocation4, ogPayRentPageLocation5, ogPayRentPageLocation6,
   twitterPayRentPage, twitterPayRentPageLocation1, twitterPayRentPageLocation2, twitterPayRentPageLocation3, twitterPayRentPageLocation4, twitterPayRentPageLocation5, twitterPayRentPageLocation6 } from '../../data/script';
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
    if (this.router.url.includes('greentown')) {
      this.name = ' Greentown';
  } else if (this.router.url.includes('lake-ariel')) {
    this.name = ' Lake Ariel';
  } else if (this.router.url.includes('hawley')) {
    this.name = 'Hawley';
  } else if (this.router.url.includes('lakeville')) {
    this.name = 'Lakeville';
  } 
=======
    if (this.router.url.includes('foley')) {
      this.name = ' Foley';
  } else if (this.router.url.includes('silverhill')) {
    this.name = ' Silverhill';
  } else if (this.router.url.includes('barnwell')) {
    this.name = 'Barnwell';
  } else if (this.router.url.includes('belforest')) {
    this.name = 'Belforest';
  } else if (this.router.url.includes('fairhope')) {
    this.name = 'Fairhope';
  } else if (this.router.url.includes('robertsdale')) {
    this.name = 'Robertsdale';
  }
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
    if (this.router.url.includes('greentown')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('lake-ariel')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('hawley')) {
      this.og = ogPayRentPageLocation3;
    } else if (this.router.url.includes('lakeville')) {
      this.og = ogPayRentPageLocation4;
    } 
}

public fetchTwitter() {
  if (this.router.url.includes('greentown')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('lake-ariel')) {
    this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('hawley')) {
    this.twitter = twitterPayRentPageLocation3;
  } else if (this.router.url.includes('lakeville')) {
    this.twitter = twitterPayRentPageLocation4;
=======
    if (this.router.url.includes('foley')) {
      this.og = ogPayRentPageLocation1;
    } else if (this.router.url.includes('silverhill')) {
      this.og = ogPayRentPageLocation2;
    } else if (this.router.url.includes('barnwell')) {
      this.og = ogPayRentPageLocation3;
    } else if (this.router.url.includes('belforest')) {
      this.og = ogPayRentPageLocation4;
    } else if (this.router.url.includes('fairhope')) {
      this.og = ogPayRentPageLocation5;
    } else if (this.router.url.includes('robertsdale')) {
      this.og = ogPayRentPageLocation6;
    }
}

public fetchTwitter() {
  if (this.router.url.includes('foley')) {
    this.twitter = twitterPayRentPageLocation1;
  } else if (this.router.url.includes('silverhill')) {
    this.twitter = twitterPayRentPageLocation2;
  } else if (this.router.url.includes('barnwell')) {
    this.twitter = twitterPayRentPageLocation3;
  } else if (this.router.url.includes('belforest')) {
    this.twitter = twitterPayRentPageLocation4;
  } else if (this.router.url.includes('fairhope')) {
    this.twitter = twitterPayRentPageLocation5;
  } else if (this.router.url.includes('robertsdale')) {
    this.twitter = twitterPayRentPageLocation6;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
