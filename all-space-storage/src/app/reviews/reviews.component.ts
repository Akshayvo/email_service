import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { review2, review3, review1, review4, review5 } from '../data/location';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  name: any;
  currentActiveTab: any = 'Reviews';
  reviews: any;
  id: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie-arlington')) {
       this.fetchDetailsLocation1();
     } else if (this.router.url.includes('/poughkeepsie-hyde-park')) {
       this.fetchDetailsLocation2();
     } else  if (this.router.url.includes('/location/highland'))  {
       this.fetchDetailsLocation3();
    } else  if (this.router.url.includes('lake-katrine'))  {
      this.fetchDetailsLocation4();
     } else {
       this.fetchDetailsLocation5();
     }
  }

  public fetchDetailsLocation1() {
    this.reviews = review1;
    this.id = 1;
  }
  public fetchDetailsLocation2() {
    this.reviews = review2;
    this.id = 2;
  }

  public fetchDetailsLocation3() {
    this.reviews = review3;
    this.id = 3;
  }

  public fetchDetailsLocation4() {
    this.reviews = review4;
    this.id = 4;
  }

  public fetchDetailsLocation5() {
    this.reviews = review5;
    this.id = 5;
  }
}
