import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2, directionLocation3 } from '../data/location';
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
    if (this.router.url.includes('/location/location1')) {
        this.fetchdirectionLocation1();
    } else if (this.router.url.includes('/location/location2')) {
      this.fetchdirectionLocation2();
    } else {
      this.fetchdirectionLocation3();
    }
 }

  public fetchdirectionLocation1() {
    this.name = 'Location 1';
    this.directionPoints = directionLocation1;
  }

  public fetchdirectionLocation2() {
    this.name = 'Location 2';
    this.directionPoints = directionLocation2;
 }

 public fetchdirectionLocation3() {
  this.name = 'Location 3';
  this.directionPoints = directionLocation3;
}
}
