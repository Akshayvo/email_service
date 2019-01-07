import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2 } from '../data/location';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  name: string;
  aboutPara: any;
  currentActiveTab: any = 'About Us';

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
        this.fetchDatalocation1();
    } else {
      this.fetchDatalocation2();
    }
  }

  public fetchDatalocation1() {
    this.aboutPara = aboutUsLocation1;
    this.name = 'location 1';
  }

  public fetchDatalocation2() {
    this.aboutPara = aboutUsLocation2;
    this.name = 'location 2';
  }
}
