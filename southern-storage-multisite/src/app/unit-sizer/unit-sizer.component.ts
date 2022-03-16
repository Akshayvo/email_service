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
    if (this.router.url.includes(`${environment.locationName}/rocky-creek`)) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes(`${environment.locationName}/agricola`)) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes(`${environment.locationName}/barton`)) {
    this.fetchDetailsLocation3();
  }  else if (this.router.url.includes(`${environment.locationName}/wade`)) {
    this.fetchDetailsLocation4();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Need help selecting a unit size?';
    this.description = `Not sure what size unit you need? Use our handy unit sizer below to determine which units will suit your needs!`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Need help selecting a unit size?';
    this.description = `Not sure what size unit you need? Use our handy unit sizer below to determine which units will suit your needs!`;
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Need help selecting a unit size?';
    this.description = `Not sure what size unit you need? Use our handy unit sizer below to determine which units will suit your needs!`;
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.h2tag = 'Need help selecting a unit size?';
    this.description = `Not sure what size unit you need? Use our handy unit sizer below to determine which units will suit your needs!`;
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
