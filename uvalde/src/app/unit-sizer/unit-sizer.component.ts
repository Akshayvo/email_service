import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizer260NGrove, unitSizer201NGrove, unitSizer246WSouthLane,
  unitSizer817SGetty, unitSizer430SHwy83, unitSizer500EastGardenStreet,
  unitSizer2633EastMainStreet,unitSizer244NGrove } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  tabs: any;
  id: number;
  heading: string;
  para: string;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/260-n-grove')) {
        this.id = 0;
        this.heading = 'Unit Sizer',
        this.para = `Finding the right size is easy, below you will find some of the common storage
        units, by size and what typically fits. TIP: remember to think 'cubic', do your items just
        need floor space or can they stack and fit together? *Actual contents vary depending of the
        size of your belongings.`;
        this.unitSizer = unitSizer260NGrove;
    } else if (this.router.url.includes('/201-n-grove')) {
      this.id = 1;
      this.heading = 'Unit Sizer',
        this.para = `Finding the right size is easy, below you will find some of the common storage
        units, by size and what typically fits. TIP: remember to think 'cubic', do your items just
        need floor space or can they stack and fit together? *Actual contents vary depending of the
        size of your belongings.`;
        this.unitSizer = unitSizer201NGrove;
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.id = 2;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units,
      by size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space
      or can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer246WSouthLane;
    } else if (this.router.url.includes('/817-s-getty')) {
      this.id = 3;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units,
      by size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space
      or can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer817SGetty;
    } else if (this.router.url.includes('/430-s-hwy-83')) {
      this.id = 4;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units,
      by size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space
      or can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer430SHwy83;
    } else if (this.router.url.includes('/500-east-garden-street')) {
      this.id = 5;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units,
      by size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space
      or can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer500EastGardenStreet;
    } else if (this.router.url.includes('/2633-east-main-street')) {
      this.id = 6;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units, by
      size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space or
      can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer2633EastMainStreet;
    } else if (this.router.url.includes('/244-n-grove')) {
      this.id = 7;
      this.heading = 'Unit Sizer';
      this.para = `Finding the right size is easy, below you will find some of the common storage units, by
      size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space or
      can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
      this.unitSizer = unitSizer244NGrove;
    }
  }
}
