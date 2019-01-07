import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  currentActive: any = 'Pay Rent';
  currentTab: any;
  tabs: any = [
    { id: '1',
      name: 'Your Self Storage - Location1',
      path: './location1'
    },
    { id: '2',
      name: 'Your Self Storage - Location2',
      path: './location2'
    }
  ];
  private sub: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'pay-rent-meta-name',
      content: `pay-rent-meta-content`
    });
    this.titleService.setTitle('PayRent-PageTitle');
  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.currentTab = params['currentTab'];
    });
    this.window.scrollTo(0, 0);
  }
}
