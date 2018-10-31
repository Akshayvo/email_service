import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { unitSizerVillage } from '../data/location'
 
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  name: any;
  unitSizer: any;
  // @Input('placeName') placeName;

  constructor() {
  //   this.route.queryParams.subscribe(params => {
  //     this.name = params["placeName"];
  // });
   }

  ngOnInit() {
    this. fetchUnitSizer();
    console.log(this.name);
  }

  public fetchUnitSizer() {
    this.unitSizer = unitSizerVillage;
  }


}
