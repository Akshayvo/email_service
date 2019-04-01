import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsLocation3, aboutUsLocation4,
  aboutUsLocation5,
          headingLocation1, headingLocation2,  headingLocation3, headingLocation4, headingLocation5,
          aboutUsImageLocation1, aboutUsImageLocation2, aboutUsImageLocation3,
          aboutUsImageLocation4, aboutUsImageLocation5,
          alt1, alt2, alt3, alt4, alt5 } from '../data/location';

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/highland')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/lake-katrine'))  {
    this.fetchDetailsLocation3();
  } else  if (this.router.url.includes('/location/pawling'))  {
    this.fetchDetailsLocation4();
  } else {
    this.fetchDetailsLocation5();
  }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = headingLocation1;
    this.name = 'Poughkeepsie';
    this.image = aboutUsImageLocation1;
    this.alt = alt1;
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = headingLocation2;
    this.name = 'Highland';
    this.image = aboutUsImageLocation2;
    this.alt = alt2;
  }

  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = headingLocation3;
    this.name = 'Lake Katrine';
    this.alt = alt3;
    this.image = aboutUsImageLocation3;
  }

  public fetchDetailsLocation4() {
    this.aboutPara = aboutUsLocation4;
    this.heading = headingLocation4;
    this.name = 'Pawling';
    this.alt = alt4;
    this.image = aboutUsImageLocation4;
  }

  public fetchDetailsLocation5() {
    this.aboutPara = aboutUsLocation5;
    this.heading = headingLocation5;
    this.name = 'Hyde Park';
    this.image = aboutUsImageLocation5;
    this.alt = alt5;
  }
}
