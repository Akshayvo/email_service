import { WINDOW } from "@ng-toolkit/universal";
import { Component, OnInit, Inject,Renderer2 } from "@angular/core";
import { Router } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { homePageTitle, homePageContent } from "../data/title";
import { contact, officeHours } from "../data/contact";
import { MetaService } from "../services/link.service";
import {
  featuresList,
  featuresHead,
  aboutUs,
  gettingStarted,
  feature,
  blurbHeading,
  blurbText,
  aboutFamily,
} from "../data/home";
import {    homePageScript,
            ogHomePage,
            script,
            twitterHomePage, } from "../data/script";
import { environment } from "../../environments/environment";
import { CanonicalService } from "../services/canonical.service";
import { UaParserService } from "../services/ua-parser.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hours: any;
  featuresHead: any;
  featuresList: any;
  imageBaseUrl: any;
  imagetype: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  currentActive: any = "HOME";
  blurbHeading: any;
  blurbText: any;
  slideShow: any;
  aboutFamily: any;
  homePageTitle: string;
  homePageContent: string;
  script: any;
  ogHomePage: any;
  twitterHomePage: any

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private _renderer2: Renderer2,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,
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
      name: "description",
      content: `${this.homePageContent}`,
    });
    this.titleService.setTitle(`${this.homePageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

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
    this.fetchJumbotronText();
    this.fetchScript();
    window.scrollTo(0, 0);
  }

  public fetchJumbotronText() {
    this.blurbHeading = blurbHeading;
    this.blurbText = blurbText;
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = officeHours;
  }

  public fetchScript() {
    // this.script = script;
    this.script = homePageScript;
  }

  public fetchOgHomePage() {
    this.ogHomePage = ogHomePage;
  }

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
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

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
    this.featuresHead = featuresHead;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.aboutFamily = aboutFamily;
    this.gettingStarted = gettingStarted;
  }

  public fetchFeature() {
    this.feature = feature;
  }


  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }
}
