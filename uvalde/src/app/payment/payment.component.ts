import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'Pay Rent';
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
      content: `Do you have a unit at one of our 7 locations? Follow our easy instructions
      on this page and pay your rent 24/7 with our handy online tenant portal!`
    });
    this.titleService.setTitle('Pay Rent  | Affordable Storage');
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
