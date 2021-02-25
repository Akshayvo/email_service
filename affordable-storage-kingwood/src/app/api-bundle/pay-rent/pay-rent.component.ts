import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DataSharingService } from '../services/data-sharing.service';
import { tabs } from '../../data/tab';
import { payRentHeading } from '../../data/heading';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { environment } from '../../../environments/environment';
import { CanonicalService } from '../../services/canonical.service';
import { ogPayRentPage, twitterPayRentPage } from '../../data/script';

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
  og: any;
  twitter: any;
  
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private meta: Meta,
    private canonical: CanonicalService,

  ) {
    this.fetchMetaData();
    this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });
    this.meta.addTag({
      name: 'description',
      content: `${this.payRentPageContent}`
    });
    this.titleService.setTitle(`${this.payRentPageTitle}`);
    this.canonical.create();
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.showPaymentPageType = environment.signUpForAuotoPay;
  }

  public fetchOg() {
    this.og = ogPayRentPage;
  }

  public fetchTwitter() {
    this.twitter = twitterPayRentPage;
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
