import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';
import { storageTips } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service';
import { storageTipsHeading } from '../data/heading';
import { storageTipsTitle, storageTipsContent } from '../data/title';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-storage-tips',
  templateUrl: './storage-tips.component.html',
  styleUrls: ['./storage-tips.component.scss']
})
export class StorageTipsComponent implements OnInit {

  storageTip: any;
  storageTipAccordion: any;
  storageTips: any;
  storageTipsHeading: string;
  storageTipsContent: string;
  storageTipsTitle: string;
  imageBaseUrl: any;
  imagetype: any;

  constructor(@Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,

    ) {
      this.canonical.create();
      this.fetchStorageTipsHeading();
      this.fetchMetaData();

      this.meta.addTag({
        name: 'description',
        content: `${this.storageTipsContent}`
      });
      this.titleService.setTitle(`${this.storageTipsTitle}`);
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
      this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
    this.fetchStorageTips();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.storageTipsTitle = storageTipsTitle;
    this.storageTipsContent = storageTipsContent;
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }

  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }

  public fetchStorageTips() {
    this.storageTips = storageTips;
  }

  public fetchStorageTipsHeading() {
    this.storageTipsHeading = storageTipsHeading;
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }
}
