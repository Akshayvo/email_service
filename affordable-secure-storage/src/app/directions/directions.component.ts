import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1 } from '../data/location';
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
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
       this.fetchDetailsLocation1();
     } else {
      if (this.router.url.includes('/location/affordable-secure-storage-west-hernando')) {
        this.fetchDetailsLocation2();
      }
     }
 }

 public fetchDetailsLocation1() {
  this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to Affordable Secure Storage - Floral City`;
  this.id = 1;
}


public fetchDetailsLocation2() {
  this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to Affordable Secure Storage - West Hernando`;
  this.id = 2;
}

}
