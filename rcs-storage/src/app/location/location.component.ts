import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1, hoursLocation1AcessHours,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3,
          } from '../data/contact';
import { heading1, heading2, tabs, heading3  } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, 
  ogLocation1, ogLocation2,  twitterLocation1,
  twitterLocation2,  } from '../data/script';
import { featuresHead, featuresList, location1FeaturesHead, location2FeaturesHead,
  location3FeaturesHead } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { location1PageContent, location1PageTitle,
        location2PageContent, location2PageTitle,
       
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
      if (this.router.url.includes(`${environment.locationName}/rcs-west`)) {
            this.meta.addTag({
              name: 'description',
              content: `${this.location1PageContent}`
    });
    this.titleService.setTitle(`${this.location1PageTitle}`);
            this.locationName = `RCS Storage - West`;
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
    } else if (this.router.url.includes(`${environment.locationName}/rcs-east`)) {
           this.meta.addTag({
             name: 'description',
             content: `${this.location2PageContent}`
    });
    this.titleService.setTitle(`${this.location2PageTitle}`);
           this.locationName = `RCS Storage - East`;
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
  
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
    if (this.router.url.includes(`${environment.locationName}/rcs-west`)) {
      this.og = ogLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/rcs-east`)) {
      this.og = ogLocation2;
    } 
  }

  public fetchTwitter() {
    if (this.router.url.includes(`${environment.locationName}/rcs-west`)) {
        this.twitter = twitterLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/rcs-east`)) {
      this.twitter = twitterLocation2;
    } 
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/rcs-west`)) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes(`${environment.locationName}/rcs-east`)) {
      this.fetchDetailsLocation2();
    } 
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate([`${environment.locationName}/rcs-west/reserve-unit`],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate([`${environment.locationName}/rcs-east/reserve-unit`],
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

   
}
