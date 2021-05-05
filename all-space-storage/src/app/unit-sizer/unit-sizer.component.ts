import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { unitSizerLocation1, unitSizerLocation2,
   unitSizerLocation3, unitSizerLocation4, unitSizerLocation5
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
    if (this.router.url.includes('/location/poughkeepsie-arlington')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/poughkeepsie-hyde-park')) {
    this.fetchDetailsLocation2();
  } else if (this.router.url.includes('/location/highland')) {
    this.fetchDetailsLocation3();
  } else if (this.router.url.includes('/location/lake-katrine')) {
    this.fetchDetailsLocation4();
  } else if (this.router.url.includes('/location/pawling')) {
    this.fetchDetailsLocation5();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = 'Unit Sizer ';
    this.description = `This location offers a wide range of unit sizes.  A professional and knowledgeable storage
    associate will be glad to help you determine which size will best meet your needs.  AllSpace’s units have 9 to
    10-foot ceilings, which allows you to stack higher and store more for your money.  A wide selection of moving
    and storage supplies are available for sale at every AllSpace location.  We accept Discover, MasterCard, and Visa.
    Sign up for our Easy Pay program, and we’ll charge your credit card automatically.  The following unit sizes are
    available at the Poughkeepsie/Arlington site.`;
  }

  public fetchDetailsLocation2() {
    this.h2tag = 'Unit Sizer ';
    this.description = `This location offers a wide range of unit sizes. A professional and knowledgeable storage associate
    will be glad to help you determine which size will best meet your needs. AllSpace’s units have 9 to 10-foot ceilings,
    which allows you to stack higher and store more for your money. A wide selection of moving and storage supplies are
    available for sale at every AllSpace location. We accept Discover, MasterCard, and Visa. Sign up for our Easy Pay
    program, and we’ll charge your credit card automatically. The following unit sizes are available at the Poughkeepsie/Hyde Park site.`;
    this.unitSizer = unitSizerLocation2;
  }

  public fetchDetailsLocation3() {
    this.h2tag = 'Unit Sizer ';
    this.description = `This location offers a wide range of unit sizes, including some climate controlled. A professional
    and knowledgeable storage associate will be glad to help you determine which size will best meet your needs. AllSpace’s
    units have 9 to 10 foot ceilings, which allows you to stack higher and store more for your money. A wide selection of
    moving and storage supplies are available for sale at every AllSpace location. We accept Discover, MasterCard, and Visa.
    Sign up for our Easy Pay program, and we’ll charge your credit card automatically. The following unit sizes are available
    at the Highland site.`;
    this.unitSizer = unitSizerLocation3;
  }

  public fetchDetailsLocation4() {
    this.h2tag = 'Unit Sizer ';
    this.description = `This location offers a wide range of unit sizes, including many climate controlled. A professional and
    knowledgeable storage associate will be glad to help you determine which size will best meet your needs. AllSpace’s units
    have 9 to 10 foot ceilings, which allows you to stack higher and store more for your money. A wide selection of moving and
    storage supplies are available for sale at every AllSpace location. We accept Discover, MasterCard, and Visa. Sign up for
    our Easy Pay program, and we’ll charge your credit card automatically. The following unit sizes are available at the Lake
    Katrine/Kingston site.`;
    this.unitSizer = unitSizerLocation4;
  }
  public fetchDetailsLocation5() {
    this.h2tag = 'Unit Sizer ';
    this.description = `This location offers a wide range of unit sizes, including many climate controlled. A professional
     and knowledgeable storage associate will be glad to help you determine which size will best meet your needs. AllSpace’s
     units have 9 to 10-foot ceilings, which allows you to stack higher and store more for your money. A wide selection of
     moving and storage supplies are available for sale at every AllSpace location. We accept Discover, MasterCard, and Visa.
     Sign up for our Easy Pay program, and we’ll charge your credit card automatically. The following unit sizes are available
     at the Pawling/Brewster site.`;
    this.unitSizer = unitSizerLocation5;
  }
}
