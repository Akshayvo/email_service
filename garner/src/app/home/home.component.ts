import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsHomePage, hoursHomePage, contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,
       } from '../data/contact';
import { featuresHead, serviceOffered, gettingStarted, featuresList, jumbotron , grid} from '../data/home';
import { LocationService } from '../services/location.service';
import { UaParserService } from '../services/ua-parser.service';
import { homePageTitle, homePageContent } from "../data/title";
import {
  homePageScript,
  ogHomePage,
  script,
  twitterHomePage,
} from "../data/script";
import { MetaService } from '../services/canonical.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hoursDetails: any;
  locationId: any;
  features: any;
  serviceOffered: any;
  contactsLocation1: any;
  contactsLocation2: any;
  hoursLocation1: any;
  hoursLocation2: any;
  gettingStarted: any;
  homePageContent: string;
  homePageTitle: string;
  script: any;
  imageBaseUrl: any;
  imagetype: any;
  featuresList: any;
  jumbotron: any;
  unitTypes :any;
  ogHomePage: any;
  twitterHomePage: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private metaService: MetaService,
    private uaParserService: UaParserService,
  ) {
    this.fetchScript();
    this.loadScript();
    this.fetchMetaData();
    this.fetchOgHomePage();
    this.fetchTwitterHomePage();
    this.ogHomePage.forEach((element) => {
      this.meta.updateTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitterHomePage.forEach((element) => {
      this.meta.updateTag({
        name: element.name,
        content: element.content,
      });
    });

    this.meta.addTag({
      name: 'description',
      content: `Garner's U Store offers convenient 24/7 access to your belongings,
      online payments and a variety of unit sizes for all of your self storage needs.`
    });
    this.titleService.setTitle(`24 Hour Access Self Storage Units | Garner's U Store`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
   
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    // this.receiveMessage();
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchScript();
    this.fetchFeatures();
    this.fetchJumbotron();
    this.fetchGrid();
    this.metaService.createCanonicalURL();

  }

  

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }

  public fetchContactDetails() {
    this.contactDetails = contactsHomePage;
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
  }
  public fetchHours() {
    this.hoursDetails = hoursHomePage;
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
  }

  public loadScript() {
    const node = document.createElement("script"); // creates the script tag
    node.type = "application/ld+json"; // set the script type
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

  public fetchOgHomePage() {
    this.ogHomePage = ogHomePage;
  }

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }
  // receiveMessage() {
  //   this.data.currentLocation.subscribe(locationId => {
  //     this.locationId = locationId;
  //     this.dataupdate();
  //   });
  // }

  // public dataupdate() {
  //   if ( this.locationId === '1' || this.locationId === 1 ) {
  //     this.fetchContactDetailsLocation1();
  //   }else if ( this.locationId === '3' ) {
  //     this.fetchContactDetailsLocation3();
  //   }
  // }Movin' On Storage Center

  //   public fetchContactDetailsLocation1() {
  //     this.heading = `Movin' On Storage Center`;
  //     this.contactDetails = contactsLocation1;
  //     this.hoursDetails = hoursLocation1;
  //   }


    // public fetchContactDetailsLocation3() {
    //   this.heading = `Natrona Heights Self Storage`;
    //   this.contactDetails = contactsLocation3;
    //   this.hoursDetails = hoursLocation3;
    // }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
    this.gettingStarted = gettingStarted;
  }

  public fetchGrid(){
    this.unitTypes = grid;
  }
}
