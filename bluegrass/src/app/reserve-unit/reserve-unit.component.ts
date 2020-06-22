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
    if (this.router.url.includes('filitreau-lane')) {
        this.id = 0;
        this.heading = 'Reserve Your Unit at Our Filiatreau Lane Location';
    } else if (this.router.url.includes('springfield-road')) {
      this.id = 1;
      this.heading = 'Reserve Your Unit at Our Springfield Road Location';
    }
  }
}
