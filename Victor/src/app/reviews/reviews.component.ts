import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchreviews();
  }

  public fetchreviews() {
    this.reviews = reviewVillage;
  }
}
