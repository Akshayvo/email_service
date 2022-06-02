import { Component, OnInit , OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SignOutService } from '../services/sign-out.service';
import { environment } from '../../../environments/environment';


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
  locationName: string;
  facilityName:string;
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
  ) {
    this.fetchData();
    this.meta.addTag({
      name: 'description',
      content: `We've received your reservation! One of our friendly staff will be in touch!`
    });
    this.titleService.setTitle('Thank You For Reserving Your Unit at RCS Storage!');
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
    this.locationName =  this.dataSharingService.locationName;
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
      'location' : this.locationName,
      'confirmationNumber' : this.strConfirmation,
      'unitType':  this.description,
      'price': this.monthlyRate && this.monthlyRate || '',
      'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
      'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
    });
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  public fetchData(){
    this.facilityName = environment.facilityName;
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
