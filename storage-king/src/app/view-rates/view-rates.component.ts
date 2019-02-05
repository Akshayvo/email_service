import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates, benefitsList } from '../data/view-rates';
import { environment } from '../../environments/environment';
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
  baseUrl = environment.s3_base_url;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Looking for an affordable self storage unit for personal
                or business use? Click here to view Storage King's unit sizes!`
    });
    this.titleService.setTitle('View Our Storage Unit Sizes | Storage King');
  }

  ngOnInit() {
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRates() {
    this.viewrates = viewrates;
    this.benefitsList = benefitsList;
  }

}
