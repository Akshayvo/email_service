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

  currentActive: any = 'VIEW RATES';
  dataViewRates: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Take a moment to review our extremely affordable rates, and unit or parking availability, then place your reservation quickly,
                 and easily with our form.`
    });
    this.titleService.setTitle('View Rates | Sto and Go');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viewRates();
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
  }
}
