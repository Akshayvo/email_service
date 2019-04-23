import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, } from '../data/view';
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
      content: `Take a moment and view the unit rates for our indoor heated self storage units.
      Have a question? Call Lorraine at (613) 932-0480.`
    });
    this.titleService.setTitle('View Rates | Cornwall Storage Box');
  }

  ngOnInit() {
    this.fetchViewRate();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
  }

  public fetchViewRates() {
    this.viewRates = viewRates;
  }
}
