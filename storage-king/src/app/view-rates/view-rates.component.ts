import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates } from '../data/view-rates';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';
  viewrates: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out the competitive rates for our high quality self storage units,
                warehouse space, and office suites! Security Storage is the premiere storage facility in Cuero, Texas!`
    });
    this.titleService.setTitle('Storage Units in Cuero, Tx | View Rates');
  }

  ngOnInit() {
    this.fetchViewRates();
    this.window.scrollTo(0, 0);
  }

  public fetchViewRates() {
    this.viewrates = viewrates;
  }

}
