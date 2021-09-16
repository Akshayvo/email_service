import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { directionLocation1, directionLocation2, directionLocation3,
  // directionLocation4,
 } from '../data/location';
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
<<<<<<< HEAD
    if (this.router.url.includes(`${environment.locationName}/greentown`)) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes(`${environment.locationName}/lake-ariel`)) {
       this.fetchDetailsLocation2();
    } else  if (this.router.url.includes(`${environment.locationName}/hawley`))  {
       this.fetchDetailsLocation3();
    }  else  if (this.router.url.includes(`${environment.locationName}/lakeville`))  {
      this.fetchDetailsLocation4();
    } 
=======
    if (this.router.url.includes(`${environment.locationName}/foley`)) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes(`${environment.locationName}/silverhill`)) {
       this.fetchDetailsLocation2();
    } else  if (this.router.url.includes(`${environment.locationName}/barnwell`))  {
       this.fetchDetailsLocation3();
    }  else  if (this.router.url.includes(`${environment.locationName}/belforest`))  {
      this.fetchDetailsLocation4();
    } else  if (this.router.url.includes(`${environment.locationName}/fairhope`))  {
      this.fetchDetailsLocation5();
    } else  if (this.router.url.includes(`${environment.locationName}/robertsdale`))  {
      this.fetchDetailsLocation6();
    }
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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

<<<<<<< HEAD
  
=======
  public fetchDetailsLocation5() {
    // this.directionPoints = directionLocation4;
    this.directionHeading = ``;
    this.id = 5;
  }

  public fetchDetailsLocation6() {
    // this.directionPoints = directionLocation4;
    this.directionHeading = ``;
    this.id = 6;
  }
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
}
