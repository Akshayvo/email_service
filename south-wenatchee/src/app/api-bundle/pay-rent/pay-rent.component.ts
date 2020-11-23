import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { payRentHeading } from '../../data/heading';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { environment } from '../../../environments/environment';

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
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;
  showPaymentPageType: number;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private meta: Meta

  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.payRentPageContent}`
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.showPaymentPageType = environment.paymentPageType;
  }

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
  }

  public fetchContactDetails() {
    this.payRentHeading = payRentHeading;
    this.tabs = tabs;
  }
}
