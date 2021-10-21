import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { MoveInService } from '../services/moveIn.service';
import { MakeAReservationService } from '../services/make-a-reservation.service';
import { AddTenantService } from '../services/add-tenant.service';
import { TenantInfoService } from '../services/tenant-info.service';
import { Subscription } from 'rxjs';
import { option } from '../data/view-rates';
import { SignOutService } from '../services/sign-out.service';



@Component({
  selector: 'app-confirmation-data',
  templateUrl: './confirmation-data.component.html',
  styleUrls: ['./confirmation-data.component.scss']
})


export class ConfirmationDataComponent implements OnInit, OnDestroy {

  reserveUnitForm: FormGroup;
  submitted = false;
  showConfirmation = false;
  totalChargesAmount: number;
  totalTaxAmount: number;
  clickedMoveIn: boolean;
  defaultTotalChargesAmount: number;
  defaultTotalTaxAmount: number;

  index: string;

  options = [{
    description: '',
    id: ''
  }];

  stateString: string;
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
  myNavLinks: any;
  showMilitaryDetails:any;
  alternateName: String;
  alternatePhone: String;
  alternateAddressLine1: String;
  alternateAddressLine2: string;
  alternateCity: string;
  alternateState: string;
  alternateZIP: string;
  driversLicense:any;
  driversLicenseExpDate:any;
  dateOfBirth:any;

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

  period: string;
  showAltDetails = false;
  navTo: any;


  private addTenantSubscribe$: Subscription;
  private updateTenantSubscribe$: Subscription;
  private makeAReservationSubscribe$: Subscription;
  private getTenantInfoSubscribe$: Subscription;
  private signOutSubscribe$: Subscription;

  constructor(
    public router: Router,
    private dataSharingService: DataSharingService,
    private moveInService: MoveInService,
    private makeAReservationService: MakeAReservationService,
    private addTenantService: AddTenantService,
    private tenantInfoService: TenantInfoService,
    private signOutService: SignOutService,
  ) {
    this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
    this.navigateToReserve = this.dataSharingService.navigateToReserve;
    this.tenantData.objTenant = this.dataSharingService.objTenant;
    this.unitData = this.dataSharingService.LstUnitTypes;

    this.fetchOption();

    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
    this.isValueUpdated = this.dataSharingService.isValueUpdated;
    this.totalTaxAmount = this.dataSharingService.MoveInData.TotalTaxAmount;
    this.totalChargesAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
    this.period = this.dataSharingService.period;

    /* window.addEventListener('beforeunload', (event) => {
      if (this.router.url.substring('confirmation')) {
        event.returnValue = 'You have unfinished changes!';
      }
    }); */
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    $event.returnValue = true;
  }




  public fetchOption() {
    this.options = option;
    this.index = JSON.stringify(this.options.findIndex(x => x.id === this.dataSharingService.objTenant.State));
    this.stateString = this.options[this.index].description;
  }

  public navigateToPrevious() {
    this.router.navigate([this.dataSharingService.navigateToPrevious]);
  }

  public hasUnsavedData() {
    return this.canExit;
  }


  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.firstName = this.dataSharingService.objTenant.FirstName;
    this.lastName = this.dataSharingService.objTenant.LastName;
    this.phone = this.dataSharingService.objTenant.Phone;
    this.emailAddress = this.dataSharingService.objTenant.EmailAddress;
    this.addressLine1 = this.dataSharingService.objTenant.AddressLine1;
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
    this.navTo = this.dataSharingService.navigationTo;
    this.dataSharingService.initMyNavLinks('confirmationData', window.location.pathname);

    this.myNavLinks = this.dataSharingService.getMyNavLinks('confirmationData');
    this.showAltDetails = this.dataSharingService.showAltDetails;
    this.showMilitaryDetails = this.dataSharingService.showMilitaryDetails;
    this.driversLicense = this.dataSharingService.objTenant.DriversLicense;
    this.driversLicenseExpDate = this.dataSharingService.objTenant.DriversLicenseExpDate;
    this.dateOfBirth = this.dataSharingService.objTenant.DateOfBirth;
  }

  addTenant(data: any): void {
    this.addTenantSubscribe$ = this.addTenantService.addTenant(data)
      .subscribe(result => {
        localStorage.setItem('strTempTenantToken', result.strTempTenantToken);

        if (this.navigateToMoveIn) {
          if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
            this.router.navigate([`${this.navTo}/payMoveInCharges`]);
          } else {
            this.moveIn(this.MoveIn);
          }
        } else {
          if (this.navigateToReserve) {
            if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
              this.router.navigate([`${this.navTo}/payReservationCharges`]);
            } else {
              this.makeAReservation(this.MoveIn);
            }
          }
        }
      });
  }

  updateTenant(data: any) {
    this.updateTenantSubscribe$ = this.tenantInfoService.updateTenant(data)
      .subscribe(result => {
        if (this.navigateToMoveIn) {
          if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
            this.router.navigate([`${this.navTo}/payMoveInCharges`]);
          } else {
            this.moveIn(this.MoveIn);
          }
        } else {
          if (this.navigateToReserve) {
            if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
              this.router.navigate([`${this.navTo}/payReservationCharges`]);
            } else {
              this.makeAReservation(this.MoveIn);
            }
          }
        }
      });
  }

  makeAReservation(strConfirmation: any) {
    this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
    this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
    this.reservationInProgress = true;
    this.makeAReservationSubscribe$ = this.makeAReservationService.makeAReservation(strConfirmation)
      .subscribe(strConfirmationResponse => {
        this.strConfirmation = strConfirmationResponse.strConfirmation;
        this.showConfirmation = false;
        this.submitted = false;
        this.tokenExit = localStorage.getItem('strTenantToken');
        this.existTempToken = localStorage.getItem('strTempTenantToken');
        if (this.existTempToken) {
          localStorage.removeItem('strTempTenantToken');
        }
        this.reservationInProgress = false;
      }, (err: any) => {
        if (err.status === 403) {
          this.showConfirmation = false;
          this.showMoveInDateError = true;
        } else {
          if (err.status === 401) {
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
    this.makeAReservationSubscribe$ = this.moveInService.moveIn(strAccessCode)
      .subscribe(strConfirmationResponse => {
        this.strAccessCode = strConfirmationResponse.strAccessCode;
        this.submitted = false;
        this.tokenExit = localStorage.getItem('strTenantToken');
        this.existTempToken = localStorage.getItem('strTempTenantToken');
        if (this.existTempToken) {
          localStorage.removeItem('strTempTenantToken');
        }
        this.reservationInProgress = false;
      }, (err: any) => {
        if (err.status === 403) {
          this.showConfirmation = false;
        } else {
          if (err.status === 401) {
            localStorage.removeItem('strTempTenantToken');
          }
          if (err.status === 500) {
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

  updateNavigation(location: any) {
    this.dataSharingService.updateMyNavLink('confirmationData', 'next', `${this.navTo}/${location}`);
    this.dataSharingService.updateMyNavLink('confirmationData', 'prev', `${this.navTo}/view-rates`);
  }

  onSubmit() {
    this.updateNavigation('confirmation');
    if (window.localStorage) {
      const loginUrl = localStorage.getItem('paymentNavigationUrl');
      if (localStorage.getItem('strTenantToken') && (this.router.url.includes(`${loginUrl}`))) {
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
              this.router.navigate([`${this.navTo}/payMoveInCharges`]);
            } else {
              this.moveIn(this.MoveIn);
            }
          } else {
            if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
              this.router.navigate([`${this.navTo}/payReservationCharges`]);
             } else {
               this.makeAReservation(this.MoveIn);
             }
          }
        } else {
          this.updateTenant(this.tenantData);
        }
      } else {
        if (this.existTempToken) {
          // if (this.navigateToMoveIn === true) {
          //   this.moveIn(this.MoveIn);
          // } else {
          //   // this.MoveIn.dteMoveIn = this.formattedMoveInDate;
          //   this.makeAReservation(this.MoveIn);
          // }
          if (!this.isValueUpdated) {
            if (this.navigateToMoveIn === true) {
              if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                this.router.navigate([`${this.navTo}/payMoveInCharges`]);
              } else {
                this.moveIn(this.MoveIn);
              }
            } else {
              if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
                this.router.navigate([`${this.navTo}/payReservationCharges`]);
               } else {
                 this.makeAReservation(this.MoveIn);
               }
            }
          }
        } else {
          // this.addTenant(this.tenantData);
          // this.MoveIn.dteMoveIn = this.formattedMoveInDate;
          if (this.navigateToMoveIn === true) {
            if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
              this.dataSharingService.addingTenant = true;
              this.router.navigate([`${this.navTo}/payMoveInCharges`]);
            } else {
              this.addTenant(this.tenantData);
            }
          } else {
            if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
              this.dataSharingService.addingTenant = true;
              this.dataSharingService.addingTenant = true;
              this.router.navigate([`${this.navTo}/payReservationCharges`]);
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
    if (this.addTenantSubscribe$ && this.addTenantSubscribe$.closed) {
      this.addTenantSubscribe$.unsubscribe();
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
    window.removeEventListener('beforeunload', (event) => {

    });
  }
}
