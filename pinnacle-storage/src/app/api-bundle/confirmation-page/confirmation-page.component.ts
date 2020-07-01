import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { SignOutService } from '../services/sign-out.service';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit, OnDestroy {

  tokenExit: string;
  monthlyRate: number;
  description: string;
  strAccessCode: string;
  strConfirmation: string;
  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };


  private  signOutSubscribe$: Subscription;


  constructor(
    public router: Router,
    private dataSharingService: DataSharingService,
    private signOutService: SignOutService,
  ) { }

  ngOnInit(): void {
    if (!!localStorage.getItem('strTenantToken')) {
      this.tokenExit = localStorage.getItem('strTenantToken');
    } else {
        if (!!localStorage.getItem('strTempTenantToken')) {
          localStorage.removeItem('strTempTenantToken');
        }
    }
    this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.description = this.dataSharingService.LstUnitTypes.Description;
    this.strAccessCode = this.dataSharingService.strAccessCode;
    this.strConfirmation = this.dataSharingService.strConfirmation;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut)
       .subscribe(result => {
         localStorage.removeItem('strTenantToken');
         this.router.navigate(['/']);
       }, (err) => {
       }
       );
   }

   public ngOnDestroy(): void {
    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }
   }
}
