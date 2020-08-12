import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation3, headingLocation2 } from '../../data/location';

@Component({
  selector: 'app-storage-unit-iframe',
  templateUrl: './storage-unit-iframe.component.html',
  styleUrls: ['./storage-unit-iframe.component.scss']
})
export class StorageUnitIframeComponent implements OnInit {
  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/hunterdon-storage-ringoes')) {
      this.id = 1;
      this.heading = headingLocation1;
    } else  if (this.router.url.includes('/location/hunterdon-storage-1'))  {
      this.id = 2;
      this.heading = headingLocation2;
    } else  if (this.router.url.includes('/location/hunterdon-storage-2'))  {
      this.id = 3;
      this.heading = headingLocation3;
    }
  }
}
