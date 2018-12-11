import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { unitSizer } from '../data/unitSizer';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  tabs: any;
  currentActive = 'UNIT SIZER';
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    @Inject(WINDOW) private window: Window ) {
   }

  ngOnInit() {
    this.fetchUnitSizer();
    this.window.scrollTo(0, 0);

  }

  public fetchUnitSizer() {
      this.unitSizer = unitSizer;
  }

}
