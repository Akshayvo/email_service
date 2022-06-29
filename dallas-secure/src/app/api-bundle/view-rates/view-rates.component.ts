import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4, headingLocation5,
  headingLocation6,   } from '../../data/location';
import { environment } from '../../../environments/environment'
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
    if (this.router.url.includes(`${environment.locationName}/dallas-secure-storage`)) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes(`${environment.locationName}/godsey-secure-storage`)) {
      this.id = 2;
      this.heading = headingLocation2;
    } else if (this.router.url.includes(`${environment.locationName}/location-3`)) {
      this.id = 3;
      this.heading = headingLocation3;
    } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
      this.id = 4;
      this.heading = headingLocation4;
    } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
      this.id = 5;
      this.heading = headingLocation5;
    } else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
      this.id = 6;
      this.heading = headingLocation6;
    }
  }
}
