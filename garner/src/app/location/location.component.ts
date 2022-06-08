import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  contactsLocation1, hoursLocation1,
  socialLinks,
  contactsLocation2,
  hoursLocation2
} from '../data/contact';
import { tabs, tabs1, headingLocation2 } from '../data/location';
import { headingLocation1 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
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
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  socialLinks: any;
  homePageContent: string;
  homePageTitle: string;
  imageBaseUrl: any;
  imagetype: any;
  unitTypes :any;
  ogHomePage: any;
  twitterHomePage: any;
  script: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private metaService: MetaService,
    private dataSharingService: DataSharingService,
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
    if (this.router.url.includes('/location/1321-north-jefferson-st-location')) {
      this.meta.addTag({
        name: 'description',
        content: `Check out our affordable rates and availability on our clean,
              well-maintained self storage units! Reserve online in seconds!`
      });
      this.titleService.setTitle(`24 Hour Access Storage Units | Garner's U Store`);
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    } else if (this.router.url.includes('/location/1687-US-441-location')) {
      this.meta.addTag({
        name: 'description',
        content: `After checking out our self storage unit pricing, make your reservation in seconds
          with our easy reservation form!`
      });
      this.titleService.setTitle(`Regular & Climate-Controlled Self Storage | Garner's U Store`);
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
    }
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
    this.metaService.createCanonicalURL();

  }

  public isSomePage() {
    if (this.router.url.includes('/location/1321-north-jefferson-st-location')) {
      this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/1687-US-441-location')) {
      this.fetchDetailsLocation2();
    }
  }



  public fetchDetailsLocation1() {
    this.name = headingLocation1;
    this.locationId = 1;
    this.contacts = contactsLocation1;
    this.hours = hoursLocation1;
    this.tabs = tabs1;
    this.socialLinks = socialLinks;
  }

  public fetchDetailsLocation2() {
    this.name = headingLocation2;
    this.locationId = 2;
    this.contacts = contactsLocation2;
    this.hours = hoursLocation2;
    this.tabs = tabs1;
    this.socialLinks = socialLinks;
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


  public navigateToReserve() {
    if (this.locationId === 1) {
      this.router.navigate(['/location/1321-north-jefferson-st-location/reserve-unit']);
    } else {
      if (this.locationId === 2) {
        this.router.navigate(['/location/1687-US-441-location/reserve-unit']);
      }
    }
  }
}
