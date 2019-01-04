import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionAgricola, directionBarton, directionRockyCreek } from '../data/location';
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
    if (this.router.url.includes('/location/agricola')) {
        this.fetchDirectionAgricola();
    } else if (this.router.url.includes('/location/barton')) {
      this.fetchDirectionBarton();
    } else {
      this.fetchDirectionRockyCreek();
    }
 }

 public fetchDirectionRockyCreek() {
  this.name = 'Rocky Creek';
  this.directionPoints = directionRockyCreek;
  this.directionHeading = `Directions to Southern Storage at Rocky Creek`;
  this.id = 0;
}
  public fetchDirectionAgricola() {
    this.name = 'Agricola';
    this.directionPoints = directionAgricola;
    this.directionHeading = `Directions to Southern Storage at Agricola`;
    this.id = 1;
  }

  public fetchDirectionBarton() {
    this.name = 'Barton';
    this.directionPoints = directionBarton;
    this.directionHeading = `Directions to Southern Storage at Barton`;
    this.id = 2;
  }
}
