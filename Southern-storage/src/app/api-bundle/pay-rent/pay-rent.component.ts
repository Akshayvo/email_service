import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsAgricola, contactsBarton, contactsRockyCreek,contactsWade } from '../../data/contact';

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
    if (this.router.url.includes('agricola')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'Pay Rent for Southern Storage - Agricola';
      this.contact = contactsAgricola;
    } else  if (this.router.url.includes('rocky-creek')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Pay Rent for Southern Storage - Rocky Creek';
      this.contact = contactsRockyCreek;
    } else  if (this.router.url.includes('barton')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      this.name = 'Pay Rent for Southern Storage - Barton';
      this.contact = contactsBarton;
    } else if (this.router.url.includes('wade')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
      this.name = 'Pay Rent for Southern Storage - Wade';
      this.contact = contactsWade;
    }
    // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}