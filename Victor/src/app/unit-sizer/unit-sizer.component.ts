import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unitSizerVillage, unitSizerMall } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
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
  }

  public fetchUnitSizer() {
    if ( this.name === 'village' ) {
      this.unitSizer = unitSizerVillage;
    } else if ( this.name === 'mall' ) {
      this.unitSizer = unitSizerMall;
    }
  }
}
