import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { MetaService } from '../services/link.service';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { storageTipsHeading } from '../data/heading';
import { UaParserService } from '../services/ua-parser.service';

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
  imageBaseUrl: any;
  imagetype: any;
  
  constructor(    
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.storageTipsContent}`
    });
    this.titleService.setTitle(`${this.storageTipsTitle}`);
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
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
