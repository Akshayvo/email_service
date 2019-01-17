import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2, unitSizerLocation3, unitSizerLocation4 } from '../data/location';
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
    if (this.router.url.includes('/location/poughkeepsie')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/highland')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/lake-katrine'))  {
    this.fetchDetailsLocation3();
  } else {
    this.fetchDetailsLocation4();
  }
  }

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
  }

  public fetchDetailsLocation2() {
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.unitSizer = unitSizerLocation4;
  }

}
