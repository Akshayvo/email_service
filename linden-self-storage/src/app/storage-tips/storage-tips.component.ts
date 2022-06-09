import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { MetaService } from "../services/link.service";
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
    private metaService: MetaService,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Use our experience and these tips to make your stay with us a breeze! Still need help? Call our office, and our friendly managers are happy to help!`
    });
    this.titleService.setTitle('Storage Tips | Linden Self Storage');
  }

  ngOnInit() {
    this.metaService.createCanonicalURL();
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
