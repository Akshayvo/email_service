import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, blurb} from '../data/home';
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
  blurb: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  currentActive: any = 'HOME';
  imageBaseUrl: any;
  imagetype: any;
  jumbotron: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you in search of affordable self storage units near Odem, MI? HWY 77 Self Storage
                has a wide variety of sizes and excellent customer service!`
    });
    this.titleService.setTitle('Affordable Self Storage Units in Odem | HWY 77 Self Storage');
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
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }
  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }

}
