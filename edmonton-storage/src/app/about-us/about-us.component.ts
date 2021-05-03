import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aboutUsLocation1, aboutUsLocation2, aboutUsHeadingLocation1, aboutUsHeadingLocation2,
  aboutUsImageLocation1, aboutUsImageLocation2, aboutUsLocation3, aboutUsImageLocation3,
  aboutUsHeadingLocation3, aboutUsLocation4, aboutUsHeadingLocation4, aboutUsImageLocation4,
  aboutUsLocation5, aboutUsHeadingLocation5, aboutUsImageLocation5,
  aboutUsLocation6, aboutUsHeadingLocation6, aboutUsImageLocation6, location1FeaturesList, location2FeaturesList,
location1AmenitiesHeading, location2AmenitiesHeading, location1AmenitiesParagraph, location2AmenitiesParagraph  } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
import { environment } from '../../environments/environment';
import { ThrowStmt } from '@angular/compiler';

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
  featuresList: any;
  amenitiesHeading: any;
  amenitiesParagraph: any;
  constructor(private router: Router,
    private canonical: CanonicalService
    ) { 
    this.canonical.create();
  }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/guardian`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/access-mini`)) {
    this.fetchDetailsLocation2();
  } 
}

  public fetchDetailsLocation1() {
    this.aboutPara = aboutUsLocation1;
    this.featuresList = location1FeaturesList
    this.heading = aboutUsHeadingLocation1;
    this.amenitiesHeading = location1AmenitiesHeading;
    this.amenitiesParagraph = location1AmenitiesParagraph;
    this.image = aboutUsImageLocation1;
    this.alt = '';
  }

  public fetchDetailsLocation2() {
    this.aboutPara = aboutUsLocation2;
    this.featuresList = location2FeaturesList
    this.heading = aboutUsHeadingLocation2;
    this.amenitiesHeading = location2AmenitiesHeading;
    this.amenitiesParagraph = location2AmenitiesParagraph;
    this.image = aboutUsImageLocation2;
    this.alt = '';
  }
}
