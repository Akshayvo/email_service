import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates, militaryData } from '../../data/view-rates';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  dataViewRates: any;
  militaryData: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Check our availability and see how affordable our storage unit rates are by clicking here!`
    });
    this.titleService.setTitle('View Unit Rates | The Store House');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viewRates();
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
    this.militaryData = militaryData;
  }
}