import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate } from '../data/view';
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

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Check out our affordable self storage unit rates, and make your reservation here
        with our handy online tenant portal!`
      });
      this.titleService.setTitle('Storage Units In Springdale, AR | Hwy 412 Mini Storage');
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
