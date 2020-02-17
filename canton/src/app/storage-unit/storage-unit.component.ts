import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation2, headingLocation3 } from '../data/location';
import { rates } from '../data/view-rates';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  id: number;
  tabs: any;
  heading: string;
  rates: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/fohl-street-storage')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/louisville-self-storage')) {
      this.id = 2;
      this.heading = headingLocation2;
    } else  if (this.router.url.includes('/location/lincoln-street-storage'))  {
      this.id = 3;
      this.heading = headingLocation3;
      this.rates = rates;
    }
  }
}
