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
    if (this.router.url.includes('/260-n-grove')) {
        this.tabId = 0;
    } else if (this.router.url.includes('/201-n-grove')) {
      this.tabId = 1;
    } else if (this.router.url.includes('/246-w-south-lane')) {
      this.tabId = 2;
    }  else if (this.router.url.includes('/817-s-getty')) {
      this.tabId = 3;
    }  else if (this.router.url.includes('/430-s-hwy-83')) {
      this.tabId = 4;
    }  else if (this.router.url.includes('/500-east-garden-street')) {
      this.tabId = 5;
    }
  }
}
