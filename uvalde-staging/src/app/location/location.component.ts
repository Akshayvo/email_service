import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3,hoursLocation4, contactsLocation4,hoursLocation5, contactsLocation5, hoursLocation6, contactsLocation6,hoursLocation7, contactsLocation7,hoursLocation8, contactsLocation8,
          } from '../data/contact';
import { heading1, heading2, tabs, heading3 ,heading4,heading5,heading6,heading7,heading8 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, Location3Script,Location4Script,Location5Script,Location6Script,Location7Script,Location8Script,
  ogLocation1, ogLocation2, ogLocation3, ogLocation4,ogLocation5,ogLocation6,ogLocation7,ogLocation8,twitterLocation1,
  twitterLocation2, twitterLocation3,twitterLocation4,twitterLocation5,twitterLocation6,twitterLocation7,twitterLocation8 } from '../data/script';
import { featuresHead, featuresList, location1FeaturesHead, location2FeaturesHead,
  location3FeaturesHead,location4FeaturesHead,location5FeaturesHead,location6FeaturesHead,location7FeaturesHead,location8FeaturesHead } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { location1PageContent, location1PageTitle,
        location2PageContent, location2PageTitle,
        location3PageContent, location3PageTitle,
        location4PageContent, location4PageTitle,
        location5PageContent, location5PageTitle,
        location6PageContent, location6PageTitle,
        location7PageContent, location7PageTitle,
        location8PageContent, location8PageTitle,
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
  access: any;
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

id = 3;

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
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes(`${environment.locationName}/260-n-grove`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location1PageContent}`
    });
    this.titleService.setTitle(`${this.location1PageTitle}`);
            this.locationName = `AFFORDABLE STORAGE #1 - 260 N GROVE`;
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
    } else if (this.router.url.includes(`${environment.locationName}/201-n-grove`)) {
           this.meta.addTag({
             name: 'description',
             content: `${this.location2PageContent}`
    });
    this.titleService.setTitle(`${this.location2PageTitle}`);
           this.locationName = `AFFORDABLE STORAGE #2 - 201 N GROVE`;
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
      } else if (this.router.url.includes(`${environment.locationName}/246-w-south-lane`)) {
        this.meta.addTag({
          name: 'description',
          content: `${this.location3PageContent}`
    });
    this.titleService.setTitle(`${this.location3PageTitle}`);
        this.locationName = `AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE Location`;
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

   else if (this.router.url.includes(`${environment.locationName}/817-s-getty`)) {
    this.meta.addTag({
      name: 'description',
      content: `${this.location4PageContent}`
});
this.titleService.setTitle(`${this.location4PageTitle}`);
    this.locationName = `AFFORDABLE STORAGE #4 - 817 S. GETTY`;
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
else if (this.router.url.includes(`${environment.locationName}/430-s-hwy-83`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location5PageContent}`
});
this.titleService.setTitle(`${this.location5PageTitle}`);
  this.locationName = `AFFORDABLE STORAGE #5 - 430 S HWY 83`;
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
}else if (this.router.url.includes(`${environment.locationName}/500-east-garden-street`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location6PageContent}`
});
this.titleService.setTitle(`${this.location6PageTitle}`);
  this.locationName = `AFFORDABLE STORAGE #6 - 500 E. GARDEN`;
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
else if (this.router.url.includes(`${environment.locationName}/2633-east-main-street`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location7PageContent}`
});
this.titleService.setTitle(`${this.location7PageTitle}`);
  this.locationName = `AFFORDABLE STORAGE #7 - 2633 E. MAIN ST`;
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
else if (this.router.url.includes(`${environment.locationName}/244-n-grove`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location8PageContent}`
});
this.titleService.setTitle(`${this.location8PageTitle}`);
  this.locationName = `AFFORDABLE STORAGE #8 - 244 N. GROVE`;
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
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
    if (this.router.url.includes(`${environment.locationName}/260-n-grove`)) {
      this.og = ogLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/201-n-grove`)) {
      this.og = ogLocation2;
    } else if (this.router.url.includes(`${environment.locationName}/246-w-south-lane`)) {
      this.og = ogLocation3;
    }
    else if (this.router.url.includes(`${environment.locationName}/817-s-getty`)) {
      this.og = ogLocation4;
    }
    else if (this.router.url.includes(`${environment.locationName}/430-s-hwy-83`)) {
      this.og = ogLocation5;
    }
    else if (this.router.url.includes(`${environment.locationName}/500-east-garden-street`)) {
      this.og = ogLocation6;
    }
    else if (this.router.url.includes(`${environment.locationName}/2633-east-main-street`)) {
      this.og = ogLocation7;
    }
    else if (this.router.url.includes(`${environment.locationName}/244-n-grove`)) {
      this.og = ogLocation8;
    }
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/260-n-grove`)) {
        this.twitter = twitterLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/201-n-grove`)) {
      this.twitter = twitterLocation2;
    } else if (this.router.url.includes(`${environment.locationName}/246-w-south-lane`)) {
      this.twitter = twitterLocation3;
    }
    else if (this.router.url.includes(`${environment.locationName}/817-s-getty`)) {
      this.twitter = twitterLocation4;
    }
    else if (this.router.url.includes(`${environment.locationName}/430-s-hwy-83`)) {
      this.twitter = twitterLocation5;
    }
    else if (this.router.url.includes(`${environment.locationName}/500-east-garden-street`)) {
      this.twitter = twitterLocation6;
    }
    else if (this.router.url.includes(`${environment.locationName}/2633-east-main-street`)) {
      this.twitter = twitterLocation7;
    }
    else if (this.router.url.includes(`${environment.locationName}/244-n-grove`)) {
      this.twitter = twitterLocation8;
    }
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/260-n-grove`)) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes(`${environment.locationName}/201-n-grove`)) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes(`${environment.locationName}/246-w-south-lane`)) {
      this.fetchDetailsLocation3();
    }
    else if (this.router.url.includes(`${environment.locationName}/817-s-getty`)) {
      this.fetchDetailsLocation4();
    }
    else if (this.router.url.includes(`${environment.locationName}/430-s-hwy-83`)) {
      this.fetchDetailsLocation5();
    }
    else if (this.router.url.includes(`${environment.locationName}/500-east-garden-street`)) {
      this.fetchDetailsLocation6();
    }
    else if (this.router.url.includes(`${environment.locationName}/2633-east-main-street`)) {
      this.fetchDetailsLocation7();
    }
    else if (this.router.url.includes(`${environment.locationName}/244-n-grove`)) {
      this.fetchDetailsLocation8();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate([`${environment.locationName}/260-n-grove/reserve-unit`],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/201-n-grove/reserve-unit`],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/246-w-south-lane/reserve-unit`],
         );
  }
  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/817-s-getty/reserve-unit`],
         );
  }
  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/430-s-hwy-83/reserve-unit`],
         );
  }
  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/500-east-garden-street/reserve-unit`],
         );
  }
  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/2633-east-main-street/reserve-unit`],
         );
  }
  else if ( this.locationId === 8 ) {
    this.router.navigate([`${environment.locationName}/244-n-grove/reserve-unit`],
         );
  }
 }

  public fetchDetailsLocation1() {
      this.name = heading1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      // this.access = hoursLocation1AcessHours;
      this.tabs = tabs;
      this.features = location1FeaturesHead;
    }

   public fetchDetailsLocation2() {
     this.name = heading2;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
     this.features = location2FeaturesHead;
   }

   public fetchDetailsLocation3() {
    this.name = heading3;
    this.locationId = 3;
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs;
    this.features = location3FeaturesHead;
  }
  public fetchDetailsLocation4() {
    this.name = heading4;
    this.locationId = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs;
    this.features = location4FeaturesHead;
  }
  public fetchDetailsLocation5() {
    this.name = heading5;
    this.locationId = 5;
    this.contacts = contactsLocation5;
    this.hours = hoursLocation5;
    this.tabs = tabs;
    this.features = location5FeaturesHead;
  }
  public fetchDetailsLocation6() {
    this.name = heading6;
    this.locationId = 6;
    this.contacts = contactsLocation6;
    this.hours = hoursLocation6;
    this.tabs = tabs;
    this.features = location6FeaturesHead;
  }
  public fetchDetailsLocation7() {
    this.name = heading7;
    this.locationId = 7;
    this.contacts = contactsLocation7;
    this.hours = hoursLocation7;
    this.tabs = tabs;
    this.features = location7FeaturesHead;
  }
  public fetchDetailsLocation8() {
    this.name = heading8;
    this.locationId = 8;
    this.contacts = contactsLocation8;
    this.hours = hoursLocation8;
    this.tabs = tabs;
    this.features = location8FeaturesHead;
  }
}
