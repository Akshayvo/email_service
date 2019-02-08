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
    if (this.router.url.includes('/payment/rocky-creek')) {
        this.tabId = 0;
    } else if (this.router.url.includes('/payment/agricola')) {
      this.tabId = 1;
    } else if (this.router.url.includes('/payment/barton')) {
      this.tabId = 2;
    }
  }
}
