import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
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
    if (this.router.url.includes('/wa/south-wenatchee')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/wa/leos-self-storage')) {
    this.fetchDetailsLocation2();
  } 
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Storage Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure
    that out! Still have questions? Call (509) 662-2600
    `;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Storage Unit Sizer ';
    this.description = `Not sure what size unit you need for your belongings? Use our handy unit sizing guide to figure
    that out! Still have questions? Call (509) 662-2600
    `;
    this.unitSizer = unitSizerLocation2;
  }

  
}
