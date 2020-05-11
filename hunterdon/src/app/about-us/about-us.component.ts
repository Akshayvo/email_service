import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUs, aboutUsImage, heading } from '../data/location';

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
    this.fetchData();
  }

  public fetchData() {
    this.aboutPara = aboutUs;
    this.heading = heading;
    this.name = '';
    this.image = aboutUsImage;
  }
}
