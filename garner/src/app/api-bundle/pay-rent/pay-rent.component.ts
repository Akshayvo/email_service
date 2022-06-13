import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { environment } from '../../../environments/environment';
import { MetaService } from '../../services/canonical.service';


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
    private metaService: MetaService,
    private dataSharingService: DataSharingService,
  ) {
    if (this.router.url.includes('1321-north-jefferson-st-location')) {
      this.name = `Garner's U Store - 1321 North Jefferson St`;
  } else {
    this.name = `Garner's U Store - 1687 US-441`;
  }
    if (!!localStorage.getItem('APIKey')) {
      this.dataSharingService.apiKey = localStorage.getItem('APIKey');
    }
  }

  ngOnInit() {
    this.showPaymentPageType = environment.paymentPageType;
    this.fetchContactDetails();
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation);
    this.metaService.createCanonicalURL();
  }

  public fetchContactDetails() {
    // this.contact = contact;
    this.tabs = tabs;
  }
}
