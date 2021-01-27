import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  id: number;
  tabs: any;
  heading: string;
  currentActiveTab: any = 'Reserve Unit';

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('260-n-grove')) {
        this.id = 0;
        this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #1 - 260 N GROVE';
    } else if (this.router.url.includes('201-n-grove')) {
      this.id = 1;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #2 - 201 N GROVE';
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.id = 2;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE';
    } else if (this.router.url.includes('/817-s-getty')) {
      this.id = 3;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #4 - 817 S. GETTY';
    } else if (this.router.url.includes('/430-s-hwy-83')) {
      this.id = 4;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #5 - 430 S HWY 83';
    } else if (this.router.url.includes('/500-east-garden-street')) {
      this.id = 5;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #6 - 500 E. GARDEN';
    } else if (this.router.url.includes('/2633-east-main-street')) {
      this.id = 6;
      this.heading = 'Reserve Your Unit at Our AFFORDABLE STORAGE #7 - 2633 E. MAIN ST';
    } else if (this.router.url.includes('/244-n-grove')) {
      this.id = 7;
      this.heading = 'Reserve Your Unit at Our Affordable Storage #8 - 244 N. Grove';
    }
  }
}
