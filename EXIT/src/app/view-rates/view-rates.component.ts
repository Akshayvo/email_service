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
  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out our affordable self storage unit pricing right here! We offer the lowest in
      the Central Maine area!`
    });
    this.titleService.setTitle('View Unit Rates | Exit 120 Self Storage');
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
