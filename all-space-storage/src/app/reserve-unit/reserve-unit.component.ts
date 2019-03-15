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
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
      this.id = 1;
    } else if (this.router.url.includes('/location/highland')) {
      this.id = 2;
    } else  if (this.router.url.includes('/location/lake-katrine'))  {
      this.id = 3;
    } else if (this.router.url.includes('/location/pawling')) {
      this.id = 4;
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
      this.id = 5;
    }
  }
}
