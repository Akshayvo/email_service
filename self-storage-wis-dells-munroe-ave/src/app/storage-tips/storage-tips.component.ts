import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { MetaService } from '../services/link.service';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { storageTipsHeading } from '../data/heading';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  storageTip: any;
  storageTipAccordion: any;
  storageTipsTitle: string;
  storageTipsContent: string;
  storageTipsHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
  ) {
    this.fetchMetaData();
    this.fetchStorageTipsHeading();
    this.meta.addTag({
      name: 'description',
      content: `${this.storageTipsContent}`
    });
    this.titleService.setTitle(`${this.storageTipsTitle}`);
    this.metaService.createCanonicalURL();
  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
    window.scrollTo(0, 0);
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }

  public fetchStorageTipsHeading() {
    this.storageTipsHeading = storageTipsHeading;
  }

  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }

  public fetchMetaData() {
    this.storageTipsTitle = storageTipsTitle;
    this.storageTipsContent = storageTipsContent;
  }

}
