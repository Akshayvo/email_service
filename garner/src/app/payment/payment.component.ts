import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1 } from '../data/contact';
import { tableHeader, tableData } from '../data/pay-rent';
import { Router } from '@angular/router';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { MetaService } from '../services/canonical.service';


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

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    public router: Router,
    private metaService: MetaService,
    private  dataSharingService: DataSharingService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Simply follow the instructions on this page, or call our office
      to learn how to login to your account and pay your bill 24/7!`
    });
    this.titleService.setTitle(`Pay Rent  | Garner's U Store`);
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchTableHeader();
    this.fetchTableData();
    this.metaService.createCanonicalURL();


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
