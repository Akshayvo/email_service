import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { directionLocation1, directionLocation2, directionLocation3 } from '../data/location';
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
    if (this.router.url.includes('/location/fohl-street-storage')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/louisville-self-storage')) {
       this.fetchDetailsLocation2();
     } else  if (this.router.url.includes('/location/lincoln-street-storage'))  {
       this.fetchDetailsLocation3();
     }
 }

 public fetchDetailsLocation1() {
  // this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to fohl street storage`;
  this.id = 1;
}
  public fetchDetailsLocation2() {
    // this.directionPoints = directionLocation2;
    this.directionHeading = `Directions to Louisville Self Storage`;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    // this.directionPoints = directionLocation3;
    this.directionHeading = `Directions to Lincoln Street Storage`;
    this.id = 3;
  }
}
