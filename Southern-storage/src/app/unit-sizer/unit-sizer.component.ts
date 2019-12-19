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
  id: number;
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/agricola')) {
        this.id = 0;
    } else if (this.router.url.includes('/location/rocky-creek')) {
      this.id = 1;
    } else {
      this.id = 2;
    }
      this.fetchUnitSizer();
  }

  public fetchUnitSizer() {
    this.unitSizer = unitSizerMall;
  }
}
