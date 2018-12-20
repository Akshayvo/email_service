import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  currentActive: any = 'Storage Tips';
  breadcrumbActive: any = 'Storage Tips';

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Self Storage Tips | Victor Self Storage');
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    this.window.scrollTo(0, 0);
  }


  /**
   * fetchstoragePoints
   */
  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
  }

  public fetchstorageTips() {
    this.storageTips = storageTips;
  }
}
