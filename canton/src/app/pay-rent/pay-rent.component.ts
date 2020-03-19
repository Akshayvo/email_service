import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, contactsLocation2, contactsLocation3 } from '../data/contact';
import { loginFoul, loginLouisville, loginLincoln } from '../data/pay-rent';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  name: string;
  contact: any;
  loginDetail = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.router.url.includes('fohl-street-storage')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'Fohl Street Storage';
      this.contact = contactsLocation1;
      this.loginDetail = loginFoul;
    } else  if (this.router.url.includes('louisville-self-storage')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Louisville Self Storage';
      this.contact = contactsLocation2;
      this.loginDetail = loginLouisville;

    } else  if (this.router.url.includes('lincoln-street-storage')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      this.name = 'Lincoln Street Storage';
      this.contact = contactsLocation3;
      this.loginDetail = loginLincoln;
    }
    // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}
