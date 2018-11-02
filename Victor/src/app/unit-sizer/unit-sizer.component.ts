import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unitSizerVillage, unitSizerMall } from '../data/location';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit, OnDestroy {
  name: any;
  unitSizer: any;
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
    if ( this.name == 'village' ) {
      this.unitSizer = unitSizerVillage;
    } else if ( this.name == 'mall' )
    {
      this.unitSizer = unitSizerMall;
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
