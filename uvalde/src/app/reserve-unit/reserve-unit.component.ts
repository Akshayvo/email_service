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
        this.heading = 'Reserve Your Unit at Our 260 North Grove St Location';
    } else if (this.router.url.includes('201-n-grove')) {
      this.id = 1;
      this.heading = 'Reserve Your Unit at Our 201 North Grove St Location';
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.id = 2;
      this.heading = 'Reserve Your Unit at Our 246 West South Lane Location';
    } else if (this.router.url.includes('/817-s-getty')) {
      this.id = 3;
      this.heading = 'Reserve Your Unit at Our 817 South Getty Street Location';
    } else if (this.router.url.includes('/430-s-hwy-83')) {
      this.id = 4;
      this.heading = 'Reserve Your Unit at Our 430 South Highway 83 Location';
    } else if (this.router.url.includes('/500-east-garden-street')) {
      this.id = 5;
      this.heading = 'Reserve Your Unit at Our 500 East Garden Street Location';
    }
  }
}
