import { Component, OnInit, Input } from '@angular/core';
import { aboutUs } from '../data/home';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  breadcrumbActive: any = 'About Us';
  currentActive: any = 'ABOUT US';
  aboutUs: any;

  constructor() { }

  ngOnInit() {
    this.fetchStaticContent();
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
  }

}
