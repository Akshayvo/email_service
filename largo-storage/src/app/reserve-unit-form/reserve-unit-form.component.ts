import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

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


@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss'],
  providers:[DatePipe],
})

export class ReserveUnitFormComponent implements OnInit, OnDestroy {

  get f() { return this.reserveUnitForm.controls; }

  @Input() DescriptionVR: string;
  @Input() MonthlyRateVR: number;
  @Input() proRateAmount?: number;

  unitTypes: UnitTypes;
  lstUnitTypes: LstUnitTypes[];
  rentalPeriod: RentalPeriod;
  LstRentalPeriods: LstRentalPeriods[];
  objTenant: ObjTenant;
  objTenantDetail: ObjTenantDetail;

  strTempTenantToken: StrTempTenantToken;

  strConfirmation: string;

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
  reservationInProgress = false;
  MonthlyRateValue: number;

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
    intUnitTypeID: '',
  };

  examplaParent: string;

  existingTenantToken: string;
  existTempToken: string;
  data: any;

  intLeadDaysFrom: number;
  intLeadDaysTo: number;

  logOut = {};


  config = {
    // if objects array passed which key to be displayed defaults to description
    displayKey: 'description',
    // true/false for the search functionlity defaults to false,
    search: true,
    // height of the list so that if there are more no of items
    // it can show a scroll defaults to auto. With auto height scroll will never appear
    height: '140px',
    // text to be displayed when no item is selected defaults to Select,
    placeholder: 'Select State',
    // a custom function using which user wants to sort the items.
    // default is undefined and Array.sort() will be used in that case,
    customComparator: () => {},
    // limitTo: this.options.length,
    // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    moreText: 'more',
    // text to be displayed when no items are found while searching
    noResultsFound: 'No results found!',
    // label thats displayed in search input,
    searchPlaceholder: 'Search',
    // key on which search should be performed this will
    // be selective search. if undefined this will be extensive search on all keys
    searchOnKey: 'name',
  };

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
      dteMoveIn: ['', Validators.required],
    });

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

  ngOnInit() {
    this.getData();
    this.getRentalPeriod();
    this.getLeadDays(this.data);
// console.log(this.intLeadDaysFrom, this.intLeadDaysTo);


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
        ReservationFee: 0.00,
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
    this.MoveIn.intUnitTypeID = JSON.stringify(this.unitTypeId);

    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        MonthlyRate: this.MonthlyRateValue,
      }
      ])
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
      this.MoveIn.intUnitTypeID = JSON.stringify(unitTypesResponse.lstUnitTypes[0].UnitTypeID);

      if (!this.DescriptionVR && !this.MonthlyRateVR) {
        this.reserveUnitForm.patchValue({
          lstUnitTypes: ([{
            Description: defaultUnitTypeValue,
            MonthlyRate: this.defaultValue,
            ReservationFee: 0.00,
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
      this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
      this.makeAReservation(this.MoveIn);
      console.log(result);
    });
  }

  updateTenant(data: any) {
   this.updateTenantUnsubscribe$ = this.tenantInfoService.updateTenant(data)
      .subscribe(result => {
        console.log(result);
        this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
        this.makeAReservation(this.MoveIn);
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
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
          this.makeAReservation(this.MoveIn);
        } else {
          this.updateTenant(this.reserveUnitForm.value);
        }
      } else {
        if (this.existTempToken) {
          this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
          this.makeAReservation(this.MoveIn);
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

