import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates } from '../data/view-rates';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {
  viewRates: any;

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Find prices for Oviedo's only privately-owned self storage!
                Be sure to ask about our Community Champion's discount!`
    });
    this.titleService.setTitle('Storage Units Near Oviedo, FL | Lockwood Self Storage');
  }

  ngOnInit() {
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRates() {
    this.viewRates = viewrates;
  }

}
