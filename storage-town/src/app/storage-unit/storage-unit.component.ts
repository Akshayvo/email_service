import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4 } from '../data/location';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/andrews')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else if (this.router.url.includes('/location/chester')) {
      this.id = 2;
      this.heading = headingLocation2;
    } else if (this.router.url.includes('/location/montgomery-walden')) {
      this.id = 3;
      this.heading = headingLocation3;
    } else if (this.router.url.includes('/location/middletown-wallKill')) {
      this.id = 4;
      this.heading = headingLocation4;
    }
  }
}
