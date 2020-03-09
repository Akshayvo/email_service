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
 name: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/260-n-grove')) {
        this.id = 0;
        this.name = 'Reserve Your Unit at Our 260 N Grove Location';
    } else if (this.router.url.includes('/201-n-grove')) {
      this.id = 1;
      this.name = 'Reserve Your Unit at Our 201 N Grove Location';
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.id = 2;
      this.name = 'Reserve Your Unit at Our 246 W. South Lane Location';
    }  else if (this.router.url.includes('/817-s-getty')) {
      this.id = 3;
      this.name = 'Reserve Your Unit at Our 817 S. Getty Location';
    }  else if (this.router.url.includes('/430-s-hwy-83')) {
      this.id = 4;
      this.name = 'Reserve Your Unit at Our 430 S HWY 83 Location';
    }  else if (this.router.url.includes('/500-east-garden-street')) {
      this.id = 5;
      this.name = 'Reserve Your Unit at Our 500 E. Garden Location';
    } else if (this.router.url.includes('/2633-east-main-street')) {
      this.id = 6;
      this.name = 'Reserve Your Unit at Our 2633 E. Main St Location';
    }
  }
}
