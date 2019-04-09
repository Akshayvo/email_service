import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';

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
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you ready to get organized today? Take a moment and view our rates to find the perfect unit for your needs! `
    });
    this.titleService.setTitle('View Rates | Stor More Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

}
