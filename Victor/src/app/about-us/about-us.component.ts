import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUs1, aboutUs2, aboutUsImage1, aboutUsImage2, heading1, heading2 } from '../data/location';

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
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/mall')) {
        this.fetchData1();
    } else if (this.router.url.includes('/location/village')) {
        this.fetchData2();
    }
  }

  public fetchData1() {
    this.aboutPara = aboutUs1;
    this.heading = heading1;
    this.name = 'Mall';
    this.image = aboutUsImage1;
  }

  public fetchData2() {
    this.aboutPara = aboutUs2;
    this.heading = heading2;
    this.name = 'Village';
    this.image = aboutUsImage2;
  }
}
