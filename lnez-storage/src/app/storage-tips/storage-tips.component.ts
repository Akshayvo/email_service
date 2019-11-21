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
      content: `Take a lesson from us about caring for your self storage unit! Follow these tips to keep your belongings safe and dry!`
    });
    this.titleService.setTitle('Storage Tips | Inez Storage');
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
