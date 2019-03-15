import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  directionLocation1, directionLocation2, directionLocation3, directionLocation4, directionLocation5
 } from '../data/location';
@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {
  name: string;
  id: number;
  directionPoints: any;
  directionHeading: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/highland')) {
       this.fetchDetailsLocation2();
     } else  if (this.router.url.includes('/location/lake-katrine'))  {
       this.fetchDetailsLocation3();
    } else  if (this.router.url.includes('/location/pawling'))  {
      this.fetchDetailsLocation4();
     } else {
       this.fetchDetailsLocation5();
     }
 }

 public fetchDetailsLocation1() {
  this.name = 'Poughkeepsie';
  this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to AllSpace Storage in Poughkeepsie`;
  this.id = 1;
}
  public fetchDetailsLocation2() {
    this.name = 'Highland';
    this.directionPoints = directionLocation2;
    this.directionHeading = `Directions to AllSpace Storage at Highlands`;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    this.name = 'Lake Katrine';
    this.directionPoints = directionLocation3;
    this.directionHeading = `Directions to Kingston/Lake Katrine`;
    this.id = 3;
  }

  public fetchDetailsLocation4() {
    this.name = 'Pawling';
    this.directionPoints = directionLocation4;
    this.directionHeading = `Directions to All Space Storage`;
    this.id = 4;
  }

  public fetchDetailsLocation5() {
    this.name = 'PawPoughkeepsieling';
    this.directionPoints = directionLocation5;
    this.directionHeading = `Directions`;
    this.id = 5;
  }
}
