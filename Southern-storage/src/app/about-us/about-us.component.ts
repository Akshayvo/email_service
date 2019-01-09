import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsAgricola, aboutUsBarton, aboutUsRockyCreek,
          headingRockyCreek, headingAgricola,  headingBarton,
          aboutUsImageRockyCreek, aboutUsImageAgricola, aboutUsImageBarton } from '../data/location';

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
    // console.log(this.image);
  }

  public isSomePage() {
    if (this.router.url.includes('/location/rocky-creek')) {
        this.fetchDataRockyCreek();
    } else if (this.router.url.includes('/location/agricola')) {
        this.fetchDataAgricola();
    } else {
      this.fetchDataBarton();
    }
  }

  public fetchDataRockyCreek() {
    this.aboutPara = aboutUsRockyCreek;
    this.heading = headingRockyCreek;
    this.name = 'Rocky Creek';
    this.image = aboutUsImageRockyCreek;
  }

  public fetchDataAgricola() {
    this.aboutPara = aboutUsAgricola;
    this.heading = headingAgricola;
    this.name = 'Agricola';
    this.image = aboutUsImageAgricola;
  }

  public fetchDataBarton() {
    this.aboutPara = aboutUsBarton;
    this.heading = headingBarton;
    this.name = 'Barton';
    this.image = aboutUsImageBarton;
  }
}
