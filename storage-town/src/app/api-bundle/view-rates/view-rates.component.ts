import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1  } from '../../data/location';
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
    if (this.router.url.includes('chester')) {
      this.id = 1;
      this.heading = headingLocation1;
    }
  }
}
