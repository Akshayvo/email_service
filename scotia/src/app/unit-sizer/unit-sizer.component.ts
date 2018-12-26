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
  previous: number;
  current: number;
  next: number;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Use our handy unit size guide to figure out which self storage unit size is right for your needs!
      Still have questions? Call (518) 382-0218!`
    });
    this.titleService.setTitle('Unit Sizer | Scotia Storage, Scotia, New York 12302');
  }

  ngOnInit() {
    this.current = 0;
    this.previous = 6;
    this.next = this.current + 1;
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
    this.next = this.current;
    this.current = this.previous;
    if ( this.previous === 0 ) {
      this.previous = 6;
    } else {
      this.previous = this.previous - 1;
    }
  }

  public moveRight() {
    this.previous = this.current;
    this.current = this.next;
    if ( this.next === 6 ) {
      this.next = 0;
    } else {
    this.next = this.next + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.current = unitId;
    if ( this.current === 0 ) {
      this.previous = 6;
      this.next = this.current + 1;
    } else if ( this.current === 6 ) {
      this.next = 0;
      this.previous = this.current - 1;
    } else {
      this.previous = this.current - 1;
      this.next = this.current + 1;
    }

  }
}
