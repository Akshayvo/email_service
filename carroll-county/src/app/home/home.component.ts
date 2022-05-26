import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,
  contactsLocation3, hoursLocation3, } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';
import { CanonicalService } from '../services/canonical.service';
import { LocationService } from '../services/location.service';
import { UaParserService } from '../services/ua-parser.service';
import { homePageTitle, homePageContent } from '../data/title';
import { homePageScript, ogHomePage, twitterHomePage } from '../data/script';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hoursDetails: any;
  locationId: any;
  heading: string;
  features: any;
  imageBaseUrl: any;
  imagetype: any;
  script: any;
  ogHomePage: any;
  twitterHomePage: any;
  homePageContent: string;
  homePageTitle: string;
  serviceOffered: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    this.fetchScript();
    this.loadScript();
    this.fetchMetaData();
    this.fetchOgHomePage();
    this.fetchTwitterHomePage();
    this.canonical.create();
    this.ogHomePage.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitterHomePage.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });

    this.meta.addTag({
      name: 'description',
      content: `${this.homePageContent}`
    });
    this.titleService.setTitle(`${this.homePageTitle}`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.receiveMessage();
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1) {
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation1();
    } else if ( this.locationId === '3' ) {
      this.fetchContactDetailsLocation3();
    }
  }

    public fetchContactDetailsLocation1() {
      this.heading = ``;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = ``;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchContactDetailsLocation3() {
      this.heading = ``;
      this.contactDetails = contactsLocation3;
      this.hoursDetails = hoursLocation3;
    }

    public loadScript() {
      const node = document.createElement('script'); // creates the script tag
      node.type = 'application/ld+json'; // set the script type
      node.async = false; // makes script run asynchronously
      // node.charset = 'utf-8';
      node.innerHTML = JSON.stringify(this.script);
      // append to head of document
      // document.getElementsByTagName('head')[0].appendChild(node);
      document.head.appendChild(node);
  
    }

    public fetchScript() {
      this.script = homePageScript;
    }

    public fetchTwitterHomePage() {
      this.twitterHomePage = twitterHomePage;
    }
  
    public fetchMetaData() {
      this.homePageTitle = homePageTitle;
      this.homePageContent = homePageContent;
    }

    public fetchOgHomePage() {
      this.ogHomePage = ogHomePage;
    }

  
  

    public fetchFeatureHead() {
      this.features = featuresHead;
    }

    public fetchStaticContent() {
      this.serviceOffered = serviceOffered;
    }

}
