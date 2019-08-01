import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsLocation3, aboutUsLocation4,
          aboutUsHeadingLocation1, aboutUsHeadingLocation2, aboutUsHeadingLocation3, aboutUsHeadingLocation4,
          aboutUsImageLocation1, aboutUsImageLocation2,
          aboutUsImageLocation3, aboutUsImageLocation4 } from '../data/location';
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
    if (this.router.url.includes('/location/730-kenton-station')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/751-kenton-station')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/augusta'))  {
    this.fetchDetailsLocation3();
  } else  if (this.router.url.includes('/location/front-street-climate-control'))  {
    this.fetchDetailsLocation4();
  }
}

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'Photograph of a self storage unit building from the outside';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'Photograph of an office with two employees sitting at their desk';
  }

  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation3;
    this.image = aboutUsImageLocation3;
    this.alt = '';
  }

  public fetchDetailsLocation4() {
    this.aboutPara = aboutUsLocation4;
    this.heading = aboutUsHeadingLocation4;
    this.image = aboutUsImageLocation4;
    this.alt = '';
  }

  public fetchServiceOffered() {
    this.serviceOffered = serviceOffered;
  }
}
