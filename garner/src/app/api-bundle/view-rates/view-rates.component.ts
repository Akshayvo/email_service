import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingStorageUnit1, headingStorageUnit2, headingLocation2 } from '../../data/location';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('1321-north-jefferson-st-location')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('1687-US-441-location')) {
      this.id = 2;
      this.heading = headingLocation2;
    }
  }
}
