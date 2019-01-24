import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reviewLocation1 } from '../data/location';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  name: any;
  currentActiveTab: any = 'Reviews';
  reviews: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
      this.name = 'Location 1';
      this.reviews = reviewLocation1;
    } else {
      this.name = 'Location 2';
      this.reviews = reviewLocation1;
    }
  }
}
