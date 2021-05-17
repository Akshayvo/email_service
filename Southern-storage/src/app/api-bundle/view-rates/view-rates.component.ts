import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (this.router.url.includes('/location/agricola')) {
      this.id = 1;
      this.heading = 'Southern Storage - Agricola';
    } else if (this.router.url.includes('/location/rocky-creek')) {
      this.id = 2;
      this.heading = 'Southern Storage - Rocky Creek';
    } else if (this.router.url.includes('/location/barton')) {
      this.id = 3;
      this.heading = 'Southern Storage - Barton';
    }
    else if (this.router.url.includes('/location/wade')) {
      this.id = 4;
      this.heading = 'Southern Storage - Wade';
    }
  }
}