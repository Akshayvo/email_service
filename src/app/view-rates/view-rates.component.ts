import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/frameAddress';


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';
  urlAdd: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Affordable storage units and climate controlled units near Catskill,
       N.Y. Catskill Self Storage has your self storage and U-Haul rental needs covered!`
    });
    this.titleService.setTitle('Storage Unit Prices Near Catskill , NY | 12414 - Catskill Self Storage');
  }

  ngOnInit() {
    this.fetchUrl();

  }

  public fetchUrl() {
    this.urlAdd = viewRates;
  }
}
