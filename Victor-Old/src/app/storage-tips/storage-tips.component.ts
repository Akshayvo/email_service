import { Component, OnInit } from '@angular/core';
import { storagePoints, storageTips } from "../data/storage-tips";

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  
  storagePoints: any;
  storageTips: any;

  constructor() { }

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
