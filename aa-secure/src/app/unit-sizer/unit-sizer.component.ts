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
    if (this.router.url.includes('/location/730-kenton-station')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/751-kenton-station')) {
    this.fetchDetailsLocation2();
  } else  if (this.router.url.includes('/location/113-mcDonald-parkway'))  {
    this.fetchDetailsLocation4();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = ``;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = ``;
    this.unitSizer = unitSizerLocation1;
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer';
    this.description = ``;
    this.unitSizer = unitSizerLocation1;
  }

  public fetchDetailsLocation4() {
    this.h2tag = 'Unit Sizer';
    this.description = ``;
    this.unitSizer = unitSizerLocation1;
  }
}
