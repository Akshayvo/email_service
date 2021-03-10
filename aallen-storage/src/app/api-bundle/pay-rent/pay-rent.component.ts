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
import { loginDetail} from '../../data/pay-rent';
import { payRent } from '../../data/blurb';
import { contact } from '../../data/contact';




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
  loginDetail: any;
  payRent: any;
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
      content: `Simply follow the on-page instructions, or call one of our friendly management professionals to learn how to access your account, today!`
    });
    this.titleService.setTitle('Pay Rent | Aallen Self Storage');
  }

  ngOnInit() {
    this.fetchPayment();
    this.fetchContact();
    this.fetchPayRent();
    this.fetchContactDetails();
    this.showPaymentPageType = environment.signUpForAuotoPay;
  }
  public fetchPayment() {
    this.loginDetail = loginDetail;
  }

  public fetchContact() {
    this.contact = contact;
  }

  public fetchPayRent() {
    this.payRent = payRent;
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
