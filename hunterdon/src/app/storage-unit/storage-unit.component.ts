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
 showParagraph = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/hunterdon-storage-ringoes')) {
        this.id = 0;
        this.name = '';
    } else if (this.router.url.includes('/hunterdon-storage-1')) {
      this.id = 1;
      this.name = '';
    } else if (this.router.url.includes('/hunterdon-storage-2')) {
      this.id = 2;
      this.name = '';
      this.showParagraph = true;
    }
  }
}
