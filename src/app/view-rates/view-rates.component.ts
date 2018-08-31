import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATE';
  constructor() { }

  ngOnInit() {
  }

}
