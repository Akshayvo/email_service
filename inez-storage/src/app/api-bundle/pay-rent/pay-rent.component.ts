import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  contact: any;
  name: string;
  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
  ) { }

  ngOnInit() {
    // this.fetchContactDetail();
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation) ;
  }

  // public fetchContactDetail() {
  //   if (this.router.url.includes('inez-storage')) {
  //     this.id = 1;
  //     this.name = 'Inez Storage';
  //     this.contact = contactsLocation1;
  //     this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
  //   } else  if (this.router.url.includes('beck-road-storage')) {
  //     this.id = 2;
  //     this.name = 'Beck Road Storage';
  //     this.contact = contactsLocation3;
  //     this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;

  //   }
  // }

}
