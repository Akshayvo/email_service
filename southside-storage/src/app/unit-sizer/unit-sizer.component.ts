import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { unitSizers } from '../data/blurb';
import { unitSizerPageContent, unitSizerPageTitle } from '../data/title';
import { unitSizerHeading } from '../data/heading';

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  unitsizer: any;
  selectedUnit: any;
  previous: number;
  current: number;
  next: number;
  unitSizers: any;
  unitSizerPageContent: string;
  unitSizerPageTitle: string;
  unitSizerHeading: string;
  
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.unitSizerPageContent}`
    });
    this.titleService.setTitle(`${this.unitSizerPageTitle}`);
  }

  ngOnInit() {
    this.current = 0;
    this.previous = 5;
    this.next = this.current + 1;
    this.fetchUnitSizer();
    this.fetchUnitsizers();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.unitSizerPageTitle = unitSizerPageTitle;
    this.unitSizerPageContent = unitSizerPageContent;
    this.unitSizerHeading = unitSizerHeading;
  }

  /**
   * fetchUnitSizer
   */
  public fetchUnitSizer() {
    this.unitsizer = unitSizer;
  }

  public fetchUnitsizers() {
    this.unitSizers = unitSizers;
  }

  public moveLeft() {
    this.next = this.current;
    this.current = this.previous;
    if ( this.previous === 0 ) {
      this.previous = 5;
    } else {
      this.previous = this.previous - 1;
    }
  }

  public moveRight() {
    this.previous = this.current;
    this.current = this.next;
    if ( this.next === 5 ) {
      this.next = 0;
    } else {
    this.next = this.next + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.current = unitId;
    if ( this.current === 0 ) {
      this.previous = 5;
      this.next = this.current + 1;
    } else if ( this.current === 5 ) {
      this.next = 0;
      this.previous = this.current - 1;
    } else {
      this.previous = this.current - 1;
      this.next = this.current + 1;
    }

  }
}
