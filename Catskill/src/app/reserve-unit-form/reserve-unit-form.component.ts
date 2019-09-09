import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { AddTenantService } from '../services/add-tenant.service';
import { FetchDataService } from '../services/fetch-data.service';

import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant, StrTempTenantToken } from '../models/tenant';
import { SignOutService } from '../services/sign-out.service';
import { Router } from '@angular/router';
import { MoveIn } from '../models/movein';
import { MakeAReservationService } from '../services/make-a-reservation.service';

import { option } from '../data/view-rates';


@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss']
})

export class ReserveUnitFormComponent implements OnInit {

  unitTypes: UnitTypes;
  lstUnitTypes: LstUnitTypes[];
  rentalPeriod: RentalPeriod;
  LstRentalPeriods: LstRentalPeriods[];
  objTenant: ObjTenant;
  objTenantDetail: ObjTenantDetail;

  strTempTenantToken: StrTempTenantToken;

  strConfirmation: string;

  successMessage = false;

  count = 0;

  option: any;

  reserveUnitForm: FormGroup;

  tokenExit: string;
  
  submitted = false;
  rate: string;
  PeriodDescription: string;
  selectedDescription: string;
  ReservationFee: number;
  ReservationFeeValue: number;
  
  MonthlyRateValue: number;
  
  defaultValue: number;
  unitTypeId: number;
  currentdate: Date;
  currentDate: string; 
  minDate: Date;
  maxDate: Date;
  MinDate: string;
  MaxDate: string;

  showConfirmation = false;
  options: any;

  intLeadDaysFrom = 0;
  intLeadDaysTo = 999; 

  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: '',
  }


  config = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description
    search:true, //true/false for the search functionlity defaults to false,
    height: '140px', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select State', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    // limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Search', // label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }

  constructor(
    private formBuilder: FormBuilder,
    private addTenantService: AddTenantService,
    private fetchDataService: FetchDataService,
    private signOutService: SignOutService,
    private makeAReservationService: MakeAReservationService,
    public router: Router,
    ) {
    this.reserveUnitForm = this.formBuilder.group({
      objTenant: this.formBuilder.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Phone: ['', [Validators.required,
        Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,5}$')]],
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
      dteMoveIn: ['', Validators.required]
    });
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
    this.getData(this.unitTypes);
    this.getRentalPeriod(this.rentalPeriod);
    localStorage.removeItem('strTempTenantToken');
    const today = new Date();
    this.minDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()-this.intLeadDaysFrom);
    this.maxDate = new Date(today.getFullYear(),today.getMonth(),today.getDate()+this.intLeadDaysTo);
    this.currentdate = new Date(today.getFullYear(),today.getMonth(),today.getDate());
    this.MinDate =  this.formatDate(this.minDate);
    this.MaxDate = this.formatDate(this.maxDate);
    this.currentDate = this.formatDate(this.currentdate);
    this.fetchUSState();
  }

   formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

    public fetchUSState() {
      this.option = option;
    }

  get f() { return this.reserveUnitForm.controls; }

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
      }
    }
  }

  handlePrevious() {
    if (this.count >= 0) {
      this.count = this.count - 1;
    }
  }

  selectionChanged(event: any) {
    
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

  getData(UnitTypes) {
    this.fetchDataService.getData(UnitTypes)
      .subscribe(UnitTypes => {
      this.lstUnitTypes = UnitTypes.lstUnitTypes;
      this.defaultValue = UnitTypes.lstUnitTypes[0].MonthlyRate;
      const defaultUnitTypeValue = UnitTypes.lstUnitTypes[0].Description;
      this.MoveIn.intUnitTypeID = JSON.stringify(UnitTypes.lstUnitTypes[0].UnitTypeID);
      this.reserveUnitForm.patchValue({
        lstUnitTypes: ([{
          Description: defaultUnitTypeValue,
          MonthlyRate: this.defaultValue,
          ReservationFee: 0.00,
        }])
      })
    });
  }

  getRentalPeriod(RentalPeriod) {
    this.fetchDataService.getRentalPeriod(RentalPeriod)
      .subscribe(RentalPeriod => {
        this.LstRentalPeriods = RentalPeriod.lstRentalPeriods;
        const defaultPeriodDescription = RentalPeriod.lstRentalPeriods[0].PeriodDescription;
        this.reserveUnitForm.patchValue({
          lstRentalPeriods: ([{
            PeriodDescription: defaultPeriodDescription,
          }])
        })
      });

  }

  addTenant(data: any): void {
    this.addTenantService.addTenant(data)
      .subscribe(result => {
      this.successMessage = true;
      localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
      this.MoveIn.dteMoveIn = this.reserveUnitForm.value.dteMoveIn;
      this.makeAReservation(this.MoveIn);
    });
  }

  makeAReservation(strConfirmation: any) {
    this.makeAReservationService.makeAReservation(strConfirmation)
    .subscribe(strConfirmation => {
      this.strConfirmation = strConfirmation.strConfirmation;
      this.showConfirmation = false;
       this.tokenExit = localStorage.getItem('strTenantToken');
    }); 
  }
  
  signOut(logOut: any) {
    this.signOutService.signOut(logOut)
    .subscribe( result => {
      localStorage.removeItem('strTenantToken');
      localStorage.removeItem('strTempTenantToken');
      this.router.navigate(['/pay-rent/login']);
    }, (err) => {
    }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.showConfirmation = true;
    if (this.reserveUnitForm.invalid) {
      return;
    } else {
      this.addTenant(this.reserveUnitForm.value);
    }
  }
}

