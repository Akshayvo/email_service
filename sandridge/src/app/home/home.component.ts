import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { homePageTitle, homePageContent } from '../data/title';
import { contact, officeHours } from '../data/contact';
import { featuresList, featuresHead, aboutUs,
          gettingStarted, feature, blurbHeading, blurbText, aboutFamily } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';
import { homeScript } from '../data/script';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresHead: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  currentActive: any = 'HOME';
  blurbHeading: any;
  blurbText: any;
  slideShow: any;
  aboutFamily: any;
  homePageTitle: string;
  homePageContent: string;
  imagetype: any;
  imageBaseUrl: any;
  script: any;

  constructor(@Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
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

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
    this.fetchJumbotronText();
    window.scrollTo(0, 0);
    this.fetchScript();
    this.loadScript();
  }

  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = true; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public fetchScript() {
    this.script = homeScript;
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

  public fetchFeature () {
    this.feature = feature;
  }

}
