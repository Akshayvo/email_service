import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   unitSizerLocation3, unitSizerLocation4
   } from '../data/location';
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
  constructor( private router: Router ) {
   }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/andrews')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/chester')) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes('/location/montgomery-walden')) {
    this.fetchDetailsLocation3();
  } else if (this.router.url.includes('/location/middletown-wallKill')) {
    this.fetchDetailsLocation4();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure
    that out! Still have questions? Call (845) 469-4888`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure
    that out! Still have questions? Call (845) 469-4888`;
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer';
    this.description = `If you're having trouble figuring out what sized unit you'll need at StorageTown Rental Spaces,
    use this handy Unit Sizer to help visualize the size you require! Still have questions? Call (845) 457-3500 and one
    of our friendly storage associates will help!`;
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.h2tag = 'Unit Sizer';
    this.description = `Having trouble figuring out what size unit is required for your storage needs? Use our self
    storage unit sizer to help visualize what will fit!`;
    this.unitSizer = unitSizerLocation4;
  }
}
