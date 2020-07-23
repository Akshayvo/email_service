import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1 } from '../../data/location';
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
    if (this.router.url.includes('/location/1321-north-jefferson-st-location')) {
      this.id = 1;
      this.heading = headingLocation1;
    }
  }
}
