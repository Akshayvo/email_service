import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation3 } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  tabs: any;
  h2tag: string;
  description: string;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/inez-storage')) {
      this.fetchDetailsLocation1();
  } else  if (this.router.url.includes('/location/beck-road-storage'))  {
    this.fetchDetailsLocation3();
  }
  }

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `If you aren't sure what size unit you require, take a look at our easy sizing chart to help visualize what fits into which sized unit!`;
  }

  

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer';
    this.description = `If you aren't sure what size unit you require, take a look at our easy sizing chart to help visualize what fits into which sized unit!`;
    this.unitSizer = unitSizerLocation3;
  }
}
