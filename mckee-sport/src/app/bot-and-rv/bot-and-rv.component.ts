import { Component, OnInit , Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { dataViewRates } from '../data/view-rates';

@Component({
  selector: 'app-bot-and-rv',
  templateUrl: './bot-and-rv.component.html',
  styleUrls: ['./bot-and-rv.component.scss']
})
export class BotAndRvComponent implements OnInit {

  currentActive: any = 'BOAT & RV STORAGE';
  dataViewRates: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `at McKeesport Storage, we offer short-term contracts, which are perfect for your boat, or recreational vehicle parking during the offseason!`
    });
    this.titleService.setTitle('Boat & Recreational Vehicle Parking | McKeesport Storage: Christy Park');
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viewRates();
  }
  public viewRates() {
    this.dataViewRates = dataViewRates;
  }
}


