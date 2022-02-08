import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2,aboutUsLocation4,aboutUsLocation5,aboutUsLocation7,aboutUsLocation8, aboutUsHeadingLocation1, aboutUsHeadingLocation2,
  aboutUsImageLocation1, aboutUsImageLocation2, aboutUsLocation3, aboutUsHeadingLocation3,aboutUsImageLocation3,aboutUsHeadingLocation4, aboutUsImageLocation4,
  aboutUsLocation6, aboutUsHeadingLocation6, aboutUsImageLocation6 } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
import { environment } from '../../environments/environment';

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
    if (this.router.url.includes(`${environment.locationName}/260-n-grove`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/201-n-grove`)) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes(`${environment.locationName}/246-w-south-lane`)) {
    this.fetchDetailsLocation3();
  }
  else if (this.router.url.includes(`${environment.locationName}/817-s-getty`)) {
    this.fetchDetailsLocation4();
  }
  else if (this.router.url.includes(`${environment.locationName}/430-s-hwy-83`)) {
    this.fetchDetailsLocation5();
  }
  else if (this.router.url.includes(`${environment.locationName}/500-east-garden-street`)) {
    this.fetchDetailsLocation6();
  }
  else if (this.router.url.includes(`${environment.locationName}/2633-east-main-street`)) {
    this.fetchDetailsLocation7();
  }
  else if (this.router.url.includes(`${environment.locationName}/244-n-grove`)) {
    this.fetchDetailsLocation8();
  }
}

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.heading = aboutUsHeadingLocation1;
    this.image = aboutUsImageLocation1;
    this.alt = 'Aerial photograph of a self storage facility surrounded by fence';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'Aerial photograph of self storage facility with recreational vehicle and boat parking';
  }

  public fetchDetailsLocation3() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = 'Aerial photograph of a self storage facility and main office.';
  }

  public fetchDetailsLocation4() {
    this.aboutPara = aboutUsLocation3;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }
  public fetchDetailsLocation5() {
    this.aboutPara = aboutUsLocation5;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }
  public fetchDetailsLocation6() {
    this.aboutPara = aboutUsLocation6;
    this.heading = aboutUsHeadingLocation6;
    this.image = aboutUsImageLocation6;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }

  public fetchDetailsLocation7() {
    this.aboutPara = aboutUsLocation7;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }

  public fetchDetailsLocation8() {
    this.aboutPara = aboutUsLocation8;
    this.heading = aboutUsHeadingLocation2;
    this.image = aboutUsImageLocation2;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }
}
