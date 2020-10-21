import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-unit-sizer-iframe-page',
  templateUrl: './unit-sizer-iframe-page.component.html',
  styleUrls: ['./unit-sizer-iframe-page.component.scss']
})
export class UnitSizerIframePageComponent implements OnInit {
  unitsizers: any;
  selectedUnit: any;
  h: number;
  i: number;
  j: number;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `Take a moment to review our unit sizes, and what will fit inside with this easy visual guide!`
    });
    this.titleService.setTitle(`Unit Sizer | Lois Stor-All`);
  }

  ngOnInit() {
    this.i = 0;
    this.h = 6;
    this.j = this.i + 1;
    this.fetchUnitSizer();
    window.scrollTo(0, 0);
  }
  public fetchUnitSizer() {
    this.unitsizers = unitSizer;
  }

  public moveLeft() {
    this.j = this.i;
    this.i = this.h;
    if ( this.h === 0 ) {
      this.h = 6;
    } else {
      this.h = this.h - 1;
    }
  }

  public moveRight() {
    this.h = this.i;
    this.i = this.j;
    if ( this.j === 6 ) {
      this.j = 0;
    } else {
    this.j = this.j + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.i = unitId;
    if ( this.i === 0 ) {
      this.h = 6;
      this.j = this.i + 1;
    } else if ( this.i === 6 ) {
      this.j = 0;
      this.h = this.i - 1;
    } else {
      this.h = this.i - 1;
      this.j = this.i + 1;
    }

  }
}