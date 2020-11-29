import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { MetaService } from '../services/link.service';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { storageTipsHeading } from '../data/heading';
import { CanonicalService } from '../services/canonical.service';
import { ogStorageTipsPage, twitterStorageTipsPage } from '../data/script';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  storageTip: any;
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
    private canonical: CanonicalService

  ) {
    this.fetchMetaData();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });
    this.meta.addTag({
      name: 'description',
      content: `${this.storageTipsContent}`
    });
    this.titleService.setTitle(`${this.storageTipsTitle}`);
    this.canonical.create();

  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
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

  public fetchStorageTipsHeading() {
    this.storageTipsHeading = storageTipsHeading;
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }
  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }


}
