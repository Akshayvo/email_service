import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { accessHoursLocation1,accessHoursLocation2,accessHoursLocation3, accessHoursLocation4, accessHoursLocation5, accessHoursLocation6, accessHoursLocation7, accessHoursLocation8,accessHoursLocation9,accessHoursLocation10,accessHoursLocation11,
         contactsLocation1, contactsLocation2, contactsLocation3,contactsLocation4, contactsLocation5, contactsLocation6,contactsLocation7, contactsLocation8,contactsLocation9,contactsLocation10,contactsLocation11,
         hoursLocation1, hoursLocation2,hoursLocation3,hoursLocation4,hoursLocation5,hoursLocation6,hoursLocation7,hoursLocation8,hoursLocation9,hoursLocation10,hoursLocation11
          } from '../data/contact';
import { heading1, heading2, tabs, tabs1, tabs2, heading3, tabs3, tabs4,tabs5,tabs6,tabs7,tabs8,tabs9,tabs10,tabs11, heading4, heading5, heading6,heading7,heading8 , heading9,heading10,heading11} from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script,Location2Script,Location3Script,Location4Script,Location5Script,Location6Script,Location7Script,Location8Script,Location9Script,Location10Script,Location11Script,
  ogLocation1,ogLocation2,ogLocation3,ogLocation4,ogLocation5,ogLocation6,ogLocation7,ogLocation8,ogLocation9,ogLocation10,ogLocation11,
   twitterLocation1,twitterLocation2,twitterLocation3,twitterLocation4,twitterLocation5,twitterLocation6,twitterLocation7,twitterLocation8,twitterLocation9,twitterLocation10,twitterLocation11
   } from '../data/script';
import { featuresHead, featuresList, location1FeaturesHead, location2FeaturesHead,
  location3FeaturesHead, location4FeaturesHead,location5FeaturesHead,location6FeaturesHead,location7FeaturesHead,location8FeaturesHead,location9FeaturesHead,location10FeaturesHead,location11FeaturesHead } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { location1PageContent, location1PageTitle,
        location2PageContent, location2PageTitle,
        location3PageContent, location3PageTitle,
        location4PageContent, location4PageTitle,
        location5PageContent, location5PageTitle,
        location6PageContent, location6PageTitle,
        location7PageContent, location7PageTitle,
        location8PageContent, location8PageTitle, 
        location9PageContent, location9PageTitle, 
        location10PageContent, location10PageTitle, 
        location11PageContent, location11PageTitle, 
      } from '../data/title';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
  currentTab: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  locationName: string;
  script: any;
  twitter: any;
  og: any;
  featuresList: any;
  features: any;
  imagetype: any;
  imageBaseUrl: any;
  location1PageContent: any;
  location1PageTitle: any;
  location2PageContent: any;
  location2PageTitle: any;
  location3PageContent: any;
  location3PageTitle: any;
  location4PageContent: any;
  location4PageTitle: any;
  location5PageContent: any;
  location5PageTitle: any;
  location6PageContent: any;
  location6PageTitle: any;
  location7PageContent: any;
  location7PageTitle: any;
  location8PageContent: any;
  location8PageTitle: any;
  location9PageTitle: any;
  location9PageContent: any;
  location10PageTitle: any;
  location10PageContent: any;
  location11PageTitle: any;
  location11PageContent: any;
  access: any;



  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService,
    private activatedRoute: ActivatedRoute,
    private uaParserService: UaParserService,
    ) {
      this.canonical.create();
      this.fetchMetaData();

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
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[2].path;
      }
      if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location1PageContent}`
    });
    this.titleService.setTitle(`${this.location1PageTitle}`);
            this.locationName = `Boxer Storage - Evanston Ave  Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location1Script;
            this.loadScript();
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
          }
      else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location2PageContent}`
    });
    this.titleService.setTitle(`${this.location2PageTitle}`);
            this.locationName = `Boxer Storage - Howard City Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location2Script;
            this.loadScript();
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
          }

          else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location3PageContent}`
    });
    this.titleService.setTitle(`${this.location3PageTitle}`);
            this.locationName = `Boxer Storage - Ionia Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location3Script;
            this.loadScript();
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
          }
  else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location4PageContent}`
    });
    this.titleService.setTitle(`${this.location4PageTitle}`);
            this.locationName = `Boxer Storage - Alpine Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location4Script;
            this.loadScript();
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
          }
  else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location5PageContent}`
    });
    this.titleService.setTitle(`${this.location5PageTitle}`);
            this.locationName = `Boxer Storage - Red Barn Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location5Script;
            this.loadScript();
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
          }

  else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location6PageContent}`
    });
    this.titleService.setTitle(`${this.location6PageTitle}`);
            this.locationName = `Boxer Storage - Wayland Westside Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc6;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location6Script;
            this.loadScript();
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
          }

  else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location7PageContent}`
    });
    this.titleService.setTitle(`${this.location7PageTitle}`);
            this.locationName = `Boxer Storage - Wayland Mill Street Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc7;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location7Script;
            this.loadScript();
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
          }

  else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location8PageContent}`
    });
    this.titleService.setTitle(`${this.location8PageTitle}`);
            this.locationName = `Boxer Storage - Wayland Southside Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc8;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location8Script;
            this.loadScript();
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
          }

          else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location8PageContent}`
    });
    this.titleService.setTitle(`${this.location9PageTitle}`);
            this.locationName = `Boxer Storage - Dutton Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc9;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location9Script;
            this.loadScript();
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
          }

          else if (this.router.url.includes(`${environment.locationName}/m45`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location10PageContent}`
    });
    this.titleService.setTitle(`${this.location10PageTitle}`);
            this.locationName = `Boxer Storage - M-45 Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc10;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location10Script;
            this.loadScript();
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
          }


          else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location11PageContent}`
    });
    this.titleService.setTitle(`${this.location8PageTitle}`);
            this.locationName = `Boxer Storage - Otsego Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc11;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location11Script;
            this.loadScript();
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
          }
}

  ngOnInit() {
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.isSomePage();
    this.fetchFeatures();
  }

  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchMetaData() {
    this.location1PageTitle = location1PageTitle;
    this.location1PageContent = location1PageContent;
    this.location2PageTitle = location2PageTitle;
    this.location2PageContent = location2PageContent;
    this.location3PageTitle = location3PageTitle;
    this.location3PageContent = location3PageContent;
    this.location4PageTitle = location4PageTitle;
    this.location4PageContent = location4PageContent;
    this.location5PageTitle = location5PageTitle;
    this.location5PageContent = location5PageContent;
    this.location6PageTitle = location6PageTitle;
    this.location6PageContent = location6PageContent;
    this.location7PageTitle = location7PageTitle;
    this.location7PageContent = location7PageContent;
    this.location8PageTitle = location8PageTitle;
    this.location8PageContent = location8PageContent;
    this.location9PageTitle = location9PageTitle;
    this.location9PageContent = location9PageContent;
    this.location10PageTitle = location10PageTitle;
    this.location10PageContent = location10PageContent;
    this.location11PageTitle = location11PageTitle;
    this.location11PageContent = location11PageContent;
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
    if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
      this.og = ogLocation1;
  } 
  else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
      this.og = ogLocation2;
  } 
  else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
      this.og = ogLocation3;
  } 
  else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
      this.og = ogLocation4;
  }
  else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
    this.og = ogLocation5;
}  else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
  this.og = ogLocation6;
}  else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
  this.og = ogLocation7;
}  else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
  this.og = ogLocation8;
}  
else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
  this.og = ogLocation9;
}  
else if (this.router.url.includes(`${environment.locationName}/m45`)) {
  this.og = ogLocation10;
}  
else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
  this.og = ogLocation11;
}  
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
      this.twitter = twitterLocation1;
  } 
   else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
      this.twitter = twitterLocation2;
  } 
     else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
      this.twitter = twitterLocation3;
  } 
     else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
      this.twitter = twitterLocation4;
  } 
  else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
    this.twitter = twitterLocation5;
  } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
    this.twitter = twitterLocation6;
  } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
    this.twitter = twitterLocation7;
  } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
    this.twitter = twitterLocation8;
  }
  else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
    this.twitter = twitterLocation9;
  }
  else if (this.router.url.includes(`${environment.locationName}/m45`)) {
    this.twitter = twitterLocation10;
  }
  else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
    this.twitter = twitterLocation11;
  }
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
        this.fetchDetailsLocation1();
    } 
  else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
        this.fetchDetailsLocation2();
    } 
    else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
        this.fetchDetailsLocation3();
    } 
     else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
        this.fetchDetailsLocation4();
    } 
    else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
      this.fetchDetailsLocation5();
    } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
      this.fetchDetailsLocation6();
    } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
      this.fetchDetailsLocation7();
    } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
      this.fetchDetailsLocation8();
    }
    else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
      this.fetchDetailsLocation9();
    }
    else if (this.router.url.includes(`${environment.locationName}/m45`)) {
      this.fetchDetailsLocation10();
    }
    else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
      this.fetchDetailsLocation11();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate([`${environment.locationName}/evanston-ave/reserve-unit`],
          );
  } 
  else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/howard-city/reserve-unit`],
          );
  }
   else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/ionia/reserve-unit`],
          );
  }
   else if ( this.locationId === 4 ) {
    this.router.navigate([`${environment.locationName}/alpine/reserve-unit`],
          );
  }
  else if ( this.locationId === 5 ) {
    this.router.navigate([`${environment.locationName}/red-barn/reserve-unit`],
          );
  }  else if ( this.locationId === 6 ) {
    this.router.navigate([`${environment.locationName}/wayland-westside/reserve-unit`],
         );
  }  else if ( this.locationId === 7 ) {
    this.router.navigate([`${environment.locationName}/wayland-mill/reserve-unit`],
          );
  } else if ( this.locationId === 8 ) {
    this.router.navigate([`${environment.locationName}/wayland-southside/reserve-unit`],
          );
  }
  else if ( this.locationId === 9 ) {
    this.router.navigate([`${environment.locationName}/dutton/reserve-unit`],
          );
  }
  else if ( this.locationId === 10 ) {
    this.router.navigate([`${environment.locationName}/m45/reserve-unit`],
          );
  }
  else if ( this.locationId === 11 ) {
    this.router.navigate([`${environment.locationName}/otsego/reserve-unit`],
          );
  }
 }

 public navigateToPayment() {
  if ( this.locationId === 1 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/evanston-ave/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
   else if ( this.locationId === 2 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/howard-city/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
   else if ( this.locationId === 3 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/ionia/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
     else if ( this.locationId === 4 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/alpine/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 5 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/red-barn/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 6 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/wayland-westside/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 7 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/wayland-mill/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 8 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/wayland-southside/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 9 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/dutton/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 10 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/m45/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
  else if ( this.locationId === 11 ) {
    if (environment.signUpForAuotoPay === 1) {
      this.router.navigate([`pay-rent/otsego/rent-sub/login`],
      );
    } else {
      this.router.navigate(['pay-rent']);
    }
  } 
 }

 public navigateToContact() {
  if (this.router.url.includes('evanston-ave')) {
    this.router.navigate(['/contact-evanston-ave'])
  }
 else if (this.router.url.includes('howard-city')) {
    this.router.navigate(['/contact-howard-city'])
  }
   else if (this.router.url.includes('ionia')) {
    this.router.navigate(['/contact-ionia'])
  }
  else if (this.router.url.includes('alpine')) {
    this.router.navigate(['/contact-alpine'])
  }
  else if (this.router.url.includes('red-barn')) {
    this.router.navigate(['/contact-red-barn'])
  }
  else if (this.router.url.includes('wayland-westside')) {
    this.router.navigate(['/contact-wayland-westside'])
  }
  else if (this.router.url.includes('wayland-mill')) {
    this.router.navigate(['/contact-wayland-mill'])
  }
  else if (this.router.url.includes('wayland-southside')) {
    this.router.navigate(['/contact-wayland-southside'])
  }
  else if (this.router.url.includes('dutton')) {
    this.router.navigate(['/contact-dutton'])
  }
  else if (this.router.url.includes('m45')) {
    this.router.navigate(['/contact-m45'])
  }
  else if (this.router.url.includes('otsego')) {
    this.router.navigate(['/contact-otsego'])
  }
 }

  public fetchDetailsLocation1() {
      this.name = heading1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.access = accessHoursLocation1;
      this.tabs = tabs1;
      this.features = location1FeaturesHead;
    }

  public fetchDetailsLocation2() {
      this.name = heading2;
      this.locationId = 2;
      this.contacts = contactsLocation2;
      this.hours = hoursLocation2;
      this.access = accessHoursLocation2;
      this.tabs = tabs2;
      this.features = location2FeaturesHead;
    }

     public fetchDetailsLocation3() {
      this.name = heading3;
      this.locationId = 3;
      this.contacts = contactsLocation3;
      this.hours = hoursLocation3;
      this.access = accessHoursLocation3;
      this.tabs = tabs3;
      this.features = location3FeaturesHead;
    }

      public fetchDetailsLocation4() {
      this.name = heading4;
      this.locationId = 4;
      this.contacts = contactsLocation4;
      this.hours = hoursLocation4;
      this.access = accessHoursLocation4;
      this.tabs = tabs4;
      this.features = location4FeaturesHead;
    }


   public fetchDetailsLocation5() {
    
    this.name = heading5;
    this.locationId = 5;
    this.contacts = contactsLocation5;
    this.hours = hoursLocation5;
    this.access = accessHoursLocation5;
    this.tabs = tabs5;
    this.features = location5FeaturesHead;
    
  }

  public fetchDetailsLocation6() {
    this.name = heading6;
    this.locationId = 6;
    this.contacts = contactsLocation6;
    this.hours = hoursLocation6;
    this.access = accessHoursLocation6;
    this.tabs = tabs6;
    this.features = location6FeaturesHead;
  }

  public fetchDetailsLocation7() {
    this.name = heading7;
    this.locationId = 7;
    this.contacts = contactsLocation7;
    this.hours = hoursLocation7;
    this.access = accessHoursLocation7;
    this.tabs = tabs7;
    this.features = location7FeaturesHead;
  }

  public fetchDetailsLocation8() {
    this.name = heading8;
    this.locationId = 8;
    this.contacts = contactsLocation8;
    this.hours = hoursLocation8;
    this.access = accessHoursLocation8;
    this.tabs = tabs8;
    this.features = location8FeaturesHead;
  }

  public fetchDetailsLocation9() {
    this.name = heading9;
    this.locationId = 9;
    this.contacts = contactsLocation9;
    this.hours = hoursLocation9;
    this.access = accessHoursLocation9;
    this.tabs = tabs9;
    this.features = location9FeaturesHead;
  }

  public fetchDetailsLocation10() {
    this.name = heading10;
    this.locationId = 10;
    this.contacts = contactsLocation10;
    this.hours = hoursLocation10;
    this.access = accessHoursLocation10;
    this.tabs = tabs10;
    this.features = location10FeaturesHead;
  }

  public fetchDetailsLocation11() {
    this.name = heading11;
    this.locationId = 11;
    this.contacts = contactsLocation11;
    this.hours = hoursLocation11;
    this.access = accessHoursLocation11;
    this.tabs = tabs11;
    this.features = location11FeaturesHead;
  }
}
