import { Component, OnInit, Renderer2, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, jumbotron} from '../data/home';
import { MetaService } from '../services/link.service';
import { DOCUMENT } from '@angular/common';
import { UaParserService } from '../services/ua-parser.service';


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
  year = [];
  jumbotron: any;
  authData: string;
  currentActive: any = 'HOME';
  imageBaseUrl: any;
  imagetype: any;

  data: any;



  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private _renderer2: Renderer2,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    @Inject(DOCUMENT) private _document: any,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We have a large variety of clean, affordable, and well-maintained self storage
                units just waiting to make your next project a breeze!`
    });
    this.titleService.setTitle('Affordable Self Storage in Robstown | Calallen Mini Storage');
    this.metaService.createCanonicalURL();

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
    this.fetchJumbotron();
    window.scrollTo(0, 0);
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
    this.gettingStarted = gettingStarted;
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
