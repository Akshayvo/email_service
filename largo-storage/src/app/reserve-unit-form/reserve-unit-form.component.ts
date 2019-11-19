import { Component, OnInit, Input, OnDestroy, ViewEncapsulation, Output, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

import { AddTenantService } from '../services/add-tenant.service';
import { FetchDataService } from '../services/fetch-data.service';

import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant, StrTempTenantToken } from '../models/tenant';
import { SignOutService } from '../services/sign-out.service';
import { Router } from '@angular/router';
import { MakeAReservationService } from '../services/make-a-reservation.service';



import { option } from '../data/view-rates';

import { DatePipe } from '@angular/common';

import { TenantInfoService } from '../services/tenant-info.service';
import { LeadDaysService } from '../services/lead-days.service';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { MoveInService } from '../services/moveIn.service';
import { PayRentFormComponent } from '../pay-rent-form/pay-rent-form.component';

@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss'],
  providers:[DatePipe],
})

export class ReserveUnitFormComponent implements OnInit, OnDestroy {

  get f() { return this.reserveUnitForm.controls; }

  // @ViewChild(PayRentFormComponent) childReference;

  @Input() DescriptionVR: string;
  @Input() MonthlyRateVR: number;
  @Input() proRateAmount?: number;
  @Input() curStage: number;
  @Input() Deposit?: number;
  @Input() DepositTax?: number;
  @Input() ProrateAmtTax?: number;
  @Input() OthDeposit?: number;
  @Input() Setup?: number;
  @Input() SetupTax?: number;
  @Input() RateTax?: number;
  @Input() clickedMoveIn?: boolean;
  @Input() defaultTotalTaxAmount?: number;
  @Input() defaultTotalChargesAmount?: number;
  @Input() unitTypeIdVR: number;
  @Input() showPaymentForMoveIn: boolean;
  @Input() showPaymentForReserve: boolean;

  unitTypes: UnitTypes;
  lstUnitTypes: LstUnitTypes[];
  rentalPeriod: RentalPeriod;
  LstRentalPeriods: LstRentalPeriods[];
  objTenant: ObjTenant;
  objTenantDetail: ObjTenantDetail;

  strTempTenantToken: StrTempTenantToken;

  strConfirmation: string;

  // strAccessCode: string;

  successMessage = false;

  dataModel: any;

  objTenantCopy: any;

  count = 0;

  option =  [];
  reserveUnitForm: FormGroup;

  tokenExit: string;

  submitted = false;
  rate: string;
  PeriodDescription: string;
  selectedDescription: string;
  ReservationFee: number;
  ReservationFeeValue: number;
  ReservationFeeTax: number;
  reservationInProgress = false;
  MonthlyRateValue: number;
  defaultReservationFee: number;
  defaultReservationFeeTax: number;
  defaultValue: number;
  unitTypeId: number;
  currentdate: Date;
  currentDate: string;
  minDate: Date;
  maxDate: Date;
  MinDate: string;
  MaxDate: string;
  From: string;
  To: string;

  showConfirmation = false;
  showMoveInDateError = false;
  options: any;

  minDay: number;
  maxDay: number;


  MoveInStringParent: string;

  tenant: any;
  optionAbbreviation: any;

  valueOfString: any;

  isValueUpdated = true;
  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };

  examplaParent: string;

  existingTenantToken: string;
  existTempToken: string;
  data: any;

  intLeadDaysFrom: number;
  intLeadDaysTo: number;

  logOut = {};

  TotalTaxAmount: number;
  TotalChargesAmount: number;
  ProrateTax: number;
  strAccessCode: string;
  parentShowSuccessPayment: Boolean;
  unitTypeNotAvailability = false;
  // ProrateAmt: any;

  showPaymentPage = false;

  private  getLeadDaysUnsubscribe$: Subscription;
  private  getTenantInfoUnsubscribe$: Subscription;
  private  getDataUnsubscribe$: Subscription;
  private  getRentalPeriodUnsubscribe$: Subscription;
  private  addTenantUnsubscribe$: Subscription;
  private  updateTenantUnsubscribe$: Subscription;
  private  makeAReservationUnsubscribe$: Subscription;
  private  signOutUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private addTenantService: AddTenantService,
    private fetchDataService: FetchDataService,
    private signOutService: SignOutService,
    private makeAReservationService: MakeAReservationService,
    private tenantInfoService: TenantInfoService,
    public router: Router,
    private datePipe: DatePipe,
    private leadDaysService: LeadDaysService,
    private moveInService: MoveInService,
    ) {
    this.reserveUnitForm = this.formBuilder.group({
      objTenant: this.formBuilder.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Phone: ['', [Validators.required,
        Validators.pattern(
          '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$'
          )
      ]],
        EmailAddress: ['', [Validators.required, Validators.email]],
        AddressLine1: ['', Validators.required],
        AddressLine2: [''],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZIP: ['', Validators.required],
      }),

      lstUnitTypes: new FormArray([
        this.initLstUnitTypes(),
      ]),

      lstRentalPeriods: new FormArray([
        this.initPeriodDescription(),
      ]),
      dteMoveIn: ['', 
      conditionalValidator(
        (() => this.clickedMoveIn === true),
        Validators.required
      )
    ],
    });
    

    function conditionalValidator(condition: (() => boolean), validator: ValidatorFn): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {
        if (condition()) {
          return null;
        }
        return validator(control);
      }
    }

    this.MoveInStringParent = this.datePipe.transform(this.reserveUnitForm.value.dteMoveIn, 'yyyy-MM-dd');
  }

  
  initPeriodDescription() {
    return this.formBuilder.group({
      PeriodDescription: ['']
    });
  }

  initLstUnitTypes() {
    return this.formBuilder.group({
      Description: [''],
      MonthlyRate: [''],
      ReservationFee: [''],
    });
  }


  // ngAfterViewInit() {
  //   this.parentShowSuccessPayment = this.childReference.showSuccessPayment;
  // }

  ngOnInit() {
    this.getData();
    this.getRentalPeriod();
    this.getLeadDays(this.data);
// console.log(this.intLeadDaysFrom, this.intLeadDaysTo);
this.MoveIn.intUnitTypeID = this.unitTypeIdVR;

console.log("clicked movein", this.clickedMoveIn);

console.log("unitTypeIdVR", this.unitTypeIdVR, "unit id ", this.MoveIn.intUnitTypeID);


    this.currentdate = new Date();

    this.fetchUSState();



    // this.minDay = this.From.getDate();
    // this.maxDay = this.To.getDate();
    if (window.localStorage) {
      if (localStorage.getItem('strTenantToken')) {
        this.getTenantInfo();
      }
    }


    console.log(this.DescriptionVR, this.MonthlyRateVR);

    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        Description: this.DescriptionVR,
        MonthlyRate: this.MonthlyRateVR,
        ReservationFee: this.ReservationFee,
      }])
    });
  }

    public fetchUSState() {
    // this.option = option.map(x => x.name);
    this.option = option;
    }

  dateClass = (d: Date) => {
    const date = d.getDate();
    console.log(this.minDay, this.maxDay, date);
    // Highlight the 1st and 20th day of each month.
    // return ( this.minDay <= date && date <= this.maxDay) ? 'example-custom-date-class' : undefined;
    return ( date === 27 || date === 28) ? `example-custom-date-class` : undefined;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  close() {
    this.unitTypeNotAvailability = false;
    console.log("close os working");
    
  }


  handleClick() {
    this.submitted = true;
    if (this.reserveUnitForm.invalid) {
      return;
    } else {
      if (this.count <= 1 ) {
        this.count = this.count + 1;

        this.reserveUnitForm.patchValue({
          dteMoveIn: this.datePipe.transform(this.reserveUnitForm.value.dteMoveIn, 'yyyy-MM-dd')
        });
      }
    }
  }

  handlePrevious() {
    if (this.count >= 0) {
      this.count = this.count - 1;
      // this.currentDate = this.reserveUnitForm.value.dteMoveIn;
    }
  }

  selectionChanged(event: any) {
    // this.valueOfString = option.find(x => x.name === event.value);
  }

  selectChangeHandler (event: any) {

    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue  = event.target.value;
    const  index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);
    this.MonthlyRateValue = this.lstUnitTypes[index].MonthlyRate;
    this.unitTypeId = this.lstUnitTypes[index].UnitTypeID;
    this.ReservationFee = this.lstUnitTypes[index].ReservationFee;
    this.ReservationFeeTax = this.lstUnitTypes[index].ReservationFeeTax;
    console.log(this.unitTypeId, "reservation fee", this.ReservationFeeValue);
    
    this.MoveIn.intUnitTypeID = this.unitTypeId;
    
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        MonthlyRate: this.MonthlyRateValue,
      }
    ])
  });
  if(this.curStage === 2) {
    this.getMoveInCharges(this.unitTypeId);
  }
  }

  getMoveInCharges(intUnitTypeID: any) {
    this.moveInService.getMoveInCharges({
      intUnitTypeID
    }).subscribe(result => {
      // const {objCharges: { ProrateAmt = 0}} = result;
      // this.proRateAmount = ProrateAmt;
      
      const {objCharges: { 
        ProrateAmt = 0, 
        Deposit = 0, 
        DepositTax = 0,
        Rate = 0,
        RateTax= 0,
        ProrateAmtTax = 0,
        OthDeposit = 0,
        Setup = 0,
        SetupTax = 0,
        TotalTaxAmount = 0,
        TotalChargesAmount = 0,
       }} = result;
      this.proRateAmount = ProrateAmt;
      this.Deposit = Deposit;
      this.DepositTax = DepositTax;
      this.RateTax = RateTax;
      this.ProrateAmtTax = ProrateAmtTax;
      this.OthDeposit = OthDeposit;
      this.Setup = Setup;
      this.SetupTax = SetupTax;
      this.TotalTaxAmount = TotalTaxAmount;
      this.TotalChargesAmount = TotalChargesAmount;

    }, err => {
      console.error('Error while fetching moveIn Charges', err);
    });
}


  getLeadDays(data: any) {
    this.getLeadDaysUnsubscribe$ =  this.leadDaysService.getLeadDays(data)
      .subscribe(result => {
        this.intLeadDaysFrom = result.intLeadDaysFrom;
        this.intLeadDaysTo = result.intLeadDaysTo;
        this.From = moment().add(this.intLeadDaysFrom, 'days').format('YYYY-MM-DD');
        this.To = moment().add(this.intLeadDaysTo, 'days').format('YYYY-MM-DD');
      });
    }



  getTenantInfo() {
  this.getTenantInfoUnsubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        if (tenantData) {
          const { Tenant } = tenantData;
          const tempObject = {
            FirstName: Tenant.FirstName,
            LastName: Tenant.LastName,
            Phone: Tenant.Phone,
            EmailAddress: Tenant.EmailAddress,
            AddressLine1: Tenant.AddressLine1,
            AddressLine2: Tenant.AddressLine2,
            City: Tenant.City,
            State: Tenant.State,
            ZIP: Tenant.ZIP,
          };
          this.reserveUnitForm.patchValue({
            objTenant: ({
              FirstName: Tenant.FirstName,
              LastName: Tenant.LastName,
              Phone: Tenant.Phone,
              EmailAddress: Tenant.EmailAddress,
              AddressLine1: Tenant.AddressLine1,
              AddressLine2: Tenant.AddressLine2,
              City: Tenant.City,
              State: Tenant.State,
              ZIP: Tenant.ZIP,
            }),
          });

      this.reserveUnitForm.controls.objTenant.valueChanges.subscribe(data => {
        this.objTenantCopy = data;
        this.isValueUpdated = JSON.stringify(this.objTenantCopy) === JSON.stringify(tempObject);
      }
      );
        }
      }
      , (err: any) => {
        if (err.status === 401) {
          localStorage.removeItem('strTenantToken');
        }
      });
  }

  getData() {
   this.getDataUnsubscribe$ = this.fetchDataService.getData()
      .subscribe(unitTypesResponse => {
      this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
      this.defaultValue = unitTypesResponse.lstUnitTypes[0].MonthlyRate;
      const defaultUnitTypeValue = unitTypesResponse.lstUnitTypes[0].Description;
      this.ReservationFee = unitTypesResponse.lstUnitTypes[0].ReservationFee;
      this.ReservationFeeTax = unitTypesResponse.lstUnitTypes[0].ReservationFeeTax;
      this.MoveIn.intUnitTypeID = this.unitTypeIdVR || unitTypesResponse.lstUnitTypes[0].UnitTypeID;

      if (!this.DescriptionVR && !this.MonthlyRateVR) {
        this.reserveUnitForm.patchValue({
          lstUnitTypes: ([{
            Description: defaultUnitTypeValue,
            MonthlyRate: this.defaultValue,
            ReservationFee: this.defaultReservationFee,
          }])
        });
      }
    });
  }

  getRentalPeriod() {
   this.getRentalPeriodUnsubscribe$ = this.fetchDataService.getRentalPeriod()
      .subscribe(rentalPeriodResponse => {
        this.LstRentalPeriods = rentalPeriodResponse.lstRentalPeriods;
        const defaultPeriodDescription = rentalPeriodResponse.lstRentalPeriods[0].PeriodDescription;
        this.reserveUnitForm.patchValue({
          lstRentalPeriods: ([{
            PeriodDescription: defaultPeriodDescription,
          }])
        });
      }
    );
  }

  addTenant(data: any): void {
  this.addTenantUnsubscribe$ =  this.addTenantService.addTenant(data)
      .subscribe(result => {
      localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
      if (this.clickedMoveIn == true) { 
        if( this.proRateAmount) {

        } else {
          this.moveIn(this.MoveIn);
        }
      } else {
        if(this.ReservationFee > 0) {
          this.showPaymentPage = true;
       

          // console.log("showPaymentPage and confirmation of payment", this.showPaymentPage, this.parentShowSuccessPayment);
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
          this.makeAReservation(this.MoveIn);
        } else {
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
          this.makeAReservation(this.MoveIn);
        }
      }
      console.log(result);
    });
  }

  updateTenant(data: any) {
   this.updateTenantUnsubscribe$ = this.tenantInfoService.updateTenant(data)
      .subscribe(result => {
        console.log(result);
        if (this.clickedMoveIn == true) { 
          this.moveIn(this.MoveIn); 
        } else {
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
          this.makeAReservation(this.MoveIn);
        }
      });
  }

  makeAReservation(strConfirmation: any) {
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
        this.count = 0;
        // localStorage.removeItem('strTempTenantToken');
      } else {
        if (err.status === 401 ) {
          localStorage.removeItem('strTempTenantToken');
          this.count = 0;
        }
      }
      this.reservationInProgress = false;
    }
    );
  }

  moveIn(strAccessCode: any) {
    this.reservationInProgress = true;
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
          this.count = 0;
          // localStorage.removeItem('strTempTenantToken');
        } else {
          if (err.status === 401 ) {
            localStorage.removeItem('strTempTenantToken');
            this.count = 0;
          }
          if (err.status === 500 ) {
            this.count = 0;
            this.unitTypeNotAvailability = true;
          }
        }
        this.reservationInProgress = false;
      }
      );
    }

    
  signOut(logOut: any) {
    this.signOutService.signOut(logOut)
    .subscribe( result => {
      localStorage.removeItem('strTenantToken');
      if (!(localStorage.getItem('strTenantToken'))) {
        console.log('logged out');
        this.router.navigate(['/']);
      }
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
    if (this.reserveUnitForm.invalid) {
      return;
    } else {
      if (this.existingTenantToken) {
        if (this.isValueUpdated) {
          if(this.clickedMoveIn == true) {
            this.moveIn(this.MoveIn);
            console.log("move in", this.clickedMoveIn);
          } else {
            this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
            this.makeAReservation(this.MoveIn);
          }
        } else {
          this.updateTenant(this.reserveUnitForm.value);
        }
      } else {
        if (this.existTempToken) {
          if (this.clickedMoveIn == true) {
            this.moveIn(this.MoveIn);
            console.log("move in", this.clickedMoveIn);
          } else {
            this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
            this.makeAReservation(this.MoveIn);
          }
        } else {
          this.addTenant(this.reserveUnitForm.value);
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
        }
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.getLeadDaysUnsubscribe$ && this.getLeadDaysUnsubscribe$.closed) {
      this.getLeadDaysUnsubscribe$.unsubscribe();
    }
    if (this.getTenantInfoUnsubscribe$ && this.getTenantInfoUnsubscribe$.closed) {
      this.getTenantInfoUnsubscribe$.unsubscribe();
    }
    if (this.getDataUnsubscribe$ && this.getDataUnsubscribe$.closed) {
      this.getDataUnsubscribe$.unsubscribe();
    }
    if (this.getRentalPeriodUnsubscribe$ && this.getRentalPeriodUnsubscribe$) {
      this.getRentalPeriodUnsubscribe$.unsubscribe();
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
    if (this.signOutUnsubscribe$ && this.signOutUnsubscribe$.closed) {
      this.signOutUnsubscribe$.unsubscribe();
    }
  }
}

