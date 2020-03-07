import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contact, contacts500EastGardenStreet, contacts430SHwy83, contacts817SGetty,
  contacts246WSouthLane, contacts201Grove, contacts260NGrove } from '../data/contact';

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
    if (this.router.url.includes('260-n-grove')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'AFFORDABLE STORAGE #1 - 260 N GROVE';
      this.contact = contacts260NGrove;
    } else  if (this.router.url.includes('201-n-grove')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'AFFORDABLE STORAGE #2 - 201 N GROVE';
      this.contact = contacts201Grove;
    } else  if (this.router.url.includes('246-w-south-lane')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      this.name = 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE';
      this.contact = contacts246WSouthLane;
    } else  if (this.router.url.includes('817-s-getty')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
      this.name = 'AFFORDABLE STORAGE #4 - 817 S. GETTY';
      this.contact = contacts817SGetty;
    } else  if (this.router.url.includes('430-s-hwy-83')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
      this.name = 'AFFORDABLE STORAGE #5 - 430 S HWY 83';
      this.contact = contacts430SHwy83;
    } else  if (this.router.url.includes('500-east-garden-street')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc6;
      this.name = 'AFFORDABLE STORAGE #6 - 500 E. GARDEN';
      this.contact = contacts500EastGardenStreet;
    }

    console.log('apiKey', this.dataSharingService.apiKey);

    // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    console.log('payment navigation', this.dataSharingService.paymentNavigation);
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}
