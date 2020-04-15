import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { reserveUnitHeading } from '../../data/heading';
import { reservePageTitle, reservePageContent } from '../../data/title';
import { reserve } from '../../data/blurb'; 
import { UaParserService } from '../../services/ua-parser.service';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  reservePageContent: string;
  reservePageTitle: string;
  reserveUnitHeading: string;
  reserve: any;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private titleService: Title,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,

    private meta: Meta,
  ) {
    this.fetchMetaData();
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
