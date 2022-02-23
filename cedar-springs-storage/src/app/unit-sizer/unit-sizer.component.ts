import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   
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
    if (this.router.url.includes(`${environment.locationName}/cedar`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/e-town`)) {
    this.fetchDetailsLocation2();
  } 
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = ` Check out the unit size estimates below, and find out what will fit into the units at this location!`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Check out the unit size estimates below, and find out what will fit into the units at this location!`;
    this.unitSizer = unitSizerLocation2;
  }

  
}
