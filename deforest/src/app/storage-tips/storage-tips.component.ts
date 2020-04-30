import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { storageTipsHeading } from '../data/heading';


@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  storageTipsTitle: string;
  storageTipsContent: string;
  storageTipsHeading: string;


  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.storageTipsContent}`
    });
    this.titleService.setTitle(`${this.storageTipsTitle}`);
  }

  ngOnInit() {
    this.fetchstoragePoints();
    window.scrollTo(0, 0);
    this.fetchstorageTips();
    this.fetchStorageTipsHeading();
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

  public fetchStorageTipsHeading() {
    this.storageTipsHeading = storageTipsHeading;
  }

  public fetchMetaData() {
    this.storageTipsTitle = storageTipsTitle;
    this.storageTipsContent = storageTipsContent;
  }

}
