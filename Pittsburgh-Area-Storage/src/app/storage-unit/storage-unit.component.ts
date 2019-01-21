import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  id: number;
  tabs: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/movin-on-storage')) {
        this.id = 1;
    } else if (this.router.url.includes('/location/shaler-self')) {
      this.id = 2;
    } else if (this.router.url.includes('/location/natrona-heights-self')) {
      this.id = 3;
    } else if (this.router.url.includes('/location/pawling')) {
      this.id = 4;
    }
  }
}
