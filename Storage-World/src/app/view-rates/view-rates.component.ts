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
  viewRatesData: any;
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `View our unit rates and start your reservation process right here!
                Have questions? Call our on-premises manager for help during business hours!`
    });
    this.titleService.setTitle('View Rates | Storage World');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRatesData();
  }

  public fetchViewRatesData() {
    this.viewRatesData = viewRates;
  }

}
