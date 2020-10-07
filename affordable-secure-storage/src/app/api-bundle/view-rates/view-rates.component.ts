import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingStorageUnit1, headingStorageUnit2, headingStorageUnit3,
  headingStorageUnit4, headingStorageUnit5 } from '../../data/location';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('affordable-secure-storage-floral-city')) {
      this.id = 1;
      this.heading = headingStorageUnit1;
    } else if (this.router.url.includes('affordable-secure-storage-west-hernando')) {
        this.id = 2;
        this.heading = headingStorageUnit2;
      } else if (this.router.url.includes('affordable-secure-storage-labelle')) {
        this.id = 3;
        this.heading = headingStorageUnit3;
      } else if (this.router.url.includes('affordable-secure-storage-backyard')) {
          this.id = 4;
          this.heading = headingStorageUnit4;
      } else if (this.router.url.includes('affordable-secure-storage-hernando')) {
        this.id = 5;
        this.heading = headingStorageUnit5;
    }
  }
}
