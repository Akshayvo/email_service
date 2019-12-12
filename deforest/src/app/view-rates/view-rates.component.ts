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
      content: `Review our current rates and availability, then reserve your unit in minutes
                with our easy online reservation form!`
    });
    this.titleService.setTitle('View Rates  | Deforest Self Storage');
  }

  ngOnInit() {
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRates() {
    this.viewrates = viewrates;
  }

}
