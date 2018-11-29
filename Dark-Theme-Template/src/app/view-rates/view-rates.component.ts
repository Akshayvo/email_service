import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate } from '../data/view';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate : any;
  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `View our wide selection of affordable self storage units, from closet sized 4'x8' units to our oversized 24'x30' garage units.`
    });
    this.titleService.setTitle('Storage Units Near Scotia, NY, 12302 | View Rates');
  }

  ngOnInit() {
    this.fetchViewRate();
  }
  
  public fetchViewRate() {
    this.viewRate = viewRate;
  }
}
