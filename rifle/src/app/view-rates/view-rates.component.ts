import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate} from '../data/view';
import { viewRates } from '../data/blurb';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  viewRates: any;
  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta, 
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Check out our extremely affordable self storage unit rates, then make your reservation with our online form!`
    });
    this.titleService.setTitle('View Rates | Rifle Self Storage');
  }

  ngOnInit() {
    this.fetchViewRate();
    // this.fetchSlideShow();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
  }
  // public fetchSlideShow() {
  //   this.slideShow = slideShow;
  // }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
}
