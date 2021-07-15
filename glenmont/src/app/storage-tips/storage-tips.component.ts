import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTipAccordion } from '../data/storage';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

 storagePoints: any;
  storageTipAccordion: any;
  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(WINDOW) private window: Window,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Make your stay with Selkirk Self Storage a breeze and use these handy self storage tips!`
    });
    this.titleService.setTitle('Storage Tips | Selkirk Self Storage');
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
    this.storageTipAccordion = storageTipAccordion;
  }


}
