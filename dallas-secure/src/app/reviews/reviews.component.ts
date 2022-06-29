import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  id: number;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }
  public isSomePage() {
    if (this.router.url.includes('/dallas-secure-storage/reviews')) {
      this.id = 1;
    } else  if (this.router.url.includes('/location-2/reviews'))  {
      this.id = 3;
    }
  }
}
