import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-unit-sizes',
  templateUrl: './unit-sizes.component.html',
  styleUrls: ['./unit-sizes.component.scss']
})
export class UnitSizesComponent implements OnInit {

  unitsizers: any;
  selectedUnit: any;
  h: number;
  i: number;
  j: number;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.i = 0;
    this.h = 7;
    this.j = this.i + 1;
    this.fetchUnitSizer();
    window.scrollTo(0, 0);
  }

  public navigate(location: any) {
    if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]); 
    }
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
      this.h = 7;
    } else {
      this.h = this.h - 1;
    }
  }

  public moveRight() {
    this.h = this.i;
    this.i = this.j;
    if ( this.j === 7 ) {
      this.j = 0;
    } else {
    this.j = this.j + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.i = unitId;
    if ( this.i === 0 ) {
      this.h = 7;
      this.j = this.i + 7;
    } else if ( this.i === 7 ) {
      this.j = 0;
      this.h = this.i - 1;
    } else {
      this.h = this.i - 1;
      this.j = this.i + 1;
    }

  }
}
