import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { Router } from '@angular/router';
import { tabs } from '../data/tab';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  tabs: any;
  id: number;

  constructor(
    private titleService: Title,
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Need to pay your bill online? Follow the instructions
                here or contact us and start paying at your convenience, 24/7!`
    });
    this.titleService.setTitle('Pay Rent | Storage King');
  }

  ngOnInit() {
    this.fetchContactDetails();
    window.scrollTo(0, 0);
  }


  public fetchContactDetails() {
    this.tabs = tabs;
  }


}
