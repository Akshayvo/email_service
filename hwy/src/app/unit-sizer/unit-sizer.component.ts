import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { unitSizers } from '../data/blurb';

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

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you having trouble figuring out what sized unit to select? Use our
      handy self storage unit sizer to help you decide!`
    });
    this.titleService.setTitle('Unit Sizer | Hwy 412 Mini Storage');
  }

  ngOnInit() {
    this.current = 0;
    this.previous = 3;
    this.next = this.current + 1;
    this.fetchUnitSizer();
    this.fetchUnitsizers();
    window.scrollTo(0, 0);
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
      this.previous = 3;
    } else {
      this.previous = this.previous - 1;
    }
  }

  public moveRight() {
    this.previous = this.current;
    this.current = this.next;
    if ( this.next === 3 ) {
      this.next = 0;
    } else {
    this.next = this.next + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.current = unitId;
    if ( this.current === 0 ) {
      this.previous = 3;
      this.next = this.current + 1;
    } else if ( this.current === 3 ) {
      this.next = 0;
      this.previous = this.current - 1;
    } else {
      this.previous = this.current - 1;
      this.next = this.current + 1;
    }

  }
}
