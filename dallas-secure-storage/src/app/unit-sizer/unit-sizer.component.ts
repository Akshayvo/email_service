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
  h2tag: string;
  description: string;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/dallas-secure-storage')) {
      this.fetchDetailsLocation1();
  } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
    this.fetchDetailsLocation2();
  }
  }

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `Finding the right size is easy, below you will find some
                        of the common storage units, by size and what typically fits.
                        TIP: remember to think 'cubic', do your items just need floor
                        space or can they stack and fit together? *Actual contents
                        vary depending of the size of your belongings.`;
  }


  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Finding the right size is easy, below you will find some of the
                        common storage units, by size and what typically fits.
                        TIP: remember to think 'cubic', do your items just need floor
                        space or can they stack and fit together?
                        *Actual contents vary depending of the size of your belongings.`;
    this.unitSizer = unitSizerLocation2;
  }
}
