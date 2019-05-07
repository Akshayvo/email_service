import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `Our rates are surprisingly affordable for all of the amenities we offer!
      Check out out parking and storage unit rates, then make your reservation today`
    });
    this.titleService.setTitle('View Rates | Brothers Boat RV & Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
