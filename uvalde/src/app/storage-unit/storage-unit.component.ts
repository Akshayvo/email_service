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
    if (this.router.url.includes('/260-n-grove')) {
        this.id = 0;
    } else if (this.router.url.includes('/201-n-grove')) {
      this.id = 1;
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.id = 2;
    }  else if (this.router.url.includes('/817-s-getty')) {
      this.id = 3;
    }  else if (this.router.url.includes('/430-s-hwy-83')) {
      this.id = 4;
    }  else if (this.router.url.includes('/500-east-garden-street')) {
      this.id = 5;
    }
  }
}
