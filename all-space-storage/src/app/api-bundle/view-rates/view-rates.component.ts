import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4, headingLocation5  } from '../../data/location';
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
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
      this.id = 2;
      this.heading = headingLocation2;
    } else if (this.router.url.includes('/location/highland')) {
      this.id = 3;
      this.heading = headingLocation3;
    } else if (this.router.url.includes('/location/lake-katrine')) {
      this.id = 4;
      this.heading = headingLocation4;
    } else if (this.router.url.includes('/location/pawling')) {
      this.id = 4;
      this.heading = headingLocation5;
    }
  }
}
