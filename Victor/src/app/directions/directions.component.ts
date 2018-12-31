import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionVillage, directionMall } from '../data/location';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  name: any;
  directionPoints: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/village')) {
        this.fetchDirectionVillage();
    } else {
      this.fetchDirectionMall();
    }
 }

  public fetchDirectionVillage() {
    this.name = 'village';
    this.directionPoints = directionVillage;
  }

  public fetchDirectionMall() {
    this.name = 'mall';
    this.directionPoints = directionMall;
 }
}
