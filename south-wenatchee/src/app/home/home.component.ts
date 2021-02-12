import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,
   } from '../data/contact';
import { featuresHead, serviceOffered, featuresList,jumbotron } from '../data/home';
import { homePageScript, ogHomePage, twitterHomePage } from '../data/script';
import { CanonicalService } from '../services/canonical.service';
import { LocationService } from '../services/location.service';
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
  jumbotron: any;
  locationId: any;
  heading: string;
  features: any;
  serviceOffered: any;
  script: any;
  ogHomePage: any;
  twitterHomePage: any;
  imageBaseUrl: any;
  imagetype: any;

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
      content: `South Wenatchee Self Storage serves Wenatchee and the surrounding communities with a
      variety of well-maintained and affordable self storage units`
    });

    this.titleService.setTitle('Affordable Self Storage Units in Wenatchee ');
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchFeatures();
    this.fetchJumbotron();
   

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

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
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
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation1();
    } 
  }

  public fetchScript() {
    this.script = homePageScript;
  }


  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }


    public fetchContactDetailsLocation1() {
      this.heading = `South Wenatchee Self Storage`;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = `Leo's Self Storage`;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchFeatureHead() {
      this.features = featuresHead;
    }

    public fetchStaticContent() {
      this.serviceOffered = serviceOffered;
    }

}