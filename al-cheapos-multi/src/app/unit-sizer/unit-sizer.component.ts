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
    if (this.router.url.includes(`${environment.locationName}/storage-square`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/aarons-space-station`)) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes(`${environment.locationName}/lincoln-ave`)) {
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
    this.description = `Use our handy unit sizing chart to help visualize what sized unit you need for your personal belongings or business' equipment!`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer';
    this.description = `Not sure what will fit in a particular sized unit? Our unit sizer will help you estimate what will fit into each of our unit types.`;
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer ';
    this.description = `Not sure what will fit in a particular sized unit? Our unit sizer will help you estimate what will fit into each of our unit types.`;
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.h2tag = 'Storage Unit Sizer ';
    this.description = `Finding the right size is easy, below you will find some of the common storage units, by size and what
    typically fits. TIP: remember to think 'cubic', do your items just need floor space or can they stack and fit together?
    *Actual contents vary depending of the size of your belongings.`;
    this.unitSizer = unitSizerLocation4;
  } 

  public fetchDetailsLocation5() {
    this.h2tag = 'Storage Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have questions? Call (251) 970-3168`;
    this.unitSizer = unitSizerLocation5;
  }

  public fetchDetailsLocation6() {
    this.h2tag = 'Storage Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure that
    out! Still have questions? Call (251) 970-3168`;
    this.unitSizer = unitSizerLocation6;
  }
}
