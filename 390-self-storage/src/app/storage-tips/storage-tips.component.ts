import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { gettingStarted } from '../data/home';
import { Router } from '@angular/router';
import { CanonicalService } from "../services/canonical.service";

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  gettingStarted: any;

  constructor(
    private titleService: Title,
    private router: Router,
    private canonical: CanonicalService,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Storage tips by - 390 Self Storage. Use smaller boxes for books and heavy items,
      use larger boxes for lighter items, visit the URL for more useful information. `
    });
    this.canonical.create();
    this.titleService.setTitle('Self Storage Tips For Bedroom And Clothing, Rochester NY, Gates');
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    window.scrollTo(0, 0);
    this.fetchGetSarted();
  }


  /**
   * fetchstoragePoints
   */
  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchstorageTips() {
    this.storageTips = storageTips;
  }

  public fetchGetSarted() {
    this.gettingStarted = gettingStarted;

  }
}
