import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tabs } from '../../data/tab';
import { environment } from '../../../environments/environment';
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
  tabs: any;
  showPaymentPageType: number;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
  ) { 
    if (!!localStorage.getItem('APIKey')) {
      this.dataSharingService.apiKey = localStorage.getItem('APIKey');
    }
    if (this.router.url.includes('inez-storage')) {
      this.name = 'Inez Storage';
    } else  if (this.router.url.includes('beck-road-storage')) {
      this.name = 'Beck Road Storage';
    }
  }

  ngOnInit() {
    this.showPaymentPageType = environment.signUpForAuotoPay;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
    this.fetchContactDetails();
  }

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
