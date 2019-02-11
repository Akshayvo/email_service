import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { direction1, direction2 } from '../data/location';
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
    if (this.router.url.includes('/location/mall')) {
        this.fetchDirectionLocation1();
    } else if (this.router.url.includes('/location/village')) {
      this.fetchDirectionLocation2();
    }
 }

 public fetchDirectionLocation1() {
  this.name = 'Mall';
  this.directionPoints = direction1;
  this.directionHeading = `Directions to Victor Self Storage - Mall`;
  this.id = 0;
}
  public fetchDirectionLocation2() {
    this.name = 'Village';
    this.directionPoints = direction2;
    this.directionHeading = `Directions to Victor Self Storage - Village`;
    this.id = 1;
  }
}
