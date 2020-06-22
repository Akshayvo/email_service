import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contact, contactsLocation2, contactsLocation1 } from '../data/contact';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  name: string;
  contact: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url.includes('filitreau-lane')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'Bluegrass Storage - Filiatreau Lane';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('springfield-road')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Bluegrass Storage - Springfield Road';
      this.contact = contactsLocation2;
    }
    // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}
