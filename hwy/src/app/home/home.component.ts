import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, feature } from '../data/home';
import { jumbotronHome } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service';


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
  retailStore: any;
  jumbotronHome: any;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Hwy 412 Mini Storage offers a wide variety of clean, affordable mini storage
        units, and parking for RVs, boats, or other vehicles! `
      });
      this.titleService.setTitle('Storage Units In Sprindale, AR | Hwy 214 Mini Storage');
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
    this.jumbotronHome = jumbotronHome;
  }

  public fetchFeature() {
    this.feature = feature;
  }
   public scroll(el: any) {
    el.scrollIntoView();
}
}
