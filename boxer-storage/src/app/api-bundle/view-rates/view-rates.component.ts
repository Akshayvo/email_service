import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4, headingLocation5,
  headingLocation6, headingLocation7, headingLocation8   } from '../../data/location';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router,
    private canonical: CanonicalService
    ) {
      this.canonical.create();
     }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/evanston-ave`)) {
      this.id = 1;
      this.heading = headingLocation1;
    } 
    else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
      this.id = 2;
      this.heading = headingLocation2;
    } 
    else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
      this.id = 3;
      this.heading = headingLocation3;
    } 
     else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
      this.id = 4;
      this.heading = headingLocation4;
    } 
    else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
      this.id = 5;
      this.heading = headingLocation5;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
      this.id = 6;
      this.heading = headingLocation6;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
      this.id = 7;
      this.heading = headingLocation7;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
      this.id = 8;
      this.heading = headingLocation8;
    }
  }
}
