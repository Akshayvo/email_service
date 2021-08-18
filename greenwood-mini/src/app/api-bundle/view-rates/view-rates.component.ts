import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingLocation1, headingLocation2, headingLocation3 } from '../../data/location';
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
    if (this.router.url.includes(`${environment.locationName}/rebel-mini`)) {
      this.id = 1;
      this.heading = headingLocation1;
    } 
    else if (this.router.url.includes(`${environment.locationName}/secure-storage`)) {
      this.id = 2;
      this.heading = headingLocation2;
    } 
    else if (this.router.url.includes(`${environment.locationName}/green-wood`)) {
      this.id = 3;
      this.heading = headingLocation3;
    }
  }
}
