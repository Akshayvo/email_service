import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headingStorageUnitLocation1,
  headingStorageUnitLocation2} from '../data/location';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  id: number;
  tabs: any;
  heading: string;

  constructor(private router: Router,
    private canonical: CanonicalService
    ) {
    this.canonical.create();

   }

  ngOnInit() {
    this.isSomePage();
    
  }

  public isSomePage() {
    if (this.router.url.includes('/location/line-drive')) {
      this.id = 1;
      this.heading = headingStorageUnitLocation1;
    } else if (this.router.url.includes('/location/holly-avenue')) {
      this.id = 2;
      this.heading = headingStorageUnitLocation2;
    }
  }
}
