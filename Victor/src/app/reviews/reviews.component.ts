import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reviewVillage } from '../data/location';

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
    if (this.router.url.includes('/location/village')) {
      this.name = 'village';
      this.reviews = reviewVillage;
    } else {
      this.name = 'mall';
      this.reviews = reviewVillage;
    }
  }
}
