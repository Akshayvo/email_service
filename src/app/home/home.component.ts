import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, featuresHead, aboutUs, serviceOffered, gettingStarted, feature } from '../data/home';

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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  public navigate(location) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.setTitle();
    this.fetchFeature();
 
  }

  public setTitle() {
    this.titleService.setTitle('Affordable Storage Units Near Catskill , NY | 12414 - Catskill Self Storage');
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
  }
  public fetchFeature() {
    this.feature = feature;
  }


  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.serviceOffered = serviceOffered;
    this.gettingStarted = gettingStarted;
  }

}
