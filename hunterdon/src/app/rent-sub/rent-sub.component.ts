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
    if (this.router.url.includes('/hunterdon-storage-ringoes')) {
        this.tabId = 0;
    } else if (this.router.url.includes('/hunterdon-storage-1')) {
      this.tabId = 1;
    } else if (this.router.url.includes('/hunterdon-storage-2')) {
      this.tabId = 2;
    }
  }
}
