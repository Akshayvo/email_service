import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { unitSizerPageContent, unitSizerPageTitle } from '../data/title';
import { unitSizerHeading } from '../data/heading';
import { CanonicalService } from "../services/canonical.service";

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  unitsizers: any;
  selectedUnit: any;
  unitSizerPageTitle: string;
  unitSizerPageContent: string;
  unitSizerHeading: string;
  h: number;
  i: number;
  j: number;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.unitSizerPageContent}`
    });
    this.titleService.setTitle(`${this.unitSizerPageTitle}`);
    this.canonical.create();
  }

  ngOnInit() {
    this.i = 0;
    this.h = 6;
    this.j = this.i + 1;
    this.fetchUnitSizer();
    window.scrollTo(0, 0);
    this.fetchUnitSizerHeading();
  }

  public fetchMetaData() {
    this.unitSizerPageTitle = unitSizerPageTitle;
    this.unitSizerPageContent = unitSizerPageContent;
  }

  public fetchUnitSizerHeading() {
    this.unitSizerHeading = unitSizerHeading;
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
