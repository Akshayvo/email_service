import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsHomePage, hoursHomePage, contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,
  contactsLocation3, contactsLocation4, hoursLocation3, hoursLocation4,
  contactsLocation5, contactsLocation6, hoursLocation5, hoursLocation6, } from '../data/contact';
import { featuresHead, serviceOffered, featuresList, jumbotron } from '../data/home';
import { homePageScript, ogHomePage, twitterHomePage } from '../data/script';
import { CanonicalService } from '../services/canonical.service';
import { LocationService } from '../services/location.service';
import { homePageTitle, homePageContent } from '../data/title';
import { environment } from '../../environments/environment';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // template: `<ngx-json-ld [json]="script"></ngx-json-ld>`
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hoursDetails: any;
  featuresList: any;
  locationId: any;
  heading: string;
  features: any;
  serviceOffered: any;
  script: any;
  ogHomePage: any;
  twitterHomePage: any;
  homePageContent: string;
  homePageTitle: string;
  template: string;
  jumbotron: any;
  contactHomeDetails: any;
  hoursHomeDetails: any;
  imagetype: any;
  imageBaseUrl: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,
  ) {
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
    this.fetchFeatures();
    this.fetchTemplate();
    this.fetchJumbotron();
    this.fetchContactDetails();

    // fetch(this.script)
    // .then(response => response.text())
    // .then(structuredDataText => {
    //   const script = document.createElement('script');
    //   script.setAttribute('type', 'application/ld+json');
    //   script.textContent = structuredDataText;
    //   document.head.appendChild(script);
    // });
  }

  public fetchOgHomePage() {
    this.ogHomePage = ogHomePage;
  }

  public fetchContactDetails() {
    this.contactHomeDetails = contactsHomePage;
    this.hoursHomeDetails = hoursHomePage;
  }

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }

  public fetchTemplate() {
    this.template = environment.template;
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
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

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1) {
      this.fetchContactDetailsLocation1();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '3' ) {
      this.fetchContactDetailsLocation3();
    } else if ( this.locationId === '4' ) {
      this.fetchContactDetailsLocation4();
    } else if ( this.locationId === '5' ) {
      this.fetchContactDetailsLocation5();
    } else if ( this.locationId === '6' ) {
      this.fetchContactDetailsLocation6();
    }
  }

  public fetchScript() {
    this.script = homePageScript;
  }


  public fetchFeatures() {
    this.featuresList = featuresList;
  }


    public fetchContactDetailsLocation1() {
      this.heading = `Self Storage of York - Platte Ave`;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = `Self Storage of York - Marquis Ave`;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchContactDetailsLocation3() {
      this.heading = `Self Storage of York - Lincoln Ave`;
      this.contactDetails = contactsLocation3;
      this.hoursDetails = hoursLocation3;
    }

    public fetchContactDetailsLocation4() {
      this.heading = `Self Storage of York - Belforest`;
      this.contactDetails = contactsLocation4;
      this.hoursDetails = hoursLocation4;
    } 

    public fetchContactDetailsLocation5() {
      this.heading = `Self Storage of York - Fairhope`;
      this.contactDetails = contactsLocation5;
      this.hoursDetails = hoursLocation5;
    }

    public fetchContactDetailsLocation6() {
      this.heading = `Self Storage of York - Robertsdale`;
      this.contactDetails = contactsLocation6;
      this.hoursDetails = hoursLocation6;
    }



    public fetchFeatureHead() {
      this.features = featuresHead;
    }

    public fetchStaticContent() {
      this.serviceOffered = serviceOffered;
    }

}