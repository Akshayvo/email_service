import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.fetchStaticContent();
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle('About Catskill Self Storage');
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
  }

}
