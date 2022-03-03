import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject,Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { homePageTitle, homePageContent } from "../data/title";
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, givenInfo, feature, blurb} from '../data/home';
import { DOCUMENT } from "@angular/common";
import { UaParserService } from "../services/ua-parser.service";
import { MetaService } from "../services/link.service";
import { CanonicalService } from "../services/canonical.service";
import { FetchDataService } from "../api-bundle/services/fetch-data.service";
import {
  homePageScript,
  ogHomePage,
  script,
  twitterHomePage,
} from "../data/script";
import { environment } from "../../environments/environment";
import { objSIMSetting } from "../data/configuration";





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresHead: any;
  blurb: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  givenInfo: string;
  imageBaseUrl: any;
  imagetype: any;
  feature: any;
  currentActive: any = 'HOME';
  homePageContent: string;
  homePageTitle: string;
  ogHomePage: any;
  twitterHomePage: any
  script: any;
  objSIMSetting: any;
  template: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    // private router: Router, 
    // private titleService: Title, 
    // private meta: Meta 
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private _renderer2: Renderer2,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,
    private fetchDataService: FetchDataService,
    @Inject(DOCUMENT) private _document: any
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

    this.meta.updateTag({
      name: "description",
      content: `${this.homePageContent}`,
    });
    this.titleService.setTitle(`${this.homePageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }
  
  
  // {
  //   this.meta.addTag({
  //     name: 'description',
  //     content: `Since 1985, Lois Stor-All has been serving the Burlington area, including Waterford, Delavan,
  //     and Elkhorn with quality self storage and customer service! `
  //   });
  //   this.titleService.setTitle('Affordable Self Storage in Burlington');
  // }

  public navigate(location: any) {
    if (
      location === "/view-rates" ||
      location === "/storage-tips" ||
      location === "/reserve-unit"
    ) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]);
    }
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
    window.scrollTo(0, 0);
    this.fetchScript();
  }

  findMinMax(arr) {
    let min = arr[0].MonthlyRate,
      max = arr[0].MonthlyRate;
    for (let i = 1, len = arr.length; i < len; i++) {
      let v = arr[i].MonthlyRate;
      min = v < min ? v : min;
      max = v > max ? v : max;
    }

    return [min, max];
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

  public fetchTemplate() {
    this.template = environment.template;
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }
  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
    this.givenInfo = givenInfo;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
