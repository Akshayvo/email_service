import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingStorageUnit1, headingStorageUnit2 } from '../../data/location';

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
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
      this.id = 1;
      this.heading = headingStorageUnit1;
    } else {
      if (this.router.url.includes('/location/affordable-secure-storage-west-hernando')) {
        this.id = 2;
        this.heading = headingStorageUnit2;
      }
    }
  }
}
