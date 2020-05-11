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
    if (this.router.url.includes('/filitreau-lane')) {
        this.id = 0;
        this.name = 'Reserve Your Unit at Our Filitreau Lane Location';
    } else if (this.router.url.includes('/springfield-road')) {
      this.id = 1;
      this.name = 'Reserve Your Unit at Our Springfield Road Location';
    }
  }
}
