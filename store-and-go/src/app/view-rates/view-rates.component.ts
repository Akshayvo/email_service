import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { MetaService } from '../services/link.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  viewRates: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private MetaService: MetaService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Take a moment to review our extremely affordable rates, and start your reservation today! `
    });
    this.titleService.setTitle('View Rates | Stor N Lok Self Storage');
    this.MetaService.createCanonicalURL();

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

}
