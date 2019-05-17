import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, featuresHead, aboutUs,  gettingStarted, feature, blurb} from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
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


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking for high-quality, affordable self storage and stellar customer service
                in Fountain Hills, AZ? Saguaro Self Storage has you covered! `
    });
    this.titleService.setTitle('Self Storage Units in Fountain Hills | Saguaro Self Storage');
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
    this.featuresHead = featuresHead;
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
