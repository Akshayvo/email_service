import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizer1, unitSizer2 } from '../data/location';
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
    if (this.router.url.includes('/location/mall')) {
        this.id = 0;
        this.fetchUnitSizer1();
    } else if (this.router.url.includes('/location/village')) {
      this.id = 1;
      this.fetchUnitSizer2();
    }
  }

  public fetchUnitSizer1() {
    this.unitSizer = unitSizer1;
  }

  public fetchUnitSizer2() {
    this.unitSizer = unitSizer2;
  }
}
