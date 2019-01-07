import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {
  tabId: any;
  name: string;
  private sub: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/payment/location1')) {
        this.name = 'location1';
    } else {
        this.name = 'location2';
    }
  }
}
