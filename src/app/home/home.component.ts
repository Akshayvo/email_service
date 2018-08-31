import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { contact, hours } from '../data/contact';
import { featuresList, featuresHead, aboutUs, serviceOffered, gettingStarted } from '../data/home';

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
  currentActive: any = 'HOME';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  public navigate(location) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
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

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.serviceOffered = serviceOffered;
    this.gettingStarted = gettingStarted;
  }

}
