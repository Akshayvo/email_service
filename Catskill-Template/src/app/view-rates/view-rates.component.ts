import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRatesData } from '../data/view-rates';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRatesData: any;
  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'view-rates-name',
      content: `view-rates-content`
    });
    this.titleService.setTitle('View-Rates-PageTitle');
  }

  ngOnInit() {
    this.fetchViewRatesData();
    window.scrollTo(0, 0);
  }

  public fetchViewRatesData() {
    this.viewRatesData = viewRatesData;
  }
}
