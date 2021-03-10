import { Component, OnInit } from '@angular/core';
import { featuresList, aboutUs, feature, aboutUsAlt,jumbotron,aboutUsHeading } from '../data/home';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { contact, hours } from '../data/contact';
import { UaParserService } from '../../app/services/ua-parser.service';
import { homePageTitle, homePageContent } from '../data/title';
import { objSIMSetting } from '../data/configuration';
import { homePageScript, ogHomePage, script, twitterHomePage } from '../data/script';
import { CanonicalService } from '../services/canonical.service';

// import { slideShow } from '../data/view';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresList: any;
  aboutUs: any;
  feature: any;
  imageBaseUrl: any;
  imagetype: any;
  slideShow: any;
  currentActive: any = 'HOME';
  homePageContent: string;
  homePageTitle: string;
  objSIMSetting: any;
  ogHomePage: any;
  twitterHomePage: any;
  featuresHead: any;
  serviceOffered: any;
  gettingStarted: any;
  year = [];
  jumbotron: any;
  authData: string;
  data: any;
  aboutUsAlt: string;
  aboutUsHeading: string;
  template: string;
  script: any;


  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,

  ) {
    this.fetchScript();
    this.loadScript();
    this.fetchMetaData();
    this.fetchOgHomePage();
    this.fetchTwitterHomePage();
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
    this.canonical.create();

    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  public navigate(location: any) {
    if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]); 
    }
  }

  ngOnInit() {
    this.objSIMSetting = objSIMSetting;
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
    this.fetchJumbotron();
    this.fetchTemplate();
    this.fetchScript();
    window.scrollTo(0, 0);
  }
  findMinMax(arr) {
    let min = arr[0].MonthlyRate, max = arr[0].MonthlyRate;
    for (let i = 1, len=arr.length; i < len; i++) {
      let v = arr[i].MonthlyRate;
      min = (v < min) ? v : min;
      max = (v > max) ? v : max;
    }
  
    return [min, max];
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
  }
  public scroll(el: any) {
    el.scrollIntoView();
}
  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.aboutUsAlt = aboutUsAlt;
    this.aboutUsHeading = aboutUsHeading;
  }

  public fetchFeature () {
    this.feature = feature;
  }

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }

}
