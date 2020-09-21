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
    if (this.router.url.includes('/location/730-kenton-station')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/751-kenton-station')) {
       this.fetchDetailsLocation2();
     } 
 }

 public fetchDetailsLocation1() {
  // this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to 730 Kenton Station Location`;
  this.id = 1;
}
  public fetchDetailsLocation2() {
    // this.directionPoints = directionLocation2;
    this.directionHeading = `Directions to 751 Kenton Station Location`;
    this.id = 2;
  }

  
}
