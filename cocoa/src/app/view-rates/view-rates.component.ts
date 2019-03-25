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
      content: `View our regular and climate-controlled self storage unit rates and begin the reservation
      process right here! Call (321) 639-8576 for more information!`
    });
    this.titleService.setTitle('Self Storage Units in Cocoa, FL | All Space Self Storage');
  }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.viewRates();
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
  }
}
