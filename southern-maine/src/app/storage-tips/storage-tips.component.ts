import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { storageTipsHeading } from '../data/heading';
import { CanonicalService } from '../services/canonical.service';

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

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.fetchMetaData();
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
