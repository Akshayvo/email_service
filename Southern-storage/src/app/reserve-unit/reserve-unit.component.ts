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
  currentActiveTab: any = 'Reserve Unit';

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/rocky-creek')) {
        this.id = 0;
    } else if (this.router.url.includes('/location/agricola')) {
      this.id = 1;
    } else if (this.router.url.includes('/location/barton')) {
      this.id = 2;
    }
    else if (this.router.url.includes('/location/wade')) {
      this.id = 3;
    }
  }
}
