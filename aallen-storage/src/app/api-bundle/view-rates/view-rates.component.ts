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
      content: `Take a moment to view our affordable self storage unit rates, then make your reservation by filling out our form or calling our office today!`
    });
    this.titleService.setTitle('View Rates | Aallen Self Storage');

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
