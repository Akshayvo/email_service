import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2 } from '../data/location';
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
    } else {
      this.fetchdirectionLocation2();
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
}
