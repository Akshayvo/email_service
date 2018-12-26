import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our units range from closet sized 5'x5' units to 10'x20' multi-bedroom home sized units.
      We strive to provide the highest level of service at the best prices! `
    });
    this.titleService.setTitle('Affordable Self Storage Near Catskill, NY, 12414 | Catskill Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
