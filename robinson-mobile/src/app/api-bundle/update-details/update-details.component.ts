import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';
import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant, StrTempTenantToken } from '../models/tenant';
import { Router } from '@angular/router';
import { option } from '../../data/view-rates';
import { DatePipe } from '@angular/common';
import { TenantInfoService } from '../services/tenant-info.service';
import { LeadDaysService } from '../services/lead-days.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { MoveInService } from '../services/moveIn.service';
import { DataSharingService } from '../services/data-sharing.service';
import { SignOutService } from '../services/sign-out.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {

  @ViewChild('closebutton') closeButton;

  
  proRateAmount?: number;
  curStage: number;
  deposit?: number;
  depositTax?: number;
  prorateAmtTax?: number;
  othDeposit?: number;
  setup?: number;
  setupTax?: number;
  rateTax?: number;
  clickedMoveIn?: boolean;
  defaultTotalTaxAmount?: number;
  defaultTotalChargesAmount?: number;
  UnitTypeID: number;
  showPaymentForMoveIn: boolean;
  showPaymentForReserve: boolean;
  filterLstUnitTypes: LstUnitTypes[];


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

  successMessage = false;

  dataModel: any;

  objTenantCopy: any;

  count = 0;

  option =  [];
  updateForm: FormGroup;

  tokenExit: string;

  submitted = false;
  rate: string;
  PeriodDescription: string;
  ReservationFee: number;
  ReservationFeeValue: number;
  ReservationFeeTax: number;
  reservationInProgress = false;
  UnitTypeRate: number;
  Description: string;
  defaultReservationFee: number;
  defaultReservationFeeTax: number;
  unitTypeId: number;
  currentdate: Date;
  currentDate: string;
  minDate: Date;
  maxDate: Date;
  from: string;
  to: string;
  formattedMoveInDate: any;
  showConfirmation = false;
  showMoveInDateError = false;
  options: any;

  minDay: number;
  maxDay: number;
  paymentTab: string;

  MoveInStringParent: string;

  tenant: any;
  optionAbbreviation: any;

  valueOfString: any;
  modalVisible = false;

  isValueUpdated = false;
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
  totalTaxAmount: number;
  totalChargesAmount: number;
  ProrateTax: number;
  strAccessCode: string;
  parentShowSuccessPayment: Boolean;
  showPaymentPage = false;
  gettingTenantData = false;
  monthlyRate: number;
  annualRate: number;
  biAnnualRate: number;
  quarterRate: number;
  initialValues: any;

  private  getTenantInfoSubscribe$: Subscription;
  private  updateTenantSubscribe$: Subscription;
  private signOutSubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private  dataSharingService: DataSharingService,
    private tenantInfoService: TenantInfoService,
    private signOutService: SignOutService,
    public router: Router,
    ) {
    this.updateForm = this.formBuilder.group({
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
    });

 
  }

  ngOnInit() {
    this.fetchUSState();
    if (window.localStorage) {
      if (!!localStorage.getItem('strTenantToken')) {
        this.getTenantInfo();
        this.gettingTenantData = true;
      }
    }
    this.updateForm.patchValue({
      lstUnitTypes: ([{
        Description: this.Description,
      }])
    });
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
  }
    public fetchUSState() {
    this.option = option;
    }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  get f(): any { return this.updateForm.controls; }

  getError(form: {controls: any}) {
    return form.controls;
  }

  public onSave() {
    this.closeButton.nativeElement.click();
  }

  getTenantInfo() {
  this.getTenantInfoSubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        this.gettingTenantData = false;
        if (tenantData) {
          const { Tenant } = tenantData;
          this.initialValues = Tenant;
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
          this.updateForm.patchValue({
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

      this.updateForm.controls.objTenant.valueChanges.subscribe(data => {        
        this.objTenantCopy = data;
        this.isValueUpdated = (JSON.stringify(this.objTenantCopy) !== JSON.stringify(tempObject));
        this.dataSharingService.isValueUpdated = this.isValueUpdated;
      }
      );
      }
    }
      , (err: any) => {
        if (err.status === 401 || err.status === 400) {
          localStorage.removeItem('strTenantToken');
          this.router.navigate(['/pay-rent/update/login']);       
      }
      });
  }

  cancel() {
    this.updateForm.patchValue({objTenant: this.initialValues});
  }

  updateTenant(data: any) {
    this.gettingTenantData = true;
    this.updateTenantSubscribe$ = this.tenantInfoService.updateTenant(data)
       .subscribe(result => {
        if (result.intErrorCode === 1) {
          this.gettingTenantData = false;
          this.isValueUpdated = false;
        }
       }, (err: any) => {
        if (err.status === 400 || err.status === 401 || err.status === 500) {
          this.gettingTenantData = false;
        }
       });
   }

   signOut(logOut: any) {
    this.signOutSubscribe$ = this.signOutService.signOut(logOut)
       .subscribe(result => {
         localStorage.removeItem('strTenantToken');
         if (!!this.paymentTab) {
           this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
         } else {
           this.router.navigate(['/pay-rent/login']);
         }
       }, (err) => {
       }
     );
   }

  onSubmit() {
    this.updateTenant(this.updateForm.value);
  }

  public ngOnDestroy(): void {
    if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
      this.getTenantInfoSubscribe$.unsubscribe();
    }
    if (this.updateTenantSubscribe$ && this.updateTenantSubscribe$.closed) {
      this.updateTenantSubscribe$.unsubscribe();
    }
    if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
      this.signOutSubscribe$.unsubscribe();
    }
  }
}
