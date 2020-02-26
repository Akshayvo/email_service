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
      content: ``
    });
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {

    });
    window.scrollTo(0, 0);

    if (!!(localStorage.getItem('strTenantToken'))) {
      console.log('payment navigation from payment', this.dataSharingService.paymentNavigation, this.dataSharingService.changePassword);
      const navTo = localStorage.getItem('paymentNavigationUrl');
      if (!!navTo) {
        if (this.dataSharingService.changePassword === true) {
          console.log('got chnage password');

          this.router.navigate([`/pay-rent/${navTo}/changePassword`]);
        } else {
          console.log('got payment page ');
          this.router.navigate([`/pay-rent/${navTo}/payment`]);
        }
      }
    }
  }
}
