import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, slideShow } from '../../data/view';
import { viewRates } from '../../data/blurb';
import { UaParserService } from '../../services/ua-parser.service';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';
import { viewRatesHeading } from '../../data/heading';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;
  imageBaseUrl: any;
  viewRatesPageTitle: string;
  viewRatesPageContent: string;
  imagetype: any;
  viewRatesHeading: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.viewRatesPageContent}`
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);

    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchViewRate();
    this.fetchSlideShow();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
    this.viewRatesHeading = viewRatesHeading;
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
  }
  public fetchSlideShow() {
    this.slideShow = slideShow;
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

}
