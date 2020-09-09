import { Component, OnInit } from '@angular/core';
import { unitSizerHeading } from '../data/heading';
import { unitSizerPageTitle, unitSizerPageContent } from '../data/title';
import { Title, Meta } from '@angular/platform-browser';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {

  unitSizerHeading: string;
  unitSizerPageTitle: string;
  unitSizerPageContent: string;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.unitSizerPageContent}`
    });
    this.titleService.setTitle(`${this.unitSizerPageTitle}`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchContactHeading();
  }

  public fetchMetaData() {
    this.unitSizerPageTitle = unitSizerPageTitle;
    this.unitSizerPageContent = unitSizerPageContent;
  }

  public fetchContactHeading() {
    this.unitSizerHeading = unitSizerHeading;
  }

}
