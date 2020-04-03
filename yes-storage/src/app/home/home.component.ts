import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta, } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, feature, jumbotron, aboutUsText, aboutUsAlt, gettingStarted } from '../data/home';
import { CanonicalService } from '../services/canonical.service';
import { script } from '../data/script';
import { homePageTitle, homePageContent } from '../data/title';
import { UaParserService } from '../services/ua-parser.service';

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
  script: any;
  jumbotron: any;
  feature: any;
  homePageTitle: string;
  homePageContent: string;
  aboutUsAlt: string;
  aboutUsText: string;
  gettingStarted: string;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,
    ) {
      this.canonical.create();
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
    this.fetchScript();
    this.fetcchJumbotron();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
    this.aboutUsText = aboutUsText;
    this.aboutUsAlt = aboutUsAlt;
    this.gettingStarted = gettingStarted;
  }


  public fetchScript() {
    this.script = script;
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

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
  }

  public fetchFeature() {
    this.feature = feature;
  }

  public fetcchJumbotron() {
    this.jumbotron = jumbotron;
  }

   public scroll(el: any) {
    el.scrollIntoView();
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }
}
