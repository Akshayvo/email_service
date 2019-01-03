import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, slideShow } from '../data/view';
import { viewRates } from '../data/blurb';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'view-rates-meta-name',
      content: `view-rates-meta-content`
    });
    this.titleService.setTitle('view-rates-PageTitle');
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
