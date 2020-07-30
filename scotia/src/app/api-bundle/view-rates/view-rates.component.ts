import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, slideShow } from '../../data/view';
import { viewRates } from '../../data/blurb';
import { UaParserService } from '../../services/ua-parser.service';

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
  imagetype: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `View our wide selection of affordable self storage units, from closet sized 4'x8'
      units to our oversized 24'x30' garage units.`
    });
    this.titleService.setTitle('Storage Units Near Scotia, NY, 12302 | View Rates');

    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchViewRate();
    this.fetchSlideShow();
    this.fetchViewRates();
    window.scrollTo(0, 0);
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
