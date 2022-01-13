import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignOutService } from '../services/sign-out.service';
import { thankYouPageContent, thankYouPageTitle } from '../../data/title';
import { environment } from '../../../environments/environment';
import { CommonService } from '../services/common.service';
import {
  dataConfirmationMoveIn,
  dataConfirmationReserve,
} from "../../data/view-rates";
@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})


export class ThankYouComponent implements OnInit, OnDestroy {
  [x: string]: any;
  script: any;
  strConfirmation: string;
  strAccessCode: string;
  tokenExit: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  description: string;
  monthlyRate: number;
  PaymentAmount: number;
  CCApprovalCode: string;
  eventName: string;
  paymentNavigationUrl: string;
  thankYouPageTitle: string;
  thankYouPageContent: string;
  facilityName: string;
  paymentSuccess = false;
  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };


  private signOutSubscribe$: Subscription;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private dataSharingService: DataSharingService,
    public router: Router,
    private signOutService: SignOutService,
    private service: CommonService,
  ) {
    this.facilityName = environment.facilityName;
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.thankYouPageContent}`
    });
    this.titleService.setTitle(`${this.thankYouPageTitle}`);
  }

  newData() {
    if (!!this.dataSharingService.navigateToMoveIn) {
      this.dynamicImage = "goodlette-self-storage-8";
      this.viewRatesContent = dataConfirmationMoveIn;
      this.service.changeData(
        "payment",
        this.dynamicImage,
        this.viewRatesContent
      ); //invoke new Data
     
    } else {
     
      this.dynamicImage = "goodlette-self-storage-5";
      this.viewRatesContent = dataConfirmationReserve;
      this.service.changeData(
        "payment",
        this.dynamicImage,
        this.viewRatesContent
      ); //invoke new Data
      
    }
  }

  ngOnInit() {
    this.newData();
    this.service.data$.subscribe((res) => (this.data = res));
    this.strConfirmation = this.dataSharingService.strConfirmation;
    this.strAccessCode = this.dataSharingService.strAccessCode;
    this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
    this.navigateToReserve = this.dataSharingService.navigateToReserve;
    this.description = this.dataSharingService.LstUnitTypes.Description;
    this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
    this.PaymentAmount = this.dataSharingService.PaymentAmount;
    this.CCApprovalCode = this.dataSharingService.CCApprovalCode;
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.eventName = this.dataSharingService.eventName;
    this.paymentSuccess = this.dataSharingService.paymentSuccess;

    if (localStorage.getItem('strTenantToken')) {
      this.tokenExit = localStorage.getItem('strTenantToken');
    }

    if (localStorage.getItem('paymentNavigationUrl')) {
      this.paymentNavigationUrl = localStorage.getItem('paymentNavigationUrl');
    }
    const today = new Date();
    window['dataLayer'] = window['dataLayer'] || {};
    window['dataLayer'] = window['dataLayer'] || [];
    window['dataLayer'].push({
      'event': this.eventName,
      'confirmationNumber' : this.strConfirmation,
      'unitType':  this.description,
      'price': this.monthlyRate && this.monthlyRate || '',
      'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    });
  }

  public fetchMetaData() {
    this.thankYouPageTitle = thankYouPageTitle;
    this.thankYouPageContent = thankYouPageContent;
  }


  public navigate(location: any) {
    this.router.navigate([location]);
  }

  signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut)
      .subscribe(result => {
        localStorage.removeItem('strTenantToken');
        if (!!localStorage.getItem('APIKey')) {
          localStorage.removeItem('APIKey');
        }
        this.router.navigate(['/']);
      }, (err) => {
      }
      );
  }

  public ngOnDestroy(): void {
    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }
    window.removeEventListener('beforeunload', (event) => {
    });
  }

}