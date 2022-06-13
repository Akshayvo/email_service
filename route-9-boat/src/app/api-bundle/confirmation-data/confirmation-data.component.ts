import { Component, OnInit, Input, Output, EventEmitter,
  OnDestroy, ViewChild, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { MoveInService } from '../services/moveIn.service';
import { MakeAReservationService } from '../services/make-a-reservation.service';
import { AddTenantService } from '../services/add-tenant.service';
import { TenantInfoService } from '../services/tenant-info.service';
import { Subscription, Subject } from 'rxjs';
import { option, option1 } from '../../data/view-rates';
import { SignOutService } from '../services/sign-out.service';
import { environment } from '../../../environments/environment';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-confirmation-data',
  templateUrl: './confirmation-data.component.html',
  styleUrls: ['./confirmation-data.component.scss']
})

export class ConfirmationDataComponent implements OnInit, OnDestroy {
  [x: string]: any;

reserveUnitForm: FormGroup;
submitted = false;
showConfirmation = false;
totalChargesAmount: number;
totalTaxAmount: number;
clickedMoveIn: boolean;
defaultTotalChargesAmount: number;
defaultTotalTaxAmount: number;

index: string;
alternateIndex: string;

options = [ {
  description: '',
  id: ''
}];


options1 = [ {
  description: '',
  id: ''
}];

stateString: string;
alternateStateString: string;
navigateToReserve: boolean;
navigateToMoveIn: boolean;
reservationInProgress = false;

strAccessCode: string;
strConfirmation: string;
tokenExit: string;
existingTenantToken: string;
existTempToken: string;
showMoveInDateError = false;
isValueUpdated = true;
// formattedMoveInDate: any;

unitTypeNotAvailability = false;

firstName: string;
lastName: string;
phone: string;
emailAddress: string;
addressLine1: string;
addressLine2: string;
city: string;
zip: string;
reservationFee: number;
reservationFeeTax: number;
description: string;
monthlyRate: number;

tenantData = {
  objTenant: {}
};


MoveIn = {
  dteMoveIn: '',
  intUnitTypeID: 0,
};

unitData = {

};
canExit = true;
navTo: any;
period: string;
showAltDetails = false;
public destroyed = new Subject<any>();


private  addTenantSubscribe$: Subscription;
private  updateTenantSubscribe$: Subscription;
private  makeAReservationSubscribe$: Subscription;
private  getTenantInfoSubscribe$: Subscription;
private  signOutSubscribe$: Subscription;




constructor(
  public router: Router,
  private dataSharingService: DataSharingService,
  private moveInService: MoveInService,
  private makeAReservationService: MakeAReservationService,
  private addTenantService: AddTenantService,
  private tenantInfoService: TenantInfoService,
  private signOutService: SignOutService,
  private datePipe: DatePipe,
) {
  this.fetchOption();
  this.fetchSharedData();
  
}

ngOnInit() {
  this.getTenantUnitData();
  this.showAltDetails = this.dataSharingService.showAltDetails;
  this.showMilitaryDetails = this.dataSharingService.showMilitaryDetails;
}

fetchSharedData() {
  this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
  this.navigateToReserve  = this.dataSharingService.navigateToReserve;
  this.tenantData.objTenant = this.dataSharingService.objTenant;
  console.log('this.dataSharingService.objTenant',this.dataSharingService.objTenant );
  this.unitData = this.dataSharingService.LstUnitTypes;
  this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
  this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
  this.isValueUpdated = this.dataSharingService.isValueUpdated;
  this.totalTaxAmount = this.dataSharingService.MoveInData.TotalTaxAmount;
  this.totalChargesAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
  this.period = this.dataSharingService.period;
}

public fetchOption() {
  this.options = option;
  this.option1 = option1;
  if (!!this.dataSharingService.objTenant.State) {
    this.index = JSON.stringify(this.options.findIndex(x => x.id === this.dataSharingService.objTenant.State));
    if (!!this.options) {
      this.stateString = this.options[this.index].description;
    }
   }

   if (!!this.dataSharingService.objTenant.AlternateState) {
    this.alternateIndex = JSON.stringify(this.options.findIndex(x => x.id === this.dataSharingService.objTenant.AlternateState));
    if (!!this.alternateIndex) {
      this.alternateStateString = this.options[this.alternateIndex].description;
    } else {
      this.alternateIndex = JSON.stringify(this.options1.findIndex(x => x.id === this.dataSharingService.objTenant.AlternateState));
      this.alternateStateString = this.options1[this.alternateIndex].description; 
    }
   }
}
@HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }

public navigateToPrevious() {
  if (this.dataSharingService.navigateToMoveIn) {
    this.router.navigate([`${environment.locationName}/view-rates/move-in`]);
  } else {
    if (this.dataSharingService.navigateToReserve) {
      this.router.navigate([`${environment.locationName}/view-rates/reserve`]);
    }
  }
}

public hasUnsavedData() {
  return this.canExit;
}



public navigate(location: any) {
  this.router.navigate([location]);
}



getTenantUnitData() {
  this.firstName = this.dataSharingService.objTenant.FirstName;
  this.lastName = this.dataSharingService.objTenant.LastName;
  this.phone = this.dataSharingService.objTenant.Phone;
  this.emailAddress = this.dataSharingService.objTenant.EmailAddress;
  this.addressLine1  = this.dataSharingService.objTenant.AddressLine1;
  this.addressLine2 = this.dataSharingService.objTenant.AddressLine2;
  this.city = this.dataSharingService.objTenant.City;
  this.zip = this.dataSharingService.objTenant.ZIP;
  this.alternateName = this.dataSharingService.objTenant.AlternateName;
  this.alternatePhone = this.dataSharingService.objTenant.AlternatePhone;
  this.alternateAddressLine1 = this.dataSharingService.objTenant.AlternateAddressLine1;
  this.alternateAddressLine2 = this.dataSharingService.objTenant.AlternateAddressLine2;
  this.alternateCity = this.dataSharingService.objTenant.AlternateCity;
  this.alternateState = this.dataSharingService.objTenant.AlternateState;
  this.alternateZIP = this.dataSharingService.objTenant.AlternateZIP;
  this.reservationFee = this.dataSharingService.LstUnitTypes.ReservationFee;
  this.reservationFeeTax = this.dataSharingService.LstUnitTypes.ReservationFeeTax;
  this.description = this.dataSharingService.LstUnitTypes.Description;
  this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
  this.driversLicense = this.dataSharingService.objTenant.DriversLicense;
  this.driversLicenseExpDate = this.datePipe.transform(this.dataSharingService.objTenant.DriversLicenseExpDate, 'MM/dd/yyyy');
  this.dateOfBirth = this.datePipe.transform(this.dataSharingService.objTenant.DateOfBirth, 'MM/dd/yyyy');
  this.militaryType = this.dataSharingService.objTenant.MilitaryType;
  this.militaryBranch = this.dataSharingService.objTenant.MilitaryBranch;
  this.militaryID = this.dataSharingService.objTenant.MilitaryID;
  this.deployedUntil = this.datePipe.transform(this.dataSharingService.objTenant.DeployedUntil, 'MM/dd/yyyy');
  this.militaryDivision = this.dataSharingService.objTenant.MilitaryDivision;
  this.commandingOfficer = this.dataSharingService.objTenant.CommandingOfficer;
  this.commandingOfficerPhone = this.dataSharingService.objTenant.CommandingOfficerPhone;

}

  addTenant(data: any): void {
    this.addTenantSubscribe$ = this.addTenantService.addTenant(data)
      .subscribe(result => {
        if (result.intErrorCode === 1) {
          localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
          if (this.navigateToMoveIn ) {
              this.moveIn(this.MoveIn);
          } else {
            if (this.navigateToReserve) {
                this.makeAReservation(this.MoveIn);
            }
          }
        }
    });
  }

  updateTenant(data: any) {
    this.updateTenantSubscribe$ = this.tenantInfoService.updateTenant(data)
    .subscribe(result => {
      if (result.intErrorCode === 1 ) {
        if (this.navigateToMoveIn ) {
          if (this.dataSharingService.MoveInData.TotalChargesAmount > 0 ) {
            this.router.navigate([`${environment.locationName}/view-rates/payMoveInCharges`]);
          } else {
            this.moveIn(this.MoveIn);
          }
        } else {
          if (this.navigateToReserve) {
            if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
              this.router.navigate([`${environment.locationName}/view-rates/payReservationCharges`]);
            } else {
              this.makeAReservation(this.MoveIn);
            }
          }
        }
      }
    });
  }

    makeAReservation(strConfirmation: any) {
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
    this.reservationInProgress = true;
    this.makeAReservationSubscribe$ =  this.makeAReservationService.makeAReservation(strConfirmation)
      .subscribe(strConfirmationResponse => {
        if (strConfirmationResponse.intErrorCode === 1) {
          this.dataSharingService.strConfirmation = strConfirmationResponse.strConfirmation;
          this.dataSharingService.eventName = 'reservation';
          if (localStorage.getItem('strTempTenantToken')) {
            localStorage.removeItem('strTempTenantToken');
          }
          // this.showConfirmation = false;
          this.router.navigate([`${environment.locationName}/view-rates/thank-you`]);
          this.reservationInProgress = false;
        }
      }, (err: any) => {
        if (err.status === 403) {
          this.showConfirmation = false;
          this.showMoveInDateError = true;
        } else {
          if (err.status === 401 ) {
            localStorage.removeItem('strTempTenantToken');
          }
        }
        this.reservationInProgress = false;
      }
      );
    }

    convertDate(date: any) {
      const formattedNormalDate = new Date(date);
      // tslint:disable-next-line:max-line-length
      return `${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
    }

    moveIn(strAccessCode: any) {
      this.reservationInProgress = true;
      this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
      this.MoveIn.dteMoveIn = this.convertDate(new Date());
      this.MoveIn['blnGenerateDocuments'] = true;
      this.makeAReservationSubscribe$ =  this.moveInService.moveIn(strAccessCode)
        .subscribe(strConfirmationResponse => {
          if (strConfirmationResponse.intErrorCode === 1) {
            this.dataSharingService.strAccessCode = strConfirmationResponse.strAccessCode;
            this.dataSharingService.eventName = 'MoveIn';
            if (localStorage.getItem('strTempTenantToken')) {
              localStorage.removeItem('strTempTenantToken');
            }
            this.router.navigate([`${environment.locationName}/view-rates/thank-you`]);
            this.reservationInProgress = false;
          }
        }, (err: any) => {
          if (err.status === 403) {
            this.showConfirmation = false;
          } else {
            if (err.status === 401 ) {
              localStorage.removeItem('strTempTenantToken');
            }
            if (err.status === 500 ) {
              this.unitTypeNotAvailability = true;
            }
          }
          this.reservationInProgress = false;
        }
        );
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

    onSubmit() {
      if (window.localStorage) {
        if (localStorage.getItem('strTenantToken')) {
          this.existingTenantToken = localStorage.getItem('strTenantToken');
        } else {
          this.existTempToken = localStorage.getItem('strTempTenantToken');
        }
      }
      this.submitted = true;
      this.showConfirmation = true;
      this.reservationInProgress = true;
        if (this.existingTenantToken) {
          if (!this.isValueUpdated) {
            if (this.navigateToMoveIn === true) {
              if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                this.router.navigate([`${environment.locationName}/view-rates/payMoveInCharges`]);
              } else {
                this.moveIn(this.MoveIn);
              }
            } else {
              if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
                this.router.navigate([`${environment.locationName}/view-rates/payReservationCharges`]);
               } else {
                 this.makeAReservation(this.MoveIn);
               }
            }
          } else {
            this.updateTenant(this.tenantData);
          }
        } else {
          if (this.existTempToken) {
            if (!this.isValueUpdated) {
              if (this.navigateToMoveIn === true) {
                if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                  this.router.navigate([`${environment.locationName}/view-rates/payMoveInCharges`]);
                } else {
                  this.moveIn(this.MoveIn);
                }
              } else {
                if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
                  this.router.navigate([`${environment.locationName}/view-rates/payReservationCharges`]);
                 } else {
                   this.makeAReservation(this.MoveIn);
                 }
              }
            }
          } else {
            if (this.navigateToMoveIn === true) {
              if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                this.dataSharingService.addingTenant = true;
                this.router.navigate([`${environment.locationName}/view-rates/payMoveInCharges`]);
              } else {
                this.addTenant(this.tenantData);
              }
            } else {
              if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
                this.dataSharingService.addingTenant = true;
                this.dataSharingService.addingTenant = true;
                this.router.navigate([`${environment.locationName}/view-rates/payReservationCharges`]);
               } else {
                this.addTenant(this.tenantData);
              }
            }
          }
        }
    }

    public ngOnDestroy(): void {
      if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
        this.getTenantInfoSubscribe$.unsubscribe();
      }
      if (this.updateTenantSubscribe$ && this.updateTenantSubscribe$.closed) {
        this.updateTenantSubscribe$.unsubscribe();
      }
      if (this.makeAReservationSubscribe$ && this.makeAReservationSubscribe$.closed) {
        this.makeAReservationSubscribe$.unsubscribe();
      }
      if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
        this.signOutSubscribe$.unsubscribe();
      }
      this.destroyed.next();
      this.destroyed.complete();
    }
}
