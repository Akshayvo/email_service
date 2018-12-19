import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { aboutUs } from '../data/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  breadcrumbActive: any = 'About Us';
  currentActive: any = 'ABOUT';
  aboutUs: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Opened in 2003 Catskill Self Storage services the Catskill,
      Leeds, and Cairo communities with quality storage and U-Haul Rentals`
    });
    this.titleService.setTitle('About Catskill Self Storage');
  }

  ngOnInit() {
    this.fetchStaticContent();
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
  }

}
