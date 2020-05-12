import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2, unitSizerLocation3 } from '../data/location';
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
    if (this.router.url.includes('/hunterdon-storage-ringoes')) {
        this.id = 0;
        this.heading = 'Unit Sizer',
        this.para = `Finding the right size is easy, below you will find some of the common storage
        units, by size and what typically fits. TIP: remember to think 'cubic', do your items just need
        floor space or can they stack and fit together? *Actual contents vary depending of the size of
        your belongings.`;
        this.unitSizer = unitSizerLocation1;
    } else if (this.router.url.includes('/hunterdon-storage-1')) {
      this.id = 1;
      this.heading = 'Unit Sizer',
        this.para = `Finding the right size is easy, below you will find some of the common storage units,
        by size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space
        or can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
        this.unitSizer = unitSizerLocation2;
    } else if (this.router.url.includes('/hunterdon-storage-2')) {
      this.id = 2;
      this.heading = 'Unit Sizer',
        this.para = `Finding the right size is easy, below you will find some of the common storage units, by
        size and what typically fits. TIP: remember to think 'cubic', do your items just need floor space or
        can they stack and fit together? *Actual contents vary depending of the size of your belongings.`;
        this.unitSizer = unitSizerLocation3;
    }
  }
}
