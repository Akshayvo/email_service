import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1,
          aboutUsHeadingLocation1,
          aboutUsImageLocation1,
          aboutUsLocation2,
          aboutUsHeadingLocation2,
          aboutUsImageLocation2} from '../data/location';
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
    if (this.router.url.includes('/location/dallas-secure-storage')) {
      this.fetchDetailsLocation1();
  } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
    this.fetchDetailsLocation2();
  }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'photograph of the owners, a man and a woman standing side by side';
  }
  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'photograph of the owners, a man and a woman standing side by side';
  }

  public fetchServiceOffered() {
    this.serviceOffered = serviceOffered;
  }
}
