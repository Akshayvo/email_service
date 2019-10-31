import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, officeHours } from '../data/contact';
import { featuresList, featuresHead, aboutUs,
          gettingStarted, feature, blurb, } from '../data/home';

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
  blurb: any;


  constructor(@Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We are Largo's newest self storage facility with a wide variety of units at extremely affordable rates! Reserve your self storage unit today!`
    });
    this.titleService.setTitle('Affordable Self Storage Units in Largo | State Storage Largo');
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
    // this.blurbHeading = blurbHeading;
    // this.blurbText = blurbText;
    this.blurb = blurb;
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
