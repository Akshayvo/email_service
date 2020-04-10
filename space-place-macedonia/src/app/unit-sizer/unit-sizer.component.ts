import { Component, OnInit } from '@angular/core';
import { unitSizer } from '../data/unitSizer';
import { Title, Meta } from '@angular/platform-browser';
import { unitSizers } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service';
import { unitSizerHeading } from '../data/heading';
import { unitSizerPageContent, unitSizerPageTitle } from '../data/title';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  unitsizer: any;
  selectedUnit: any;
  previous: number;
  current: number;
  next: number;
  unitSizers: any;
  unitSizerHeading: any;
  unitSizerPageTitle: string;
  unitSizerPageContent: string;
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,
    ) {
      this.canonical.create();
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
    this.current = 0;
    this.previous = 2;
    this.next = this.current + 1;
    this.fetchUnitSizer();
    this.fetchUnitSizerHeading();
    this.fetchUnitsizers();
    window.scrollTo(0, 0);
  }

  public fetchUnitSizerHeading() {
    this.unitSizerHeading = unitSizerHeading;
  }
  /**
   * fetchUnitSizer
   */
  public fetchUnitSizer() {
    this.unitsizer = unitSizer;
  }

  public fetchMetaData() {
    this.unitSizerPageContent = unitSizerPageContent;
    this.unitSizerPageTitle = unitSizerPageTitle;
  }

  public fetchUnitsizers() {
    this.unitSizers = unitSizers;
  }

  public moveLeft() {
    this.next = this.current;
    this.current = this.previous;
    if ( this.previous === 0 ) {
      this.previous = 2;
    } else {
      this.previous = this.previous - 1;
    }
  }

  public moveRight() {
    this.previous = this.current;
    this.current = this.next;
    if ( this.next === 2 ) {
      this.next = 0;
    } else {
    this.next = this.next + 1;
    }
  }

  public activeUnit(unitId: number) {
    this.current = unitId;
    if ( this.current === 0 ) {
      this.previous = 2;
      this.next = this.current + 1;
    } else if ( this.current === 2 ) {
      this.next = 0;
      this.previous = this.current - 1;
    } else {
      this.previous = this.current - 1;
      this.next = this.current + 1;
    }

  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }
}
