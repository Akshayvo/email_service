import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { CanonicalService } from '../services/canonical.service';

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
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Check out our affordable self storage unit rates and start the reservation process right
        here! Have a question? Call (719) 966-2240! `
      });
      this.titleService.setTitle('View Rates | Banana Belt Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

}
