import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, altText} from '../../data/view';
import { viewRates } from '../../data/blurb';
import { viewRatesHeading } from '../../data/heading';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  openComponent = false;
  viewRate: any;
  viewRates: any;
  viewRatesHeading: string;
  alt: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.fetchMetaData();
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `${this.viewRatesPageContent}`
      });
      this.titleService.setTitle(`${this.viewRatesPageTitle}`);
  }

  ngOnInit() {
    this.fetchViewRate();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
    this.alt = altText;
    this.viewRatesHeading = viewRatesHeading;
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

  public fetchViewRates() {
    this.viewRates = viewRates;
  }
}
