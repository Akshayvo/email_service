import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { directionVillage, directionMall } from '../data/location';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  name: any;
  currentActiveTab: any = 'Directions';
  directionPoints: any;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchDirectionData();
  }


  public fetchDirectionData() {
    if ( this.name === 'village' ) {
    this.directionPoints = directionVillage;
    } else if ( this.name === 'mall' ) {
      this.directionPoints = directionMall;
    }
  }
}
