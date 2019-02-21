import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2,
  //  aboutUsLocation3,
          aboutUsHeadingLocation1, aboutUsHeadingLocation2,
          //  aboutUsHeadingLocation3,
          aboutUsImageLocation1, aboutUsImageLocation2,
          // aboutUsImageLocation3 
        } from '../data/location';

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
    if (this.router.url.includes('/location/linden-storage')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/macedon-storage')) {
    this.fetchDetailsLocation2();
  } 
  // else  if (this.router.url.includes('/location/natrona-heights-self'))  {
  //   this.fetchDetailsLocation3();
  // }
  }

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'A Photo of indoor self storage units at Linden Self Storage';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'Shaler Self Storage Retail Store';
  }

  // public fetchDetailsLocation3() {
  //   this.aboutPara = aboutUsLocation3;
  //   this.heading = aboutUsHeadingLocation3;
  //   this.image = aboutUsImageLocation3;
  //   this.alt = 'Natrona Heights Retail Store';
  // }
}
