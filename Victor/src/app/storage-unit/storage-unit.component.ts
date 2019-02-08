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
    if (this.router.url.includes('/location/rocky-creek')) {
        this.id = 0;
    } else if (this.router.url.includes('/location/agricola')) {
      this.id = 1;
    } else if (this.router.url.includes('/location/barton')) {
      this.id = 2;
    }
  }
}
