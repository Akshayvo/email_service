import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {
  tabId: any;
  currentTab: any;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.currentTab = params['currentTab'];
    });
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/payment/mall')) {
        this.tabId = 0;
    } else if (this.router.url.includes('/payment/village')) {
      this.tabId = 1;
    }
  }
}
