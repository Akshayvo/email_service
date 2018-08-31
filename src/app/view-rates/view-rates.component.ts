import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATE';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle('Storage Unit Prices Near Catskill , NY | 12414 - Catskill Self Storage');
  }

}
