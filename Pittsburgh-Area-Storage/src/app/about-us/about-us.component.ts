import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1,aboutUsLocation3,
          aboutUsHeadingLocation1, aboutUsHeadingLocation3,
          aboutUsImageLocation1,
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
    if (this.router.url.includes('/location/movin-on-storage')) {
      this.fetchDetailsLocation1();
  } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
    this.fetchDetailsLocation3();
  }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'Indoor Units at Movin\' On Storage Center';
  }
  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation3;
    this.image = aboutUsImageLocation3;
    this.alt = 'Natrona Heights Retail Store';
  }

  public fetchServiceOffered() {
    this.serviceOffered = serviceOffered;
  }
}
