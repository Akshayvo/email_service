import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
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
    private meta: Meta,
    private titleService: Title,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Follow these easy self storage tips to make your stay with Garner's U Store a breeze! Have questions? Call (478) 272-3724, today!`
    });
    this.titleService.setTitle(`Storage Tips  | Garner's U Store`);
  }

  ngOnInit() {
    this.fetchstoragePoints();
    // this.fetchstorageTips();
    window.scrollTo(0, 0);
  }

  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
  }

  // public fetchstorageTips() {
  //   this.storageTips = storageTips;
  // }
}
