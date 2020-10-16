import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReserveUnitHeading1, ReserveUnitHeading2, ReserveUnitHeading3, } from '../data/location';
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
    if (this.router.url.includes('/location/mcKenzie')) {
      this.id = 1;
      this.heading = ReserveUnitHeading1;
    } else if (this.router.url.includes('/location/huntingdon')) {
      this.id = 2;
      this.heading = ReserveUnitHeading2;
    } else if (this.router.url.includes('/location/airport')) {
      this.id = 3;
      this.heading = ReserveUnitHeading3;
    }
  }
}
