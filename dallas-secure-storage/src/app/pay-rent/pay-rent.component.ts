import { Component, OnInit } from '@angular/core';
import { contactsLocation1, contactsLocation2 } from '../data/contact';
import { DataSharingService } from '../services/data-sharing.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  locationId: any;
  contact: any;
  name: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.dataupdate();

    if (this.router.url.includes('dallas-secure-storage')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'Pay Rent for Dallas Secure Storage';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('godsey-secure-storage')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Pay Rent for Godsey Secure Storage';
      this.contact = contactsLocation2;
    }
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}
