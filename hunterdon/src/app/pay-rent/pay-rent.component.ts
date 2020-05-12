import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { contact, contactsLocation2, contactsLocation1, contactsLocation3 } from '../data/contact';

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
    if (this.router.url.includes('hunterdon-storage-ringoes')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      this.name = 'Hunterdon Storage at Ringoes';
      this.contact = contactsLocation1;
    } else  if (this.router.url.includes('hunterdon-storage-1')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Hunterdon Storage I';
      this.contact = contactsLocation2;
    } else  if (this.router.url.includes('hunterdon-storage-2')) {
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      this.name = 'Hunterdon Storage II';
      this.contact = contactsLocation3;
    }
    // this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
  }
}
