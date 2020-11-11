import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'Pay Rent';
  tabs: any = [
    { id: '0',
    name: 'Southern Storage - Agricola',
    path: './agricola'
  },
    { id: '1',
      name: 'Southern Storage - Rocky Creek',
      path: './rocky-creek'
    },
    { id: '2',
      name: 'Southern Storage - Barton',
      path: './barton'
    }
  ];
  strTenantToken: string;
  private sub: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    public router: Router,
    private  dataSharingService: DataSharingService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent for any of our 3 locations online! Simply
                follow the instructions on the page or call our friendly management staff to learn how!`
    });
    this.titleService.setTitle('Pay Your Rent Online | Southern Storage');
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {

    });
    window.scrollTo(0, 0);

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
}
