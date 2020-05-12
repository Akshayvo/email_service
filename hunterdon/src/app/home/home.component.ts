import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact, hours, hoursLocation1, hoursLocation2, hoursLocation3,
   contactsLocation2, contactsLocation1,
  contactsLocation3 } from '../data/contact';
import { featuresHead, serviceOffered, gettingStarted, jumbotron,
  featuresList, aboutUsAlt, aboutUsHeading  } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { homePageContent, homePageTitle } from '../data/title';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  features: any;
  serviceOffered: any;
  jumbotron: any;
  gettingStarted: any;
  contactDetails: any;
  featuresList: any;
  hours: any;
  imageBaseUrl: any;
  aboutUsAlt: string;
  imagetype: any;
  aboutUsHeading: string;
  contactsLocation1: any;
  contactsLocation2: any;
  contactsLocation3: any;
  hoursLocation1: any;
  hoursLocation3: any;
  hoursLocation2: any;
  homePageTitle: string;
  homePageContent: string;


  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private uaParserService: UaParserService,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.homePageContent}`
    });
    this.titleService.setTitle(`${this.homePageTitle}`);

    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchStaticContent();
    this.fetchFeatureHead();
    this.fetchGettingStarted();
    this.fetchJumbotron();
    this.fetchFeatures();
    window.scrollTo(0, 0);
    // this.locationId = 0;
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }


  public fetchContactDetails() {
    this.contactDetails = contact;
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation3 = contactsLocation3;
  }


  public fetchHours() {
    this.hours = hours;
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation3 = hoursLocation3;
   }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
    this.aboutUsAlt = aboutUsAlt;
    this.aboutUsHeading = aboutUsHeading;
  }

  public fetchGettingStarted() {
    this.gettingStarted = gettingStarted;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

}
