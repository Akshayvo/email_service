import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation3 } from '../data/location';

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
    if (this.router.url.includes('/location/dallas-secure-storage')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
      this.id = 3;
      this.heading = headingLocation3;
    }
  }
}
