import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2, directionLocation3,
  // directionLocation4,
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
    if (this.router.url.includes('/location/mcKenzie')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/huntingdon')) {
       this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/airport'))  {
       this.fetchDetailsLocation3();
    }
 }

 public fetchDetailsLocation1() {
  this.directionPoints = directionLocation1;
  this.directionHeading = `Directions`;
  this.id = 1;
}
  public fetchDetailsLocation2() {
    this.directionPoints = directionLocation2;
    this.directionHeading = ``;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    this.directionPoints = directionLocation3;
    this.directionHeading = ``;
    this.id = 3;
  }

  public fetchDetailsLocation4() {
    // this.directionPoints = directionLocation4;
    this.directionHeading = `Directions`;
    this.id = 4;
  }
}
