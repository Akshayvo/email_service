import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { payRentPageContent, payRentPageTitle } from '../data/title';
import { LocationService } from '../services/location.service';
import { contactsLocation1, contactsLocation3, contactsLocation2 } from '../data/contact';
import { tableHeader, tableData } from '../data/pay-rent';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'Pay Rent';
  strTenantToken: string;
  payRentPageContent: any;
  payRentPageTitle: any;
  locationId: any;
  contact: any;
  tableData: any;
  tableHeader = [];
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    public router: Router,
    private data: LocationService,
    private  dataSharingService: DataSharingService,
  ) {
    this.fetchMetaData();
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

  public fetchMetaData() {
    this.payRentPageContent = payRentPageContent;
    this.payRentPageTitle = payRentPageTitle;
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
    } else if ( this.locationId === '2' ) {
      this.contact = contactsLocation2;
    } else if ( this.locationId === '3' ) {
      this.contact = contactsLocation3;
    }
  }
}
