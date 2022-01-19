import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   unitSizerLocation3, unitSizerLocation4, unitSizerLocation5, unitSizerLocation6
   } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
import { environment } from '../../environments/environment';
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
  constructor( private router: Router,
    private canonical: CanonicalService
    ) {
      this.canonical.create();

   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes(`${environment.locationName}/chillicothe`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/grove-city`)) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes(`${environment.locationName}/barnwell`)) {
    this.fetchDetailsLocation3();
  } else if (this.router.url.includes(`${environment.locationName}/belforest`)) {
    this.fetchDetailsLocation4();
  } else if (this.router.url.includes(`${environment.locationName}/fairhope`)) {
    this.fetchDetailsLocation5();
  } else if (this.router.url.includes(`${environment.locationName}/robertsdale`)) {
    this.fetchDetailsLocation6();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `Take a moment to review our selection of self storage unit sizes. Still not sure what size unit you need for your project? Give our friendly team a call today!`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Take a moment to review our selection of self storage unit sizes. Still not sure what size unit you need for your project? Give our friendly team a call today!`;
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.h2tag = '';
    this.description = ``;
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.h2tag = '';
    this.description = ``;
    this.unitSizer = unitSizerLocation4;
  } 

  public fetchDetailsLocation5() {
    this.h2tag = '';
    this.description = ``;
    this.unitSizer = unitSizerLocation5;
  }

  public fetchDetailsLocation6() {
    this.h2tag = '';
    this.description = ``;
    this.unitSizer = unitSizerLocation6;
  }
}
