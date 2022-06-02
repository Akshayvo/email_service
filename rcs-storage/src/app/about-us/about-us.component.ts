import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsHeadingLocation1, aboutUsHeadingLocation2,
  aboutUsImageLocation1, aboutUsImageLocation2, aboutUsLocation3, aboutUsImageLocation3,
  aboutUsHeadingLocation3, aboutUsLocation4, aboutUsHeadingLocation4, aboutUsImageLocation4,
  aboutUsLocation5, aboutUsHeadingLocation5, aboutUsImageLocation5,
  aboutUsLocation6, aboutUsHeadingLocation6, aboutUsImageLocation6,  } from '../data/location';
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
    if (this.router.url.includes(`${environment.locationName}/rcs-west`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/rcs-east`)) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes(`${environment.locationName}/location-3`)) {
    this.fetchDetailsLocation3();
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
    this.heading = aboutUsHeadingLocation3;
    this.image = aboutUsImageLocation3;
    this.alt = 'Aerial photograph of a self storage facility and main office.';
  }

  public fetchDetailsLocation4() {
    this.aboutPara = aboutUsLocation4;
    this.heading = aboutUsHeadingLocation4;
    this.image = aboutUsImageLocation4;
    this.alt = `Aerial photo of a self storage unit surrounded by fence with recreational
    vehicles parked inside the gate.`;
  }
  public fetchDetailsLocation5() {
    this.aboutPara = aboutUsLocation5;
    this.heading = aboutUsHeadingLocation5;
    this.image = aboutUsImageLocation5;
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
}
