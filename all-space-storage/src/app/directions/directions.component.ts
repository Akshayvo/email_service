import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2, directionLocation3,
  // directionLocation4,
 } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
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
  constructor(private router: Router,
    private canonical: CanonicalService
    ) { 
      this.canonical.create();
    }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
       this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/highland'))  {
       this.fetchDetailsLocation3();
    }  else  if (this.router.url.includes('/location/lake-katrine'))  {
      this.fetchDetailsLocation4();
    } else  if (this.router.url.includes('/location/pawling'))  {
      this.fetchDetailsLocation5();
    }
 }

 public fetchDetailsLocation1() {
  this.directionPoints = directionLocation1;
  this.directionHeading = ``;
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
    this.directionHeading = ``;
    this.id = 4;
  }
  public fetchDetailsLocation5() {
    // this.directionPoints = directionLocation4;
    this.directionHeading = ``;
    this.id = 5;
  }
}