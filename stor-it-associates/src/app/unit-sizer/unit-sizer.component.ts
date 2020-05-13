import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { unitSizerHeading } from '../data/heading';
import { unitSizerPageTitle, unitSizerPageContent } from '../data/title';
@Component({
  selector: 'app-unit-sizer',
  templateUrl: './unit-sizer.component.html',
  styleUrls: ['./unit-sizer.component.scss']
})
export class UnitSizerComponent implements OnInit {
  unitSizerHeading: string;
  unitSizerPageTitle: string;
  unitSizerPageContent: string;


  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.unitSizerPageContent}`
    });
    this.titleService.setTitle(`${this.unitSizerPageTitle}`);
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
