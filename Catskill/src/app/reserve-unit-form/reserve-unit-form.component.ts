import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { AddTenantService } from '../services/add-tenant.service';
import { FetchDataService } from '../services/fetch-data.service';

import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant } from '../models/tenant';
import { setFlagsFromString } from 'v8';


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

  successMessage = false;

  count = 0;

  reserveUnitForm: FormGroup;


  submitted = false;
  rate: string;
  PeriodDescription: string;
  MoveIn: Date;
  selectedDescription: string;
  ReservationFee: number;
  ReservationFeeValue: number;

  MonthlyRateValue: number;

  defaultValue: number;


  constructor(
    private formBuilder: FormBuilder,
    private addTenantService: AddTenantService,
    private fetchDataService: FetchDataService,
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
      dteMoveIn: ['']
    });
  }

  initPeriodDescription() {
    return this.formBuilder.group({
      PeriodDescription: ['Monthly']
    });
  }

  initLstUnitTypes() {
    return this.formBuilder.group({
      Description: ['05 x 10 - Tall Door'],
      MonthlyRate: [''],
      ReservationFee: [''],
    });
  }

  // PeriodDescription: [''],
  ngOnInit() {
    this.getData(this.unitTypes);
    this.getRentalPeriod(this.rentalPeriod);
    const currentdate = new Date();
    console.log(currentdate);
    
  }

  get f() { return this.reserveUnitForm.controls; }

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

  selectChangeHandler (event: any) {

    this.selectedDescription = JSON.stringify(event.target.value);

    const indexValue  = event.target.value;
   const  index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);

   this.MonthlyRateValue = this.lstUnitTypes[index].MonthlyRate;
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        MonthlyRate: this.MonthlyRateValue,
        ReservationFee: 0.00,
      }
      ])
    });
  }

  getData(UnitTypes) {
    this.fetchDataService.getData(UnitTypes)
      .subscribe(UnitTypes => {
      this.lstUnitTypes = UnitTypes.lstUnitTypes;
      this.defaultValue = UnitTypes.lstUnitTypes[0].MonthlyRate;
    });
  }

  getRentalPeriod(RentalPeriod) {
    this.fetchDataService.getRentalPeriod(RentalPeriod)
      .subscribe(RentalPeriod => {
        this.LstRentalPeriods = RentalPeriod.lstRentalPeriods;

      });
  }

  addTenant(objTenantDetail: any): void {
    this.addTenantService.addTenant(objTenantDetail)
      .subscribe(result => {
      this.successMessage = true;
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.reserveUnitForm.invalid) {
      return;
    } else {
      this.addTenant(this.reserveUnitForm.value);
    }
    console.log(this.reserveUnitForm.value);
  }
}

