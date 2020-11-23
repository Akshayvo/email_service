import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1, contactsLocation3 } from '../data/contact';
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
      content: `Inez Storage offers online rentals and payments for our tenants in Inez & Victoria,
                TX. Use our online portal on our website to rent or pay your bill online.`
    });
    this.titleService.setTitle('Pay & Rent Storage Online | Inez Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchTableHeader();
    this.fetchTableData();


    if (!!(localStorage.getItem('strTenantToken'))) {
      const navTo = localStorage.getItem('paymentNavigationUrl');
      if (!!navTo) {
        if (this.dataSharingService.changePassword === true) {
          this.router.navigate([`/pay-rent/${navTo}/changePassword`]);
        } else {
          this.router.navigate([`/pay-rent/${navTo}/payment`]);
        }
      }
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
    } else if ( this.locationId === '3' ) {
      this.contact = contactsLocation3;
    }
  }
}