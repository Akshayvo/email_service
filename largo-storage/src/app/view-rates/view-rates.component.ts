import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
import { UaParserService } from '../services/ua-parser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit  {

  viewRates: any;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    private router: Router,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Take a moment and review our affordable self storage unit rates,
      then make your reservation with our easy reservation form!`
    });
    this.titleService.setTitle('View Rates | State Storage Largo');
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }

  public fetchViewRates() {
    this.viewRates = viewrates;
  }
}
