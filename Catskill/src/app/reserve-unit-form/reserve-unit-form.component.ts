import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddTenantService } from '../services/add-tenant.service';
import { ObjTenant } from '../models/tenant';
import { FetchDataService } from '../services/fetch-data.service';
import { MoveInService } from '../services/move-in.service';
import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { MoveIn } from '../models/moveIn';


@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss']
})
export class ReserveUnitFormComponent implements OnInit {

  submitted = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes;
  rentalPeriod: RentalPeriod;
  LstRentalPeriods: LstRentalPeriods;
  reserveUnitForm: FormGroup;
  rate: string;
  PeriodDescription: string;
  MoveIn: Date;
  selectedDay: string;

  constructor(
    private formBuilder: FormBuilder,
    private addTenantService: AddTenantService,
    private fetchDataService: FetchDataService,
    private moveInService: MoveInService,
    ) {
    this.reserveUnitForm = this.formBuilder.group({
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
      Description: [''],
      MonthlyRate: [''],
      PeriodDescription: [''],
      ReservationFee: ['']
    });
  }

  ngOnInit() {
    this.getData(this.unitTypes);
    this.getRentalPeriod(this.rentalPeriod);
  }

  get f() { return this.reserveUnitForm.controls; }

  selectChangeHandler (event: any) {
    this.selectedDay = JSON.stringify(event.target.value);
    console.log(this.selectedDay);
  }

  getData(UnitTypes) {
    this.fetchDataService.getData(UnitTypes)
    .subscribe(UnitTypes => {
      this.LstUnitTypes = UnitTypes.lstUnitTypes;
      console.log(this.LstUnitTypes.ReservationFee);
      console.log(this.LstUnitTypes[0].MonthlyRate);
    });
  }

  getRentalPeriod(RentalPeriod) {
    this.fetchDataService.getRentalPeriod(RentalPeriod)
      .subscribe(RentalPeriod => {
        this.LstRentalPeriods = RentalPeriod.lstRentalPeriods;
      });
  }

  moveIn(MoveIn) {
    this.moveInService.moveIn(MoveIn)
      .subscribe(MoveIn => {
        this.MoveIn = MoveIn.dteMoveIn;
        console.log(this.MoveIn);
      });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.reserveUnitForm);
  }

}
