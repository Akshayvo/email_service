import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation12, aboutUsLocation2, aboutUsHeadingLocation12, aboutUsHeadingLocation2,
  aboutUsImageLocation12, aboutUsImageLocation2, aboutUsLocation3, aboutUsImageLocation3,
  aboutUsHeadingLocation3, aboutUsLocation4, aboutUsHeadingLocation4, aboutUsImageLocation4,
  aboutUsLocation5, aboutUsHeadingLocation5, aboutUsImageLocation5,
  aboutUsLocation6, aboutUsHeadingLocation6, aboutUsImageLocation6,  } from '../data/location';
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
  id: any;
  constructor(private router: Router,
    private canonical: CanonicalService
    ) { 
    this.canonical.create();
  }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('allendale')) {
      this.fetchDetailsLocation12();
  } 
}

  public fetchDetailsLocation12() {
    this.aboutPara = aboutUsLocation12;
    this.heading = aboutUsHeadingLocation12;
    this.image = aboutUsImageLocation12;
    this.alt = 'Aerial photograph of a self storage facility surrounded by fence';
    this.id = 12;
  }
}
