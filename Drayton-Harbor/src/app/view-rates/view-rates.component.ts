import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../data/view-rates';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';
  dataViewRates: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our stellar customer service and ultra-affordable pricing makes
                Drayton Harbor Mini Storage the greatest self storage value in Blaine!
                Check out our rates and reserve your unit today!`
    });
    this.titleService.setTitle('Storage Units In Blaine, WA, 98230 | Drayton Harbor Mini Storage');
  }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.viewRates();
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
  }
}
