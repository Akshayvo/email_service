import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from "../services/link.service";
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
    private metaService: MetaService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Not sure what sized unit you need? Use our handy chart to determine what unit will fit your belongings!`
    });
    this.titleService.setTitle(`Unit Sizer | Linden Self Storage`);
  }

  ngOnInit() {
    this.metaService.createCanonicalURL();
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
