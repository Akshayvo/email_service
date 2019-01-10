import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates, benefitsList } from '../data/view-rates';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  breadcrumbActive: any = 'View Rates';
  currentActive: any = 'VIEW RATES';
  viewrates: any;
  benefitsList: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Looking for an affordable self storage unit for personal or
                business use? Click here to view Storage King's rates!`
    });
    this.titleService.setTitle('View Storage Unit Rates | Storage King');
  }

  ngOnInit() {
    this.fetchViewRates();
    this.window.scrollTo(0, 0);
  }

  public fetchViewRates() {
    this.viewrates = viewrates;
    this.benefitsList = benefitsList;
  }

}
