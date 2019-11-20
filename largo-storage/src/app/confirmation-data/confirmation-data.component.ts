import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DataSharingService } from '../services/data-sharing.service';
import { Router } from '@angular/router';
import { MoveInService } from '../services/moveIn.service';
import { MakeAReservationService } from '../services/make-a-reservation.service';
import { AddTenantService } from '../services/add-tenant.service';
import { TenantInfoService } from '../services/tenant-info.service';
import { Subscription } from 'rxjs';
import { option } from '../data/view-rates';


@Component({
  selector: 'app-confirmation-data',
  templateUrl: './confirmation-data.component.html',
  styleUrls: ['./confirmation-data.component.scss']
})
export class ConfirmationDataComponent implements OnInit {


@Input()  reserveUnitForm: FormGroup;

@Input() submitted = false;

@Input() showConfirmation = false;

@Input() TotalChargesAmount: number;

@Input() TotalTaxAmount: number;

@Input() clickedMoveIn: boolean;

@Input() defaultTotalChargesAmount: number;

@Input() defaultTotalTaxAmount: number;

@Input() RateTax: number;

index: string;

options = [ {
  description: '',
  id: ''
}]

stateString: string;
MoveInString: string;
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
formattedMoveInDate: any;

unitTypeNotAvailability = false;

tenantData = {
  objTenant: {}
}


MoveIn = {
  dteMoveIn: '',
  intUnitTypeID: 0,
};

unitData = {

}

MoveInData: {
  // Toa
}

period: string;


private  addTenantUnsubscribe$: Subscription;
private  updateTenantUnsubscribe$: Subscription;
private  makeAReservationUnsubscribe$: Subscription;
private  getTenantInfoUnsubscribe$: Subscription;
  

constructor(
  private datePipe: DatePipe,
  private  dataSharingService: DataSharingService,
  public router: Router,
  private moveInService: MoveInService,
  private makeAReservationService: MakeAReservationService,
  private addTenantService: AddTenantService,
  private tenantInfoService: TenantInfoService,

) { 

  this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
  this.navigateToReserve  = this.dataSharingService.navigateToReserve;
  this.tenantData.objTenant = this.dataSharingService.objTenant;
  this.unitData = this.dataSharingService.LstUnitTypes;
  this.fetchOption();

  this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
  this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;

  this.isValueUpdated = this.dataSharingService.isValueUpdated;

  console.log("is any value updated", this.isValueUpdated);
  this.TotalTaxAmount = this.dataSharingService.MoveInData.TotalTaxAmount;
  this.TotalChargesAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
  console.log("unit data", this.unitData);

  console.log("unit type id", this.dataSharingService.LstUnitTypes.UnitTypeID);
  
  
  
  this.period = this.dataSharingService.period;
}



public fetchOption() {
  this.options = option;
   this.index = JSON.stringify(this.options.findIndex(x => x.id === this.dataSharingService.objTenant.State));
  this.stateString = this.options[this.index].description;
}

public navigateToPrevious(location: any) {
  this.router.navigate([location]);
}

FirstName: string;
LastName: string;
Phone: string;
EmailAddress: string;
AddressLine1: string;
AddressLine2: string;
City: string;
ZIP: string;
ReservationFee: number;
ReservationFeeTax: number;
Description: string;
MonthlyRate: number;

  ngOnInit() {

    this.FirstName = this.dataSharingService.objTenant.FirstName;
    this.LastName = this.dataSharingService.objTenant.LastName;
    this.Phone = this.dataSharingService.objTenant.Phone;
    this.EmailAddress = this.dataSharingService.objTenant.EmailAddress;
    this.AddressLine1  = this.dataSharingService.objTenant.AddressLine1;
    this.AddressLine2 = this.dataSharingService.objTenant.AddressLine2;
    this.City = this.dataSharingService.objTenant.City;
    this.ZIP = this.dataSharingService.objTenant.ZIP;
    this.ReservationFee = this.dataSharingService.LstUnitTypes.ReservationFee;
    this.ReservationFeeTax = this.dataSharingService.LstUnitTypes.ReservationFeeTax;
    this.Description = this.dataSharingService.LstUnitTypes.Description;
    this.MonthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
  }

  addTenant(data: any): void {
    this.addTenantUnsubscribe$ =  this.addTenantService.addTenant(data)
        .subscribe(result => {
        localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
        // if (this.clickedMoveIn == true) { 
        //   if( this.proRateAmount) {
  
        //   } else {
        //     this.moveIn(this.MoveIn);
        //   }
        // } else {
        //   if(this.ReservationFee > 0) {
        //     this.showPaymentPage = true;
         
        //     this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
        //     this.makeAReservation(this.MoveIn);
        //   } else {
        //     this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
        //     this.makeAReservation(this.MoveIn);
        //   }
        // }
        if (this.navigateToMoveIn ) {
          if(this.dataSharingService.MoveInData.TotalChargesAmount > 0 ) {
            this.router.navigate(['/view-rates/payMoveInCharges']);
          }

        } else {
          if(this.navigateToReserve) {
            if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
              this.router.navigate(['/view-rates/payReservationCharges']);
            }
          }
        }
      });
    }
  
    updateTenant(data: any) {
     this.updateTenantUnsubscribe$ = this.tenantInfoService.updateTenant(data)
        .subscribe(result => {
          if (this.navigateToMoveIn) { 
            this.moveIn(this.MoveIn); 
          } else {
            // this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
            if(this.navigateToReserve) {
              this.makeAReservation(this.MoveIn);
            }
          }
        });
    }
  
    makeAReservation(strConfirmation: any) {
      // this.MoveIn.dteMoveIn = this.formattedMoveInDate;
    this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
    this.reservationInProgress = true;
    this.makeAReservationUnsubscribe$ =  this.makeAReservationService.makeAReservation(strConfirmation)
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
          // this.count = 0;
          // localStorage.removeItem('strTempTenantToken');
        } else {
          if (err.status === 401 ) {
            localStorage.removeItem('strTempTenantToken');
            // this.count = 0;
          }
        }
        this.reservationInProgress = false;
      }
      );
    }
  
    moveIn(strAccessCode: any) {
      this.reservationInProgress = true;
      this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;

      this.makeAReservationUnsubscribe$ =  this.moveInService.moveIn(strAccessCode)
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
            // this.count = 0;
            // localStorage.removeItem('strTempTenantToken');
          } else {
            if (err.status === 401 ) {
              localStorage.removeItem('strTempTenantToken');
              // this.count = 0;
            }
            if (err.status === 500 ) {
              // this.count = 0;
              this.unitTypeNotAvailability = true;
            }
          }
          this.reservationInProgress = false;
        }
        );
      }
  
      
    // signOut(logOut: any) {
    //   this.signOutService.signOut(logOut)
    //   .subscribe( result => {
    //     localStorage.removeItem('strTenantToken');
    //     if (!(localStorage.getItem('strTenantToken'))) {
    //       this.router.navigate(['/']);
    //     }
    //   }, (err) => {
    //   }
    //   );
    // }
  
    onSubmit() {

      console.log("clicked on submit");
      
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
            if(this.navigateToMoveIn == true) {
              if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                this.router.navigate(['/view-rates/payMoveInCharges']);
              } else {
                this.moveIn(this.MoveIn);
              }
            } else {
              // this.MoveIn.dteMoveIn = this.formattedMoveInDate;
              if (this.dataSharingService.LstUnitTypes.ReservationFee  > 0 ) {
                this.router.navigate(['/view-rates/payReservationCharges']);
               } else {
                 this.makeAReservation(this.MoveIn);
               }
            }
          } else {
            this.updateTenant(this.tenantData);
          }
        } else {
          if (this.existTempToken) {
            if (this.navigateToMoveIn == true) {
              this.moveIn(this.MoveIn);
            } else {
              this.MoveIn.dteMoveIn = this.formattedMoveInDate;
              this.makeAReservation(this.MoveIn);
            }
          } else {
            this.addTenant(this.tenantData);
            this.MoveIn.dteMoveIn = this.formattedMoveInDate;
          }
        }
    }
  
    public ngOnDestroy(): void {
    
      if (this.getTenantInfoUnsubscribe$ && this.getTenantInfoUnsubscribe$.closed) {
        this.getTenantInfoUnsubscribe$.unsubscribe();
      }
      if (this.addTenantUnsubscribe$ && this.addTenantUnsubscribe$.closed) {
        this.addTenantUnsubscribe$.unsubscribe();
      }
      if (this.updateTenantUnsubscribe$ && this.updateTenantUnsubscribe$.closed) {
        this.updateTenantUnsubscribe$.unsubscribe();
      }
      if (this.makeAReservationUnsubscribe$ && this.makeAReservationUnsubscribe$.closed) {
        this.makeAReservationUnsubscribe$.unsubscribe();
      }
    }

}
