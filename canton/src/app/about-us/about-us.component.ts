import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsLocation3,
          aboutUsHeadingLocation1, aboutUsHeadingLocation2, aboutUsHeadingLocation3,
          aboutUsImageLocation1, aboutUsImageLocation2,
          aboutUsImageLocation3 } from '../data/location';
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
    if (this.router.url.includes('/location/fohl-street-storage')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/location2')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/location3'))  {
    this.fetchDetailsLocation3();
  }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'Photograph of a cardboard box being opened';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'Photograph of a cardboard box being opened';
  }

  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation3;
    this.image = aboutUsImageLocation3;
    this.alt = 'Photograph of a cardboard box being opened';
  }

  public fetchServiceOffered() {
    this.serviceOffered = serviceOffered;
  }
}
