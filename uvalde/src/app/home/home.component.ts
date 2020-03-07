import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contact, hours } from '../data/contact';
import { featuresHead, serviceOffered, gettingStarted, jumbotron, featuresList } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';


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
  imagetype: any;
  

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private uaParserService: UaParserService,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Affordable Storage serves Uvalde and the surrounding communities with a variety
      of well-maintained and affordable self storage units, accessible 24 hours a day!`
    });
    this.titleService.setTitle('Affordable Self Storage in Uvalde | Affordable Storage');

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

  public fetchContactDetails() {
    this.contactDetails = contact;
  }


  public fetchHours() {
    this.hours = hours;
   }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
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
