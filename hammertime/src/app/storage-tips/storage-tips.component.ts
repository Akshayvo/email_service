import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `It's our job to know self storage. Make your stay with Hammertime Self Storage
                easier with this handy list of storage tips!`
    });
    this.titleService.setTitle('Storage Tips | Hammertime Self Storage');
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    window.scrollTo(0, 0);

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
