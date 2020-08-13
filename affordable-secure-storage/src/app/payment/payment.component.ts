import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1 } from '../data/contact';
import { tableHeader, tableData } from '../data/pay-rent';
import { Router } from '@angular/router';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';

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

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    public router: Router,
    private  dataSharingService: DataSharingService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Follow the simple instructions here, and you can pay your rent online 24 hours a day, 7 days a week!`
    });
    this.titleService.setTitle('Pay Rent | Affordable Secure Storage');
  }

  ngOnInit() {
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchTableHeader();
    this.fetchTableData();


    if (!!(localStorage.getItem('strTenantToken'))) {
      const navTo = localStorage.getItem('paymentNavigationUrl');
      if (!!navTo) {
        if (this.dataSharingService.changePassword === true) {
          this.router.navigate([`/pay-rent/${navTo}/${this.paymentTab}/changePassword`]);
        } else {
          // this.router.navigate([`/pay-rent/${navTo}/${this.paymentTab}/payment`]);
          if (this.paymentTab === 'rent-sub') {
            this.router.navigate([`/pay-rent/${navTo}/${this.paymentTab}/payment`]);
          } else {
            console.log("navigation is", `/pay-rent/${navTo}/${this.paymentTab}/auto-pay`);
            
            // if (this.paymentTab === 'sign-up') {
              this.router.navigate([`/pay-rent/${navTo}/${this.paymentTab}/auto-pay`]);
            }
          // }
        }
      }
    }
    // console.log('current url is', this.router.url);

  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public fetchTableHeader() {
    this.tableHeader = tableHeader;
  }

  public fetchTableData() {
    this.tableData = tableData;
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.contact = contactsLocation1;
    }
  }
}
