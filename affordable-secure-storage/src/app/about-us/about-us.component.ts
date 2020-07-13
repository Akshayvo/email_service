import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1,
          aboutUsHeadingLocation1,
          aboutUsImageLocation1,
       } from '../data/location';
import { serviceOffered } from '../data/home';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  name: string;
  aboutPara: any;
  currentActiveTab: any = 'About Us';
  heading: string;
  image: any;
  alt: string;
  serviceOffered: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
    this.fetchServiceOffered();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
      this.fetchDetailsLocation1();
    }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'Affordable Secure Storage - Floral City, LLC';
  }

  public fetchServiceOffered() {
    this.serviceOffered = serviceOffered;
  }
}
