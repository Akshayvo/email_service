import { Component, OnInit } from '@angular/core';
import { reviewVillage } from "../data/location";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: any;

  constructor() { }

  ngOnInit() {
    this.fetchreviews();
  }


  /**
   * fetchreviews
   */
  public fetchreviews() {
    this.reviews = reviewVillage;
  }
}
