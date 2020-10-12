import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {
  tabId: any;
  private sub: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/pay-rent/rocky-creek')) {
        this.tabId = 0;
    } else if (this.router.url.includes('/pay-rent/agricola')) {
      this.tabId = 1;
    } else if (this.router.url.includes('/pay-rent/barton')) {
      this.tabId = 2;
    }
  }
}
