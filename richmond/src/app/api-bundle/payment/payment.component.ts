import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { contact } from '../../data/contact';
import { WINDOW } from '@ng-toolkit/universal';
import { payRentPageContent, payRentPageTitle } from '../../data/title';
import { payRentHeading } from '../../data/heading';
import { loginDetail } from '../../data/pay-rent';
import { Route, Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  contact: any;
  payRentPageTitle: string;
  payRentPageContent: string;
  payRentHeading: string;
  loginDetail = [];



  constructor(
    private titleService: Title,
    private router: Router,
    private  dataSharingService: DataSharingService,
    @Inject(WINDOW) private window: Window,
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
    this.fetchPayRentHeading();
    this.fetchLoginDetail();
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }

  public fetchContactDetails() {
    this.contact = contact;
  }

  public fetchLoginDetail() {
    this.loginDetail = loginDetail;
  }

  public fetchPayRentHeading() {
    this.payRentHeading = payRentHeading;
  }
}
