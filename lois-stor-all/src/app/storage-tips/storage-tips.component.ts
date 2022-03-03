import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints, storageTips } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { MetaService } from "../services/link.service";
import { storageTipsTitle, storageTipsContent } from "../data/title";
import { storageTipsHeading } from "../data/heading";
import { CanonicalService } from "../services/canonical.service";
import { ogStorageTipsPage, twitterStorageTipsPage } from "../data/script";

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  currentActive: any = 'STORAGE TIPS';
  storageTipAccordion: any;
  storageTipsHeading: string;
  storageTipsTitle: string;
  storageTipsContent: string;
  og: any;
  twitter: any;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private canonical: CanonicalService,
    @Inject(WINDOW) private window: Window,
  ) {
    this.fetchMetaData();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach((element) => {
      this.meta.updateTag({
        property: element.property,
        content: element.content,
      });
    });

    this.twitter.forEach((element) => {
      this.meta.updateTag({
        name: element.name,
        content: element.content,
      });
    });

    this.meta.updateTag({
      name: 'description',
      content: `${this.storageTipsContent}`
    });
    this.titleService.setTitle(`${this.storageTipsTitle}`);
    this.canonical.create();
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.fetchstorageTips();
    // this.fetchStorageTipAccordion(); 
    this.fetchStorageTipsHeading();
    window.scrollTo(0, 0);

  }


  public fetchOg() {
    this.og = ogStorageTipsPage;
  }

  public fetchTwitter() {
    this.twitter = twitterStorageTipsPage;
  }

  public fetchMetaData() {
    this.storageTipsTitle = storageTipsTitle;
    this.storageTipsContent = storageTipsContent;
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

  // public fetchStorageTipAccordion() {
  //   this.storageTipAccordion = storageTipAccordion;
  // }
}
