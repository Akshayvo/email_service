import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation2, headingLocation3 } from '../data/location';
@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;
  currentActiveTab: any = 'Reserve Unit';

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/movin-on-storage')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/shaler-self')) {
      this.id = 2;
      this.heading = headingLocation2;
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
      this.id = 3;
      this.heading = headingLocation3;
    }
  }
}
