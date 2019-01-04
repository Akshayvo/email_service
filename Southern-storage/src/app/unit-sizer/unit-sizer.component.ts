import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerMall } from '../data/location';
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
    // if (this.router.url.includes('/location/village')) {
    //     this.fetchUnitSizerVillage();
    // } else {
    //   this.fetchUnitSizerMall();
    // }
      this.fetchUnitSizerMall();
  }

//  public fetchUnitSizerVillage() {
//     this.name = 'village';
//     this.unitSizer = unitSizerVillage;
//   }

  public fetchUnitSizerMall() {
    this.name = 'mall';
    this.unitSizer = unitSizerMall;
  }
}
