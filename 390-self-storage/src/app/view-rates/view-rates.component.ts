import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../data/view-rates';
import { gettingStarted } from '../data/home';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  dataViewRates: any;
  gettingStarted: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private router: Router,

    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `390 Self Storage is Rochester's newest self-storage facility available at a very
      affordable price. Reserve your unit in our brand new facility today!`
    });
    this.titleService.setTitle('Cheap Storage Units Rochester NY, Affordable Storage Units');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viewRates();
    this.fetchGetSarted();
  }

  public viewRates() {
    this.dataViewRates = dataViewRates;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchGetSarted() {
    this.gettingStarted = gettingStarted;

  }
}
