import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation2,  headingLocation3, headingLocation4,
  headingLocation5, } from '../data/location';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  id: number;
  tabs: any;
  heading: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
        this.id = 1;
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/highland')) {
      this.id = 2;
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/lake-katrine')) {
      this.id = 3;
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes('/location/pawling')) {
      this.id = 4;
      this.fetchDetailsLocation4();
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
      this.id = 5;
      this.fetchDetailsLocation5();
    }
  }
  public fetchDetailsLocation1() {
    this.heading = headingLocation1;

  }

  public fetchDetailsLocation2() {
    this.heading = headingLocation2;
  }

  public fetchDetailsLocation3() {
    this.heading = headingLocation3;
  }

  public fetchDetailsLocation4() {
    this.heading = headingLocation4;
  }

  public fetchDetailsLocation5() {
    this.heading = headingLocation5;
  }
}
