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
    if (this.router.url.includes('hunterdon-storage-ringoes')) {
        this.id = 0;
        this.heading = 'Reserve Your Unit at our Hunterdon Storage at Ringoes Location';
    } else if (this.router.url.includes('hunterdon-storage-1')) {
      this.id = 1;
      this.heading = 'Reserve Your Unit at our Hunterdon Storage I Location';
    } else if (this.router.url.includes('hunterdon-storage-2')) {
      this.id = 2;
      this.heading = 'Reserve Your Unit at our Hunterdon Storage II Location';
    }
  }
}
