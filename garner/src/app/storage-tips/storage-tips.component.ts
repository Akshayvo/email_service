import { Component, OnInit, Inject } from '@angular/core';
import { storagePoints } from '../data/storage-tips';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { storageTipsTitle, storageTipsContent } from "../data/title";
import { ogStorageTipsPage, twitterStorageTipsPage } from "../data/script";
import { MetaService } from '../services/canonical.service';


@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})


export class StorageTipsComponent implements OnInit {
  storagePoints: any;
  storageTips: any;
  og: any;
  twitter: any;
  storageTipsTitle: string;
  storageTipsContent: string;
  currentActive: any = 'Storage Tips';
  breadcrumbActive: any = 'Storage Tips';

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private metaService: MetaService,
    private titleService: Title,
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

    this.meta.addTag({
      name: 'description',
      content: `Follow these easy self storage tips to make your stay with Garner's U Store a breeze! Have questions? Call (478) 272-3724, today!`
    });
    this.titleService.setTitle(`Storage Tips  | Garner's U Store`);
  }

  ngOnInit() {
    this.fetchstoragePoints();
    this.metaService.createCanonicalURL();
    // this.fetchstorageTips();
    window.scrollTo(0, 0);
  }

  public fetchstoragePoints() {
    this.storagePoints = storagePoints;
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

  // public fetchstorageTips() {
  //   this.storageTips = storageTips;
  // }
}
