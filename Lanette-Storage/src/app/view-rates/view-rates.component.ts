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
  viewRatesData: any;
  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `If you're looking for the cheap, well maintained self storage units
                  then you've come to the right place! View our rates here!`
      });
      this.titleService.setTitle('Affordable Self Storage in Lanett, AL | Lanett Storage');
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRatesData();
  }

  public fetchViewRatesData() {
    this.viewRatesData = viewRates;
  }

}
