import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
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
  ) {

    if (this.router.url.includes('affordable-secure-storage-floral-city')) {
      this.name = 'Affordable Secure Storage - Floral City';
    } else if (this.router.url.includes('affordable-secure-storage-west-hernando')) {
        this.name = 'Affordable Secure Storage - West Hernando';
    } else if (this.router.url.includes('affordable-secure-storage-labelle')) {
      this.name = 'Affordable Secure Storage - Labelle';
    } else if (this.router.url.includes('affordable-secure-storage-backyard')) {
      this.name = 'Affordable Secure Storage - Backyard';
    } else if (this.router.url.includes('affordable-secure-storage-hernando')) {
      this.name = 'Affordable Secure Storage - Hernando';
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
