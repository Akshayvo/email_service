import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactMainOffice, hoursMainOffice, contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,accessHoursLocation7,accessHoursLocation8,accessHoursLocation9,accessHoursLocation10,accessHoursLocation11,accessHoursLocation12,
  contactsLocation3, contactsLocation4, hoursLocation3, hoursLocation4,accessHoursLocation5,accessHoursLocation6,hoursLocation7,hoursLocation8,hoursLocation9,hoursLocation10,hoursLocation11,hoursLocation12,
  contactsLocation5, contactsLocation6, hoursLocation5, hoursLocation6,contactsLocation7,contactsLocation8,contactsLocation9,contactsLocation10,contactsLocation11,contactsLocation12 } from '../data/contact';
import { featuresHead, serviceOffered, featuresList, jumbotron, aboutusHeading, aboutusALt } from '../data/home';
import { homePageScript, ogHomePage, twitterHomePage } from '../data/script';
import { CanonicalService } from '../services/canonical.service';
import { LocationService } from '../services/location.service';
import { homePageTitle, homePageContent } from '../data/title';
import { environment } from '../../environments/environment';
import { UaParserService } from '../services/ua-parser.service';
import { carouselData } from '../data/carousel';

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
  aboutusHeading: any;
  aboutusAlt: any;
  carouselData: any;


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
    this.contactHomeDetails = contactMainOffice;
    this.hoursHomeDetails = hoursMainOffice;
    this.carouselData = carouselData;
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
    else if ( this.locationId === '7' ) {
      this.fetchContactDetailsLocation7();
    }
    else if ( this.locationId === '8' ) {
      this.fetchContactDetailsLocation8();
    }
    else if ( this.locationId === '9' ) {
      this.fetchContactDetailsLocation9();
    }
    else if ( this.locationId === '10' ) {
      this.fetchContactDetailsLocation10();
    }
    else if ( this.locationId === '11' ) {
      this.fetchContactDetailsLocation11();
    }
    else if ( this.locationId === '12' ) {
      this.fetchContactDetailsLocation12();
    }
  }

  public fetchScript() {
    this.script = homePageScript;
  }


  public fetchFeatures() {
    this.featuresList = featuresList;
  }


    public fetchContactDetailsLocation1() {
      this.heading = `Boxer Storage - Evanston Ave  Location`;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = `Boxer Storage - Howard City Location`;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchContactDetailsLocation3() {
      this.heading = `Boxer Storage - Ionia Location`;
      this.contactDetails = contactsLocation3;
      this.hoursDetails = hoursLocation3;
    }

    public fetchContactDetailsLocation4() {
      this.heading = `Boxer Storage - Alpine Location`;
      this.contactDetails = contactsLocation4;
      this.hoursDetails = hoursLocation4;
    } 

    public fetchContactDetailsLocation5() {
      this.heading = `Boxer Storage - Red Barn Location`;
      this.contactDetails = contactsLocation5;
      this.hoursDetails = hoursLocation5;
    }

    public fetchContactDetailsLocation6() {
      this.heading = `Boxer Storage - Wayland Westside Location`;
      this.contactDetails = contactsLocation6;
      this.hoursDetails = hoursLocation6;
    }

    public fetchContactDetailsLocation7() {
      this.heading = `Boxer Storage - Wayland Mill Street Location`;
      this.contactDetails = contactsLocation7;
      this.hoursDetails = hoursLocation7;
    }

    public fetchContactDetailsLocation8() {
      this.heading = `Boxer Storage - Waylanf Southside Location`;
      this.contactDetails = contactsLocation8;
      this.hoursDetails = hoursLocation8;
    }
    public fetchContactDetailsLocation9() {
      this.heading = `Boxer Storage - Dutton Location`;
      this.contactDetails = contactsLocation9;
      this.hoursDetails = hoursLocation9;
    }
    public fetchContactDetailsLocation10() {
      this.heading = `Boxer Storage - M-45 Location`;
      this.contactDetails = contactsLocation10;
      this.hoursDetails = hoursLocation10;
    }
    public fetchContactDetailsLocation11() {
      this.heading = `Boxer Storage - Otsego Location`;
      this.contactDetails = contactsLocation11;
      this.hoursDetails = hoursLocation11;
    }
    public fetchContactDetailsLocation12() {
      this.heading = `Boxer Storage - Allendale Location`;
      this.contactDetails = contactsLocation12;
      this.hoursDetails = hoursLocation12;
    }



    public fetchFeatureHead() {
      this.features = featuresHead;
    }

    public fetchStaticContent() {
      this.serviceOffered = serviceOffered;
      this.aboutusHeading = aboutusHeading;
      this.aboutusAlt = aboutusALt;
    }

}