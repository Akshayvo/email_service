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
      content: `Use our handy storage tips page to make your self storage experience with Affordable Secure Storage a convenient one!`
    });
    this.titleService.setTitle('Storage Tips | Affordable Secure Storage');
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
