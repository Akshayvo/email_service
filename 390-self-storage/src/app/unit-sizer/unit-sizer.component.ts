import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from "../services/canonical.service";
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  unitsizers: any;
  selectedUnit: any;
  h: number;
  i: number;
  j: number;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `390 Self Storage offers clean and secure storage facility.
      We offer storage space from 25 sq feet to 300 sq feet. Serving Rochester, Gates and Brighton NY.`
    });
    this.canonical.create();
    this.titleService.setTitle(`Storage Facility Rochester NY, Size Estimator Gates, Brighton NY`);
  }

  ngOnInit() {
    this.i = 0;
    this.h = 5;
    this.j = this.i + 1;
    this.fetchUnitSizer();
    window.scrollTo(0, 0);
  }


  /**
   * fetchUnitSizer
   */
  public fetchUnitSizer() {
    this.unitsizers = unitSizer;
  }

  public moveLeft() {
    this.j = this.i;
    this.i = this.h;
    if ( this.h === 0 ) {
      this.h = 5;
    } else {
      this.h = this.h - 1;
    }
  }

  public moveRight() {
    this.h = this.i;
    this.i = this.j;
    if ( this.j === 5 ) {
      this.j = 0;
    } else {
    this.j = this.j + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.i = unitId;
    if ( this.i === 0 ) {
      this.h = 5;
      this.j = this.i + 1;
    } else if ( this.i === 5 ) {
      this.j = 0;
      this.h = this.i - 1;
    } else {
      this.h = this.i - 1;
      this.j = this.i + 1;
    }

  }
}
