import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation3 } from '../data/location';
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
    if (this.router.url.includes('/location/movin-on-storage')) {
       this.fetchDetailsLocation1();
     } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
       this.fetchDetailsLocation3();
     }
 }

 public fetchDetailsLocation1() {
  this.directionPoints = directionLocation1;
  this.directionHeading = `Directions to Movin' On Storage Center`;
  this.id = 1;
}

  public fetchDetailsLocation3() {
    this.directionPoints = directionLocation3;
    this.directionHeading = `Directions to Natrona Heights Self Storage`;
    this.id = 3;
  }
}
