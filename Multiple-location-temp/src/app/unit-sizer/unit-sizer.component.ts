import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2 } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  tabs: any;
  currentTab = 'Unit Sizer';
  id: number;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
        this.fetchDetailsLocation1();
    } else  if (this.router.url.includes('/location/location2'))  {
      this.fetchDetailsLocation2();
    } else {
      this.fetchunitSizerLocation3();
    }
  }

 public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.id = 1;
  }

  public fetchDetailsLocation2() {
    this.unitSizer = unitSizerLocation2;
    this.id = 2;
  }

  public fetchunitSizerLocation3() {
    this.unitSizer = unitSizerLocation2;
    this.id = 3;
  }
}
