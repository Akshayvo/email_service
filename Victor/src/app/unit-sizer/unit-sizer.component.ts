import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unitSizerVillage, unitSizerMall, tabs } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit, OnDestroy {
  name: any;
  unitSizer: any;
  tabs: any;
  currentTab = 'Unit Sizer';
  private sub: any;
  constructor( private route: ActivatedRoute ) {
   }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchUnitSizer();
    this.fetchTabs();
  }

  public fetchUnitSizer() {
    // tslint:disable-next-line:triple-equals
    if ( this.name == 'village' ) {
      this.unitSizer = unitSizerVillage;
    // tslint:disable-next-line:triple-equals
    } else if ( this.name == 'mall' ) {
      this.unitSizer = unitSizerMall;
    }
  }

  public fetchTabs() {
    this.tabs = tabs;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
