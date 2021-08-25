import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsHeadingLocation1, aboutUsHeadingLocation2,
  aboutUsImageLocation1, aboutUsImageLocation2 } from '../data/location';
import { CanonicalService } from '../services/canonical.service';

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
  constructor(private router: Router,
    private canonical: CanonicalService
    ) { 
    this.canonical.create();
  }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/line-drive')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/holly-avenue')) {
    this.fetchDetailsLocation2();
  }
}

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = '';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = '';
  }
}