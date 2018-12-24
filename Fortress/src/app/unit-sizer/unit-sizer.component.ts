import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
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

  constructor() { }

  ngOnInit() {
    this.fetchUnitSizer();
    this.unitSizer(3, 0, 4);
    window.scrollTo(0, 0);
  }


  /**
   * fetchUnitSizer
   */
  public fetchUnitSizer() {
    this.unitsizers = unitSizer;
  }

  public unitSizer(h: number, i: number, j: number) {
    i = 0;
    h = 3;
    j = i + 1;
  }

  public moveLeft(h: number, i: number, j: number) {
    j = i;
    i = h;
    if ( h === 0 ) {
      h = 3;
    } else {
      h = h - 1;
    }
  }

  public moveRight(h: number, i: number, j: number) {
    h = i;
    i = j;
    if ( j === 3 ) {
      j = 0;
    } else {
    j = j + 1;
    }
  }

  public activeUnit(h: number, i: number, j: number) {
    if ( i === 0 ) {
      h = 3;
      j = i + 1;
    } else if ( i === 3 ) {
      j = 0;
      h = i - 1;
    } else {
      h = i - 1;
      j = i + 1;
    }

  }
}
