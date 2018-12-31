import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsVillage, aboutUsMall } from '../data/location';

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
    if (this.router.url.includes('/location/village')) {
        this.fetchDataVillage();
    } else {
      this.fetchDataMall();
    }
  }

  public fetchDataVillage() {
    this.aboutPara = aboutUsVillage;
    this.name = 'Village';
  }

  public fetchDataMall() {
    this.aboutPara = aboutUsMall;
    this.name = 'Mall';
  }
}
