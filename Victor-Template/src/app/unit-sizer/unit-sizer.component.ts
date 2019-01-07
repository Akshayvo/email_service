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
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
        this.fetchunitSizerLocation1();
    } else {
      this.fetchunitSizerLocation2();
    }
  }

 public fetchunitSizerLocation1() {
    this.name = 'Location 1';
    this.unitSizer = unitSizerLocation1;
  }

  public fetchunitSizerLocation2() {
    this.name = 'Location 2';
    this.unitSizer = unitSizerLocation2;
  }
}
