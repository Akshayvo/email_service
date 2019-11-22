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
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss'],
  providers:[DatePipe],
})

export class ReserveUnitFormComponent implements OnInit, OnDestroy {

  get f() { return this.reserveUnitForm.controls; }

  // @ViewChild(PayRentFormComponent) childReference;

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
  @Input() UnitTypeID: number;
  @Input() showPaymentForMoveIn: boolean;
  @Input() showPaymentForReserve: boolean;


  navigateToReserve: boolean;
  navigateToMoveIn: boolean;

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
  MonthlyRate: number;
  Description: string;
  defaultReservationFee: number;
  defaultReservationFeeTax: number;
  unitTypeId: number;
  currentdate: Date;
  currentDate: string;
  minDate: Date;
  maxDate: Date;
  MinDate: string;
  MaxDate: string;
  From: string;
  To: string;
  formattedMoveInDate: any;
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
    private  dataSharingService: DataSharingService,
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
        (() => this.navigateToMoveIn === true),
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

    // this.MoveInStringParent = this.datePipe.transform(this.reserveUnitForm.value.dteMoveIn, 'yyyy-MM-dd');

      if((this.router.url === '/view-rates/reserve') || (this.router.url === '/reserve-unit')) {
        this.navigateToReserve = true;
        this.dataSharingService.navigateToReserve = true;
        this.dataSharingService.navigateToMoveIn = false;
      } else {

        if(this.router.url ===  '/view-rates/move-in' ) {
          this.navigateToMoveIn = true;
          this.dataSharingService.navigateToMoveIn = true;
          this.dataSharingService.navigateToReserve = false;
        }
      }
 

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

  ngOnInit() {
    this.Description  = this.dataSharingService.getReservationData().Description;
    this.MonthlyRate = this.dataSharingService.getReservationData().MonthlyRate;
    this.unitTypeId = this.dataSharingService.getReservationData().UnitTypeID;
    
    this.getData();
    this.getRentalPeriod();
    this.getLeadDays(this.data);
    this.MoveIn.intUnitTypeID = this.unitTypeId;

    this.currentdate = new Date();

    this.fetchUSState();
    if (window.localStorage) {
      if (localStorage.getItem('strTenantToken')) {
        this.getTenantInfo();
      }
    }
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        Description: this.Description,
        MonthlyRate: this.MonthlyRate,
        ReservationFee: this.ReservationFee,
      }])
    });          
  }

  
    public fetchUSState() {
    this.option = option;
    }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  close() {
    this.unitTypeNotAvailability = false;    
  }

  

 public navigateToConfirmation(location: any) {
   this.submitted = true;
   this.dataSharingService.objTenant = this.reserveUnitForm.value.objTenant;
   this.dataSharingService.MoveIn.dteMoveIn = this.convertDate(this.reserveUnitForm.value.dteMoveIn);   
   if (this.reserveUnitForm.invalid) {
     return;
    } else {
    
    }
    this.router.navigate([location]);
  }

  selectionChanged(event: any) {
  }

  selectChangeHandler (event: any) {
    this.selectedDescription = JSON.stringify(event.target.value);
    const indexValue  = event.target.value;
    const index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);
    this.MonthlyRate = this.lstUnitTypes[index].MonthlyRate;
    this.unitTypeId = this.lstUnitTypes[index].UnitTypeID;
    this.ReservationFee = this.lstUnitTypes[index].ReservationFee;
    this.ReservationFeeTax = this.lstUnitTypes[index].ReservationFeeTax;
    
    this.MoveIn.intUnitTypeID = this.unitTypeId;
    
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        MonthlyRate: this.MonthlyRate,
      }
    ])
  });

  this.dataSharingService.LstUnitTypes.MonthlyRate = this.MonthlyRate;
  this.dataSharingService.LstUnitTypes.Description = this.selectedDescription
  this.dataSharingService.LstUnitTypes.UnitTypeID = this.unitTypeId;
  
    this.getMoveInCharges(this.unitTypeId);
  
  }

  getMoveInCharges(intUnitTypeID: any) {
    this.moveInService.getMoveInCharges({
      intUnitTypeID
    }).subscribe(result => {
      
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
      this.dataSharingService.MoveInData.TotalChargesAmount = this.TotalChargesAmount;
      this.dataSharingService.MoveInData.TotalTaxAmount = this.TotalTaxAmount;
console.log("move in chnarges",  this.dataSharingService.MoveInData.TotalTaxAmount, this.dataSharingService.MoveInData.TotalChargesAmount );

    }, err => {
      console.error('Error while fetching moveIn Charges', err);
    });
}


  getLeadDays(data: any) {
    this.getLeadDaysUnsubscribe$ =  this.leadDaysService.getLeadDays(data)
      .subscribe(result => {
        this.intLeadDaysFrom = result.intLeadDaysFrom;
        this.intLeadDaysTo = result.intLeadDaysTo;
        this.From = moment().add(this.intLeadDaysFrom, 'days').toISOString();
        this.To = moment().add(this.intLeadDaysTo, 'days').toISOString();
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
        this.isValueUpdated = (JSON.stringify(this.objTenantCopy) !== JSON.stringify(tempObject));
        
        
        this.dataSharingService.isValueUpdated = this.isValueUpdated;
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

  convertDate(date: any) {
    const formattedNormalDate = new Date(date);
    // tslint:disable-next-line:max-line-length
    return `${formattedNormalDate.getFullYear()}-${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}`;
  }


  getData() {
   this.getDataUnsubscribe$ = this.fetchDataService.getData()
      .subscribe(unitTypesResponse => {
      this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
      const defaultMonthlyValue = unitTypesResponse.lstUnitTypes[0].MonthlyRate;
      this.MonthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate || defaultMonthlyValue;
      const serviceMonthlyValue = this.dataSharingService.LstUnitTypes.MonthlyRate;
      this.Description = unitTypesResponse.lstUnitTypes[0].Description;
      const serviceDescriptionValue = this.dataSharingService.LstUnitTypes.Description;
      this.ReservationFee = unitTypesResponse.lstUnitTypes[0].ReservationFee;
      this.ReservationFeeTax = unitTypesResponse.lstUnitTypes[0].ReservationFeeTax;
      this.MoveIn.intUnitTypeID = this.UnitTypeID || unitTypesResponse.lstUnitTypes[0].UnitTypeID;
      this.unitTypeId = this.dataSharingService.getReservationData().UnitTypeID || unitTypesResponse.lstUnitTypes[0].UnitTypeID;
      this.UnitTypeID = unitTypesResponse.lstUnitTypes[0].UnitTypeID;
      this.getMoveInCharges(this.unitTypeId);


        this.dataSharingService.LstUnitTypes.ReservationFee = this.ReservationFee;
        this.dataSharingService.LstUnitTypes.ReservationFeeTax = this.ReservationFeeTax;

      if (!serviceDescriptionValue && !serviceMonthlyValue) {
        this.reserveUnitForm.patchValue({
          lstUnitTypes: ([{
            Description: this.Description,
            MonthlyRate: this.MonthlyRate,
            ReservationFee: this.defaultReservationFee,
          }])
        });

        this.dataSharingService.LstUnitTypes.Description = this.Description;
        this.dataSharingService.LstUnitTypes.MonthlyRate = this.MonthlyRate;
        this.dataSharingService.LstUnitTypes.UnitTypeID = this.UnitTypeID;
        
      } else {
        this.reserveUnitForm.patchValue({
          lstUnitTypes: ([{
            Description: serviceDescriptionValue,
            MonthlyRate: serviceMonthlyValue,
            ReservationFee: this.ReservationFee,
          }])
        });
        this.dataSharingService.LstUnitTypes.Description = serviceDescriptionValue;
        this.dataSharingService.LstUnitTypes.MonthlyRate = serviceMonthlyValue;
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
        this.dataSharingService.period = defaultPeriodDescription;
      }
    );
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
    if (this.signOutUnsubscribe$ && this.signOutUnsubscribe$.closed) {
      this.signOutUnsubscribe$.unsubscribe();
    }
  }
}

