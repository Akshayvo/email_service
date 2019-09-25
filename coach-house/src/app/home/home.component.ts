import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, officeHours } from '../data/contact';
import { featuresList, featuresHead, aboutUs,
          gettingStarted, feature, blurbHeading, blurbText } from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None,
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


  constructor(@Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `The Coach House is Palmetto, Florida's premiere luxury retirement community and RV Park. `
    });
    this.titleService.setTitle('Luxury Retirement Community in Palmetto | The Coach House');
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

  public fetchFeatures() {
    this.featuresList = featuresList;
    this.featuresHead = featuresHead;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }

  public fetchFeature () {
    this.feature = feature;
  }

}
