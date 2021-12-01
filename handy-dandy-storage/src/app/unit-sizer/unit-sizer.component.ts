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
    if (this.router.url.includes(`${environment.locationName}/handy-dandy`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/north-road`)) {
    this.fetchDetailsLocation2();
  } 
 
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `Take a look at our estimated unit sizer to see what will fit inside of units of various sizes.`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Take a look at our estimated unit sizer to see what will fit inside of units of various sizes.`;
    this.unitSizer = unitSizerLocation2;
  }

 
}
