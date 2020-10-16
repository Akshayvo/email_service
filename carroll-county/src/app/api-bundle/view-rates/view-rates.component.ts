import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { headingLocation1, headingLocation2, headingLocation3  } from '../../data/location';
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
    ) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/mcKenzie')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/huntingdon')) {
      this.id = 2;
      this.heading = headingLocation2;
    } else if (this.router.url.includes('/location/airport')) {
      this.id = 3;
      this.heading = headingLocation3;
    }
  }
}
