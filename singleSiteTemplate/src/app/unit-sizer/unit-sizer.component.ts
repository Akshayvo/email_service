import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unitSizer } from '../data/unitSizer';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit, OnDestroy {
  name: any;
  unitSizer: any;
  tabs: any;
  currentActive = 'UNIT SIZER';
  private sub: any;
  constructor( private route: ActivatedRoute ) {
   }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchUnitSizer();
  }

  public fetchUnitSizer() {
      this.unitSizer = unitSizer;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
