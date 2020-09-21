
import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { script } from '../../data/script';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignOutService } from '../services/sign-out.service';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})


export class ThankYouComponent implements OnInit, OnDestroy {

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
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We've received your reservation! One of our friendly staff will be in touch!`
    });
    this.titleService.setTitle('Thank You For Reserving Your Unit at Storage Town!');
  }

  ngOnInit() {
    this.strConfirmation = this.dataSharingService.strConfirmation;
    this.strAccessCode = this.dataSharingService.strAccessCode;
    this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
    this.navigateToReserve = this.dataSharingService.navigateToReserve;
    this.description = this.dataSharingService.LstUnitTypes.Description;
    this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
    this.PaymentAmount = this.dataSharingService.PaymentAmount;
    this.CCApprovalCode = this.dataSharingService.CCApprovalCode;
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;


    if (localStorage.getItem('strTenantToken')) {
      this.tokenExit = localStorage.getItem('strTenantToken');
    }

    if (localStorage.getItem('paymentNavigationUrl')) {
      this.paymentNavigationUrl = localStorage.getItem('paymentNavigationUrl');
    }
    this.fetchScript();
  }

  public fetchScript() {
    const today = new Date();
    switch (true) {
      case this.navigateToMoveIn: {
        this.script = function dataLayer() {
          window['dataLayer'] = window['dataLayer'] || [];
            window['dataLayer'].push({
            event: this.eventName,
            'location' : 'variable_value',
            'confirmationNumber' : 'variable_value',
            'unitType': 'variable_value',
            'price': 'variable_value',
            'date': 'variable_value',
            'time': 'variable_value'
          });
        };
        this.eventName = 'move-in';
        break;
      }
      case this.navigateToReserve: {
        this.script = function dataLayer() {
          window['dataLayer'] = window['dataLayer'] || [];
            window['dataLayer'].push({
            'event': this.eventName,
            'location' : 'variable_value',
            'confirmationNumber' : 'variable_value',
            'unitType': 'variable_value',
            'price': 'variable_value',
            'date': 'variable_value',
            'time': 'variable_value'
          });
        };
        this.eventName = 'reservation';
        break;
      }
      case (!this.navigateToReserve && !this.navigateToMoveIn): {
        this.script = function dataLayer() {
          window['dataLayer'] = window['dataLayer'] || [];
            window['dataLayer'].push({
            'event': this.eventName,
            'location' : this.paymentNavigationUrl,
            'confirmationNumber' : this.CCApprovalCode,
            'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
          });
        };
        this.eventName = 'reservation';
        break;
      }
      default: {
        this.script = function dataLayer() {
          window['dataLayer'] = window['dataLayer'] || [];
            window['dataLayer'].push({
            'event': this.eventName,
            'location' : 'variable_value',
            'confirmationNumber' : 'variable_value',
            'unitType': 'variable_value',
            'price': 'variable_value',
            'date': 'variable_value',
            'time': 'variable_value'
          });
        };
      }
        this.eventName = 'ContactFormsubmission';
        break;
    }
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
