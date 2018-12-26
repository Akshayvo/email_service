import { Component, OnInit, Inject } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
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
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
    ) {
      this.meta.addTag({
        name: 'description',
        content: ``
      });
      this.titleService.setTitle('Unit Sizer | Fortress Mini Storage');
    }

  ngOnInit() {
    this.current = 0;
    this.previous = 3;
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
