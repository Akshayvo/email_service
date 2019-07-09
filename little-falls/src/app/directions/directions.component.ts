import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (this.router.url.includes('/location/little-falls-mini-storage')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/highway-27-mini-storage')) {
       this.fetchDetailsLocation2();
     }
 }

 public fetchDetailsLocation1() {
  this.directionHeading = `Directions to Little Falls Mini Storage`;
  this.id = 1;
}
  public fetchDetailsLocation2() {
    this.directionHeading = `Directions to Highway 27 Storage`;
    this.id = 2;
  }
}
