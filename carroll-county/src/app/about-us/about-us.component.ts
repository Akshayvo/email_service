import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsHeadingLocation1, aboutUsHeadingLocation2,
  aboutUsImageLocation1, aboutUsImageLocation2, aboutUsLocation3, aboutUsImageLocation3,
  aboutUsHeadingLocation3,
  aboutUsParaHeadingLocation1,
  aboutUsParaHeadingLocation2,
  aboutUsParaHeadingLocation3, } from '../data/location';

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
  paraHeading: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/mcKenzie')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/huntingdon')) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes('/location/airport')) {
    this.fetchDetailsLocation3();
  }
}

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.paraHeading = aboutUsParaHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = '';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.paraHeading = aboutUsParaHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = '';
  }

  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation3;
    this.image = aboutUsImageLocation3;
    this.paraHeading = aboutUsParaHeadingLocation3;
    this.alt = '';
  }
}
