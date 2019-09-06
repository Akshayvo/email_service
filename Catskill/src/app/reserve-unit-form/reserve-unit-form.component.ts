import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { AddTenantService } from '../services/add-tenant.service';
import { FetchDataService } from '../services/fetch-data.service';

import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant } from '../models/tenant';
import { SignOutService } from '../services/sign-out.service';
import { Router } from '@angular/router';


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
    private signOutService: SignOutService,
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

  // PeriodDescription: [''],
  ngOnInit() {
    this.getData(this.unitTypes);
    this.getRentalPeriod(this.rentalPeriod);
    const currentdate = new Date();
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

  selectChangeHandler (event: any) {

    this.selectedDescription = JSON.stringify(event.target.value);

    const indexValue  = event.target.value;
   const  index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);

   this.MonthlyRateValue = this.lstUnitTypes[index].MonthlyRate;
   const unitTypeId = this.lstUnitTypes[index].UnitTypeID;
   console.log(unitTypeId);
   
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        MonthlyRate: this.MonthlyRateValue,
        // ReservationFee: 0.00,
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

  addTenant(objTenantDetail: any): void {
    this.addTenantService.addTenant(objTenantDetail)
      .subscribe(result => {
      this.successMessage = true;
      });
  }

  signOut(logOut: any) {
    this.signOutService.signOut(logOut)
    .subscribe( result => {
      console.log('logged out', result);
      localStorage.removeItem('strTenantToken');
      this.router.navigate(['/pay-rent/login']);
    }, (err) => {
    }
    );
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

