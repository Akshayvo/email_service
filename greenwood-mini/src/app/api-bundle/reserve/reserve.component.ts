import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanonicalService } from '../../services/canonical.service';
import { headingReservePageLocation1, headingReservePageLocation2, headingReservePageLocation3, headingReservePageLocation4,
  headingReservePageLocation5, headingReservePageLocation6,headingReservePageLocation7,headingReservePageLocation8} from '../../data/location';
import { DataSharingService } from '../services/data-sharing.service';
import { environment } from '../../../environments/environment';

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
    if (this.router.url.includes(`${environment.locationName}/rebel-mini`)) {
      this.id = 1;
      this.heading = headingReservePageLocation1;
    }
    else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
      this.id = 2;
      this.heading = headingReservePageLocation2;
    }
     else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
      this.id = 3;
      this.heading = headingReservePageLocation3;
    }
    else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
      this.id = 4;
      this.heading = headingReservePageLocation4;
    }
     else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
      this.id = 5;
      this.heading = headingReservePageLocation5;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
      this.id = 6;
      this.heading = headingReservePageLocation6;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
      this.id = 7;
      this.heading = headingReservePageLocation7;
    } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
      this.id = 8;
      this.heading = headingReservePageLocation8;
    } 
    // else if (this.router.url.includes('/location/robertsdale')) {
    //   this.id = 6;
    //   this.heading = headingReservePageLocation6;
    // }
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