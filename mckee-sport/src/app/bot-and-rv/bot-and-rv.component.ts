import { Component, OnInit , Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { viewRates } from '../data/view-rates';
import { carBotRvTitle, carBotRvContent } from '../data/title';
import { carBotRvHeading } from '../data/heading';

@Component({
  selector: 'app-bot-and-rv',
  templateUrl: './bot-and-rv.component.html',
  styleUrls: ['./bot-and-rv.component.scss']
})
export class BotAndRvComponent implements OnInit {

  currentActive: any = 'BOAT & RV STORAGE';
  dataViewRates: any;
  carBotRvTitle: any;
  carBotRvContent: any;
  carBotRvHeading: string;


  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.carBotRvContent}`
    });
    this.titleService.setTitle(`${this.carBotRvTitle}`);
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.viewRates();
  }

  public fetchMetaData() {
    this.carBotRvTitle = carBotRvTitle;
    this.carBotRvContent = carBotRvContent;
  }

  public viewRates() {
    this.dataViewRates = viewRates;
    this.carBotRvHeading = carBotRvHeading;
  }
}


