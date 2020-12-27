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
    if (this.router.url.includes('/location/line-drive')) {
      this.fetchDetailsLocation1();
  } else if (this.router.url.includes('/location/holly-avenue')) {
    this.fetchDetailsLocation2();
  }
}

  public fetchDetailsLocation1() {
    this.unitSizer = unitSizerLocation1;
    this.h2tag = ' ';
    this.description = ``;
  }

  public fetchDetailsLocation2() {
    this.h2tag = '';
    this.description = ``;
    this.unitSizer = unitSizerLocation2;
  }

}
