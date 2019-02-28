import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates, benefitsList } from '../data/view-rates';

@Component({
  selector: 'app-unit-sizes',
  templateUrl: './unit-sizes.component.html',
  styleUrls: ['./unit-sizes.component.scss']
})
export class UnitSizesComponent implements OnInit {

  unitsizers: any;
  selectedUnit: any;
  previous: number;
  current: number;
  next: number;
  viewrates: any;
  benefitsList: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: ``
    });
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.current = 0;
    this.previous = 7;
    this.next = this.current + 1;
    this.fetchUnitSizer();
    this.fetchViewRates();
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
      this.previous = 7;
    } else {
      this.previous = this.previous - 1;
    }
  }


  public moveRight() {
    this.previous = this.current;
    this.current = this.next;
    if ( this.next === 7 ) {
      this.next = 0;
    } else {
    this.next = this.next + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.current = unitId;
    if ( this.current === 0 ) {
      this.previous = 7;
      this.next = this.current + 1;
    } else if ( this.current === 7 ) {
      this.next = 0;
      this.previous = this.current - 1;
    } else {
      this.previous = this.current - 1;
      this.next = this.current + 1;
    }

  }

  public fetchViewRates() {
    this.viewrates = viewrates;
    this.benefitsList = benefitsList;
  }
}
