import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1, hoursLocation1AcessHours,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, 
          contactsLocation4, hoursLocation4, contactsLocation5, hoursLocation5
          } from '../data/contact';
import { heading1, heading2, tabs, heading3, heading4, heading5  } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, Location3Script, Location4Script, Location5Script,
  ogLocation1, ogLocation2, ogLocation3, twitterLocation1,
  twitterLocation2, twitterLocation3 } from '../data/script';
import { featuresHead, featuresList, location1FeaturesHead, location2FeaturesHead,
  location3FeaturesHead } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { location1PageContent, location1PageTitle,
        location2PageContent, location2PageTitle,
        location3PageContent, location3PageTitle,
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
      if (this.router.url.includes(`${environment.locationName}/hawley`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location1PageContent}`
    });
    this.titleService.setTitle(`${this.location1PageTitle}`);
            this.locationName = `Wallenpaupack Self Storage Facility - Hawley`;
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
    } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
           this.meta.addTag({
             name: 'description',
             content: `${this.location2PageContent}`
    });
    this.titleService.setTitle(`${this.location2PageTitle}`);
           this.locationName = `Wallenpaupack Self Storage Facility - Lakeville`;
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
      } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
        this.meta.addTag({
          name: 'description',
          content: `${this.location3PageContent}`
    });
    this.titleService.setTitle(`${this.location3PageTitle}`);
        this.locationName = `Wallenpaupack Self Storage Facility - Lake Ariel`;
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
   else if (this.router.url.includes(`${environment.locationName}/greentown`)) {
    this.meta.addTag({
      name: 'description',
      content: `${this.location3PageContent}`
});
this.titleService.setTitle(`${this.location3PageTitle}`);
    this.locationName = `Wallenpaupack Self Storage - Greentown`;
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
} else if (this.router.url.includes(`${environment.locationName}/greentown1`)) {
  this.meta.addTag({
    name: 'description',
    content: `${this.location3PageContent}`
});
this.titleService.setTitle(`${this.location3PageTitle}`);
  this.locationName = `Wallenpaupack Self Storage - Greentown`;
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
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
    if (this.router.url.includes(`${environment.locationName}/hawley`)) {
      this.og = ogLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
      this.og = ogLocation2;
    } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
      this.og = ogLocation3;
    } else if (this.router.url.includes(`${environment.locationName}/greentown`)) {
      this.og = ogLocation3;
    } else if (this.router.url.includes(`${environment.locationName}/greentown1`)) {
      this.og = ogLocation3;
    } 
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/hawley`)) {
        this.twitter = twitterLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
      this.twitter = twitterLocation2;
    } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
      this.twitter = twitterLocation3;
    } else if (this.router.url.includes(`${environment.locationName}/greentown`)) {
      this.twitter = twitterLocation3;
    } else if (this.router.url.includes(`${environment.locationName}/greentown1`)) {
      this.twitter = twitterLocation3;
    }
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/hawley`)) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes(`${environment.locationName}/lakeville`)) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes(`${environment.locationName}/greentown`)) {
      this.fetchDetailsLocation4();
    } else if (this.router.url.includes(`${environment.locationName}/greentown1`)) {
      this.fetchDetailsLocation5();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate([`${environment.locationName}/hawley/reserve-unit`],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/lakeville/reserve-unit`],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate([`${environment.locationName}/lake-ariel/reserve-unit`],
         );
  }
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
    this.features = location3FeaturesHead;
  }

  public fetchDetailsLocation5() {
    this.name = heading5;
    this.locationId = 5;
    this.contacts = contactsLocation5;
    this.hours = hoursLocation5;
    this.tabs = tabs;
    this.features = location3FeaturesHead;
  }

}
