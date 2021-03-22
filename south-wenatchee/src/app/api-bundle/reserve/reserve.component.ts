import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingReservePageLocation1, headingReservePageLocation2, headingReservePageLocation3, headingReservePageLocation4 } from '../../data/location';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  id: number;
  tabs: any;
  navTo: any;
  heading: string;

  constructor(private router: Router,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService

    ) {
      this.canonical.create();
     }

  ngOnInit() {
    this.isSomePage();
    this.navigate();
  }

  public isSomePage() {
    if (this.router.url.includes('/wa/south-wenatchee')) {
      this.id = 1;
      this.heading = headingReservePageLocation1;
    } else if (this.router.url.includes('/wa/leos-self-storage')) {
      this.id = 2;
      this.heading = headingReservePageLocation2;
    }
  }

  public navigate() {

    // Base location of the facility will be appended to URL
    this.navTo = this.router.url;
    this.dataSharingService.navigationTo = this.navTo;
    this.dataSharingService.navigateToPrevious = this.navTo;
    this.dataSharingService.updateMyNavLink('viewRates', 'next', `${this.navTo}/${location}`);
    this.dataSharingService.updateMyNavLink('viewRates', 'prev', `${this.router.url}`);
    const myNavLinks = this.dataSharingService.getMyNavLinks('viewRates');
  }
}
