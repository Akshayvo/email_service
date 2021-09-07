import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2 } from '../data/location';
import { CanonicalService } from '../services/canonical.service';
import { environment } from '../../environments/environment';
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
    if (this.router.url.includes(`${environment.locationName}/quitman-mini`)) {
       this.fetchDetailsLocation1();
     } 
    //  else if (this.router.url.includes('/location/silverhill')) {
    //    this.fetchDetailsLocation2();
    // } else  if (this.router.url.includes('/location/barnwell'))  {
    //    this.fetchDetailsLocation3();
    // }  else  if (this.router.url.includes('/location/belforest'))  {
    //   this.fetchDetailsLocation4();
    // } else  if (this.router.url.includes('/location/fairhope'))  {
    //   this.fetchDetailsLocation5();
    // } else  if (this.router.url.includes('/location/robertsdale'))  {
    //   this.fetchDetailsLocation6();
    // }
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
}
