import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1,contactsLocation3,contactsLocation2,contactsLocation4,contactsLocation5,contactsLocation6,contactsLocation7,contactsLocation8,
  contactsLocation9,contactsLocation10,contactsLocation11,contactsLocation12 } from '../../data/contact';
import { tableHeader, tableData } from '../../data/pay-rent';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { CanonicalService } from '../../services/canonical.service';
import { ogPayRentPage, twitterPayRentPage } from '../../data/script';
import { payRentPageTitle, payRentPageContent } from '../../data/title';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  locationId: any;
  contact: any;
  tableData: any;
  tableHeader = [];
  paymentTab: string;
  twitter: any;
  og: any;
  payRentPageContent: string;
  payRentPageTitle: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    public router: Router,
    private  dataSharingService: DataSharingService,
    private canonical: CanonicalService
  ) {
    this.canonical.create();
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
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchTableHeader();
    this.fetchTableData();

    // if (!!localStorage.getItem('paymentTab')) {
    //   this.paymentTab = localStorage.getItem('paymentTab');
    // }

    if (!!(localStorage.getItem('strTenantToken'))) {
      const navTo = localStorage.getItem('paymentNavigationUrl');
      if (!!localStorage.getItem('paymentTab')) {
        if (!!navTo) {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${navTo}/${localStorage.getItem('paymentTab')}/changePassword`]);
          } else {
            this.router.navigate([`/pay-rent/${navTo}/${localStorage.getItem('paymentTab')}/payment`]);
          }
        }
      } else {
        if (!!navTo) {
          if (this.dataSharingService.changePassword === true) {
            this.router.navigate([`/pay-rent/${navTo}/changePassword`]);
          } else {
            this.router.navigate([`/pay-rent/${navTo}/payment`]);
          }
        }
      }
    } else {
      this.router.navigate(['/pay-rent']);
    }
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public fetchOg() {
      this.og = ogPayRentPage;
  }

  public fetchTwitter() {
      this.twitter = twitterPayRentPage;
  }

  public fetchTableHeader() {
    this.tableHeader = tableHeader;
  }

  public fetchTableData() {
    this.tableData = tableData;
  }

  public fetchMetaData() {
    this.payRentPageTitle = payRentPageTitle;
    this.payRentPageContent = payRentPageContent;
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.contact = contactsLocation1;
    }
    else if ( this.locationId === '2' || this.locationId === 2 ) {
      this.contact = contactsLocation2;
    }
    else if ( this.locationId === '3' || this.locationId === 3 ) {
      this.contact = contactsLocation3;
    }
    else if ( this.locationId === '4' || this.locationId === 4 ) {
      this.contact = contactsLocation4;
    }
    else if ( this.locationId === '5' || this.locationId === 5 ) {
      this.contact = contactsLocation5;
    }
    else if ( this.locationId === '6' || this.locationId === 6 ) {
      this.contact = contactsLocation6;
    }
    else if ( this.locationId === '7' || this.locationId === 7 ) {
      this.contact = contactsLocation7;
    }
    else if ( this.locationId === '8' || this.locationId === 8 ) {
      this.contact = contactsLocation8;
    }
    else if ( this.locationId === '9' || this.locationId === 9 ) {
      this.contact = contactsLocation9;
    }
    else if ( this.locationId === '10' || this.locationId === 10 ) {
      this.contact = contactsLocation10;
    }
    else if ( this.locationId === '11' || this.locationId === 11 ) {
      this.contact = contactsLocation11;
    }
    else if ( this.locationId === '12' || this.locationId === 12) {
      this.contact = contactsLocation12;
    }
  }
}
