import { Component, OnInit } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  currentActive: any = 'STORAGE TIPS';
  breadcrumbActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Self Storage Tips | Your Self Storage');
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
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
