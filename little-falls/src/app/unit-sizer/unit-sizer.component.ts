import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1 } from '../data/location';
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
  h2tag: string;
  description: string;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/little-falls-mini-storage')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/highway-27-mini-storage')) {
    this.fetchDetailsLocation2();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `We understand that it can be difficult to figure out what sizes unit
    you will need for your belongings. Use our unit sizer chart to help you figure out what
    type of unit you'll need when you stay with us!`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `We understand that it can be difficult to figure out what sizes unit
    you will need for your belongings. Use our unit sizer chart to help you figure out what
    type of unit you'll need when you stay with us!`;
    this.unitSizer = unitSizerLocation1;
  }
}
