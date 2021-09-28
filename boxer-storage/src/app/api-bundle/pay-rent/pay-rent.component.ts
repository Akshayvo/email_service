import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { ogPayRentPage, ogPayRentPageLocation1,ogPayRentPageLocation2,ogPayRentPageLocation3,ogPayRentPageLocation4,ogPayRentPageLocation5,ogPayRentPageLocation6,ogPayRentPageLocation7,ogPayRentPageLocation8,ogPayRentPageLocation9,ogPayRentPageLocation10,ogPayRentPageLocation11,ogPayRentPageLocation12,
   twitterPayRentPage, twitterPayRentPageLocation1,twitterPayRentPageLocation2,twitterPayRentPageLocation3,twitterPayRentPageLocation4,twitterPayRentPageLocation5,twitterPayRentPageLocation6,twitterPayRentPageLocation7,twitterPayRentPageLocation8,twitterPayRentPageLocation9,twitterPayRentPageLocation10,twitterPayRentPageLocation11,twitterPayRentPageLocation12  } from '../../data/script';
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
    if (this.router.url.includes('evanston-ave')) {
      this.name = ' Evanston Ave ';
  }
    else if (this.router.url.includes('howard-city')) {
      this.name = ' Howard City ';
  }
  else if (this.router.url.includes('ionia')) {
      this.name = ' Ionia ';
  }
  else if (this.router.url.includes('alpine')) {
      this.name = ' Alpine ';
  }
   else if (this.router.url.includes('red-barn')) {
    this.name = ' Red Barn ';
  } else if (this.router.url.includes('wayland-westside')) {
    this.name = ' Wayland Westside street ';
  } else if (this.router.url.includes('wayland-mill')) {
    this.name = ' Wayland mill ';
  } else if (this.router.url.includes('wayland-southside')) {
    this.name = ' Wayland Southside ';
  } 
  else if (this.router.url.includes('dutton')) {
    this.name = ' Dutton ';
  } 
  else if (this.router.url.includes('m45')) {
    this.name = ' M-45 Southside ';
  } 
  else if (this.router.url.includes('otsego')) {
    this.name = ' Otsego ';
  } 
  else if (this.router.url.includes('allendale')) {
    this.name = ' Allendale ';
  } 
  // else if (this.router.url.includes('robertsdale')) {
  //   this.name = 'Robertsdale ';
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
    if (this.router.url.includes('evanston-ave')) {
      this.og = ogPayRentPageLocation1;
    }
    else if (this.router.url.includes('howard-city')) {
      this.og = ogPayRentPageLocation2;
    }
    else if (this.router.url.includes('ionia')) {
      this.og = ogPayRentPageLocation3;
    }
    else if (this.router.url.includes('alpine')) {
      this.og = ogPayRentPageLocation4;
    }
     else if (this.router.url.includes('red-barn')) {
      this.og = ogPayRentPageLocation5;
    } else if (this.router.url.includes('wayland-westside')) {
      this.og = ogPayRentPageLocation6;
    } else if (this.router.url.includes('wayland-mill')) {
      this.og = ogPayRentPageLocation7;
    } else if (this.router.url.includes('wayland-southside')) {
      this.og = ogPayRentPageLocation8;
    } 
    else if (this.router.url.includes('dutton')) {
      this.og = ogPayRentPageLocation9;
    } 
    else if (this.router.url.includes('m45')) {
      this.og = ogPayRentPageLocation10;
    } 
    else if (this.router.url.includes('otsego')) {
      this.og = ogPayRentPageLocation11;
    } 
    else if (this.router.url.includes('allendale')) {
      this.og = ogPayRentPageLocation12;
    } 
}

public fetchTwitter() {
  if (this.router.url.includes('evanston-ave')) {
    this.twitter = twitterPayRentPageLocation1;
  }
  else if (this.router.url.includes('howard-city')) {
    this.twitter = twitterPayRentPageLocation2;
  }
  else if (this.router.url.includes('ionia')) {
    this.twitter = twitterPayRentPageLocation3;
  }
   else if (this.router.url.includes('alpine')) {
    this.twitter = twitterPayRentPageLocation4;
  }
   else if (this.router.url.includes('red-barn')) {
    this.twitter = twitterPayRentPageLocation5;
  } else if (this.router.url.includes('wayland-westside')) {
    this.twitter = twitterPayRentPageLocation6;
  } else if (this.router.url.includes('wayland-mill')) {
    this.twitter = twitterPayRentPageLocation7;
  } else if (this.router.url.includes('wayland-southside')) {
    this.twitter = twitterPayRentPageLocation8;
  } 
  else if (this.router.url.includes('dutton')) {
    this.twitter = twitterPayRentPageLocation9;
  } 
  else if (this.router.url.includes('m45')) {
    this.twitter = twitterPayRentPageLocation10;
  } 
  else if (this.router.url.includes('otsego')) {
    this.twitter = twitterPayRentPageLocation11;
  } 
  else if (this.router.url.includes('allendale')) {
    this.twitter = twitterPayRentPageLocation12;
  } 
}

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
    
  }
}
