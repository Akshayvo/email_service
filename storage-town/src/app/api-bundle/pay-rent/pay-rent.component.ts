import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { CanonicalService } from '../../services/canonical.service';
@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  contact: any;
  name: string;
  id: number;
  tabs: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService

  ) {
    this.canonical.create();
    if (this.router.url.includes('chester') || this.router.url.includes('andrews')) {
      this.name = 'Chester - Andrews Lane & Brookside Ave';
  }  else if (this.router.url.includes('montgomery-walden')) {
    this.name = 'Montgomery/Walden';
  } else if (this.router.url.includes('middletown-wallKill')) {
    this.name = 'Middletown/WallKill';
  }
    if (!!localStorage.getItem('APIKey')) {
      this.dataSharingService.apiKey = localStorage.getItem('APIKey');
    }
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
