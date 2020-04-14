import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { reserveUnitHeading } from '../../data/heading';
import { reservePageTitle, reservePageContent } from '../../data/title';
import { UaParserService } from '../../services/ua-parser.service';
import { CanonicalService } from '../../services/canonical.service';
import { reserve } from '../../data/blurb';

@Component({
  selector: 'app-reserve-unit-iframe-page',
  templateUrl: './reserve-unit-iframe-page.component.html',
  styleUrls: ['./reserve-unit-iframe-page.component.scss']
})
export class ReserveUnitIframePageComponent implements OnInit {

  reservePageContent: string;
  reservePageTitle: string;
  reserveUnitHeading: string;
  imageBaseUrl: any;
  imagetype: any;
  reserve: any;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,
  ) {
    this.fetchMetaData();
    this.canonical.create();
    
    this.fetchReserveUnitHeading();
    this.meta.addTag({
      name: 'description',
      content: `${this.reservePageContent}`
    });
    this.titleService.setTitle(`${this.reservePageTitle}`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchReserveUnitHeading();
    this.fetchBlurb();

  }

  public fetchMetaData() {
    this.reservePageTitle = reservePageTitle;
    this.reservePageContent = reservePageContent;
  }

  public fetchReserveUnitHeading() {
    this.reserveUnitHeading = reserveUnitHeading;
  }

  public fetchBlurb() {
    this.reserve = reserve;
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }

}
