import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { AddTenantService } from '../services/add-tenant.service';
import { FetchDataService } from '../services/fetch-data.service';
import { MoveInService } from '../services/move-in.service';

import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';

import { MoveIn } from '../models/moveIn';
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

  reserveUnitForm: FormGroup;


  submitted = false;
  rate: string;
  PeriodDescription: string;
  MoveIn: Date;
  selectedDescription: string;
  ReservationFee: number;

  MonthlyRateValue: number;

  constructor(
    private formBuilder: FormBuilder,
    private addTenantService: AddTenantService,
    private fetchDataService: FetchDataService,
    private moveInService: MoveInService,
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
      PeriodDescription: ['']
    });
  }

  initLstUnitTypes() {
    return this.formBuilder.group({
      Description: [''],
      MonthlyRate: [''],
      ReservationFee: 0,
    });
  }

  // PeriodDescription: [''],
  ngOnInit() {
    this.getData(this.unitTypes);
    this.getRentalPeriod(this.rentalPeriod);

  }

  get f() { return this.reserveUnitForm.controls; }

  selectChangeHandler (event: any) {

    this.selectedDescription = JSON.stringify(event.target.value);

    const indexValue  = event.target.value;
   const  index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);

   this.MonthlyRateValue = this.lstUnitTypes[index].MonthlyRate;
  }

  getData(UnitTypes) {
    this.fetchDataService.getData(UnitTypes)
      .subscribe(UnitTypes => {
      this.lstUnitTypes = UnitTypes.lstUnitTypes;

      if (this.lstUnitTypes[0].ReservationFee === undefined) {
        this.lstUnitTypes[0].ReservationFee = 0;
        this.ReservationFee =  this.lstUnitTypes[0].ReservationFee;
      }
    });
  }

  getRentalPeriod(RentalPeriod) {
    this.fetchDataService.getRentalPeriod(RentalPeriod)
      .subscribe(RentalPeriod => {
        this.LstRentalPeriods = RentalPeriod.lstRentalPeriods;
      });
  }

  addTenant(objTenantDetail: any): void {
    console.log('add tenant method is working');
    this.addTenantService.addTenant(objTenantDetail)
      .subscribe(result => {
        // console.log(result);
        // console.log('add tenant service is working');
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

