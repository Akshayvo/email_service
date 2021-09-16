import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
<<<<<<< HEAD
import { contactsLocation1, hoursLocation1, hoursLocation1AcessHours,hoursLocation2AcessHours, hoursLocation3AcessHours, hoursLocation4AcessHours,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, contactsLocation4, hoursLocation4,
          
=======
import { contactsLocation1, hoursLocation1, hoursLocation1AcessHours,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, contactsLocation4, hoursLocation4,
          contactsLocation5, hoursLocation5, contactsLocation6, hoursLocation6,
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
          } from '../data/contact';
import { heading1, heading2, tabs, tabs1, tabs2, heading3, tabs3, heading4, heading5, heading6  } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
<<<<<<< HEAD
import { Location1Script, Location2Script, Location3Script, Location4Script, 
  ogLocation1, ogLocation2, ogLocation3, ogLocation4,  twitterLocation1,
  twitterLocation2, twitterLocation3, twitterLocation4,  } from '../data/script';
=======
import { Location1Script, Location2Script, Location3Script, Location4Script, Location5Script, Location6Script,
  ogLocation1, ogLocation2, ogLocation3, ogLocation4, ogLocation5, ogLocation6, twitterLocation1,
  twitterLocation2, twitterLocation3, twitterLocation4, twitterLocation5, twitterLocation6 } from '../data/script';
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
import { featuresHead, featuresList, location1FeaturesHead, location2FeaturesHead,
  location3FeaturesHead, location4FeaturesHead,location5FeaturesHead,location6FeaturesHead } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { location1PageContent, location1PageTitle,
        location2PageContent, location2PageTitle,
        location3PageContent, location3PageTitle,
        location4PageContent, location4PageTitle,
<<<<<<< HEAD
        } from '../data/title';
=======
        location5PageContent, location5PageTitle,
        location6PageContent, location6PageTitle} from '../data/title';
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
      if (this.router.url.includes(`${environment.locationName}/greentown`)) {
=======
      if (this.router.url.includes(`${environment.locationName}/foley`)) {
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
            this.meta.addTag({
              name: 'description',
              content: `${this.location1PageContent}`
    });
    this.titleService.setTitle(`${this.location1PageTitle}`);
<<<<<<< HEAD
            this.locationName = `Wallenpaupack Self Storage - Greentown`;
=======
            this.locationName = `Storage Plus of Baldwin County - Foley`;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
    } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
=======
    } else if (this.router.url.includes(`${environment.locationName}/silverhill`)) {
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
           this.meta.addTag({
             name: 'description',
             content: `${this.location2PageContent}`
    });
    this.titleService.setTitle(`${this.location2PageTitle}`);
<<<<<<< HEAD
           this.locationName = `Wallenpaupack Self Storage - Lake Ariel`;
=======
           this.locationName = `Storage Plus of Baldwin County - Silverhill`;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
      } else if (this.router.url.includes(`${environment.locationName}/hawley`)) {
=======
      } else if (this.router.url.includes(`${environment.locationName}/barnwell`)) {
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
        this.meta.addTag({
          name: 'description',
          content: `${this.location3PageContent}`
    });
    this.titleService.setTitle(`${this.location3PageTitle}`);
<<<<<<< HEAD
        this.locationName = `Wallenpaupack Self Storage - Hawley Location`;
=======
        this.locationName = `Storage Plus of Baldwin County - Barnwell Location`;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
   } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
=======
   } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
    this.meta.addTag({
      name: 'description',
      content: `${this.location4PageContent}`
    });
    this.titleService.setTitle(`${this.location4PageTitle}`);
<<<<<<< HEAD
    this.locationName = `Wallenpaupack Self Storage - Lakeville Location`;
=======
    this.locationName = `Storage Plus of Baldwin County - Belforest Location`;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
  } 
=======
  } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
    this.meta.addTag({
      name: 'description',
      content: `${this.location5PageContent}`
});
this.titleService.setTitle(`${this.location5PageTitle}`);
    this.locationName = `Storage Plus of Baldwin County - Fairhope`;
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
} else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location6PageContent}`
});
this.titleService.setTitle(`${this.location6PageTitle}`);
  this.locationName = `Storage Plus of Baldwin County - Robertsdale`;
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
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
<<<<<<< HEAD
    
=======
    this.location5PageTitle = location5PageTitle;
    this.location5PageContent = location5PageContent;
    this.location6PageTitle = location6PageTitle;
    this.location6PageContent = location6PageContent;
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
<<<<<<< HEAD
    if (this.router.url.includes(`${environment.locationName}/greentown`)) {
      this.og = ogLocation1;
  } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
    this.og = ogLocation2;
  } else if (this.router.url.includes(`${environment.locationName}/hawley`)) {
    this.og = ogLocation3;
  } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
    this.og = ogLocation4;
  } 
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/greentown`)) {
      this.twitter = twitterLocation1;
  } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
    this.twitter = twitterLocation2;
  } else if (this.router.url.includes(`${environment.locationName}/hawley`)) {
    this.twitter = twitterLocation3;
  } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
    this.twitter = twitterLocation4;
  } 
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/greentown`)) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes(`${environment.locationName}/hawley`)) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
      this.fetchDetailsLocation4();
    } 
=======
    if (this.router.url.includes(`${environment.locationName}/foley`)) {
      this.og = ogLocation1;
  } else if (this.router.url.includes(`${environment.locationName}/silverhill`)) {
    this.og = ogLocation2;
  } else if (this.router.url.includes(`${environment.locationName}/barnwell`)) {
    this.og = ogLocation3;
  } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
    this.og = ogLocation4;
  } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
    this.og = ogLocation5;
  } else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
    this.og = ogLocation6;
  }
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/foley`)) {
      this.twitter = twitterLocation1;
  } else if (this.router.url.includes(`${environment.locationName}/silverhill`)) {
    this.twitter = twitterLocation2;
  } else if (this.router.url.includes(`${environment.locationName}/barnwell`)) {
    this.twitter = twitterLocation3;
  } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
    this.twitter = twitterLocation4;
  } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
    this.twitter = twitterLocation5;
  } else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
    this.twitter = twitterLocation6;
  }
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/foley`)) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes(`${environment.locationName}/silverhill`)) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes(`${environment.locationName}/barnwell`)) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
      this.fetchDetailsLocation4();
    } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
      this.fetchDetailsLocation5();
    } else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
      this.fetchDetailsLocation6();
    }
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
<<<<<<< HEAD
    this.router.navigate([`${environment.locationName}/greentown/reserve-unit`],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/lake-ariel/reserve-unit`],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/hawley/reserve-unit`],
         );
  }  else if ( this.locationId === 4 ) {
    this.router.navigate([`${environment.locationName}/lakeville/reserve-unit`],
          );
  } 
=======
    this.router.navigate([`${environment.locationName}/foley/reserve-unit`],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/silverhill/reserve-unit`],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/barnwell/reserve-unit`],
         );
  }  else if ( this.locationId === 4 ) {
    this.router.navigate([`${environment.locationName}/belforest/reserve-unit`],
          );
  } else if ( this.locationId === 5 ) {
    this.router.navigate([`${environment.locationName}/fairhope/reserve-unit`],
          );
  } else if ( this.locationId === 6 ) {
    this.router.navigate([`${environment.locationName}/robertsdale/reserve-unit`],
          );
  }
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
 }

  public fetchDetailsLocation1() {
      this.name = heading1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.access = hoursLocation1AcessHours;
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
<<<<<<< HEAD
     this.access = hoursLocation2AcessHours;
=======
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
   }

   public fetchDetailsLocation3() {
    this.name = heading3;
    this.locationId = 3;
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs;
    this.features = location3FeaturesHead;
<<<<<<< HEAD
    this.access = hoursLocation3AcessHours;
=======
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
  }

  public fetchDetailsLocation4() {
    this.name = heading4;
    this.locationId = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs;
    this.features = location4FeaturesHead;
<<<<<<< HEAD
    this.access = hoursLocation4AcessHours;
  }

  
=======
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
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
}
