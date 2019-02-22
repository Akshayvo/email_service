import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, feature, gettingStarted } from '../data/home';
import { jumbotronHome } from '../data/blurb';

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
  gettingStarted: string;
  jumbotronHome: any;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `St. Joe Self Storage offers brand new, high quality self storage units and
      stellar customer service at affordable prices! Call today to learn more!`
    });
    this.titleService.setTitle('Affordable Self Storage Units | St Joe Self Storage');
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
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
    this.jumbotronHome = jumbotronHome;
  }

  public fetchFeature() {
    this.feature = feature;
  }
   public scroll(el: any) {
    el.scrollIntoView();
}
}
