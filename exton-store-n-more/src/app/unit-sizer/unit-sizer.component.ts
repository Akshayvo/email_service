import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
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
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Not sure what sized unit will suit your needs? Use our handy sizing
                chart to help visualize the proper unit for you!`
    });
    this.titleService.setTitle(`Unit Sizer | Hammertime Self Storage`);
  }

  ngOnInit() {
    this.i = 0;
    this.h = 7;
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
      this.j = this.i + 1;
    } else if ( this.i === 7 ) {
      this.j = 0;
      this.h = this.i - 1;
    } else {
      this.h = this.i - 1;
      this.j = this.i + 1;
    }

  }
}
