import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit,Inject, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-for-sale',
  templateUrl: './home-for-sale.component.html',
  styleUrls: ['./home-for-sale.component.scss']
})
export class HomeForSaleComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Description: Check out our home listings! If you have any questions, fill out our contact form, or call the office, today!`
    });
    this.titleService.setTitle('Homes For Sale | The Coach House');
   }

  ngOnInit() {
  }

}
