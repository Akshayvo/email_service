import { Component, OnInit } from '@angular/core';
import { directionVillage } from "../data/location";
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  
  directionPoints: any;

  constructor() { }

  ngOnInit() {
    this.fetchDirectionData();
  }
 
 
  public fetchDirectionData() {
    this.directionPoints = directionVillage;
  }
}
