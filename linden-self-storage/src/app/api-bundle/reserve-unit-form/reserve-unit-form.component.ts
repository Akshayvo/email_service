import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, FormGroupName } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';
import {UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods, LstInsuranceChoices  } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant, StrTempTenantToken } from '../models/tenant';
import { Router } from '@angular/router';
import { MilitaryBranch, MilitaryTypes, option, option1 } from '../../data/view-rates';
import { DatePipe } from '@angular/common';
import { TenantInfoService } from '../services/tenant-info.service';
import { LeadDaysService } from '../services/lead-days.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { MoveInService } from '../services/moveIn.service';
import { DataSharingService } from '../services/data-sharing.service';
import { environment } from '../../../environments/environment';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-reserve-unit-form',
  templateUrl: './reserve-unit-form.component.html',
  styleUrls: ['./reserve-unit-form.component.scss'],
  providers: [DatePipe],
})

export class ReserveUnitFormComponent implements OnInit, OnDestroy {

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
  unitTypeID: number;
  showPaymentForMoveIn: boolean;
  showPaymentForReserve: boolean;
  filterLstUnitTypes: LstUnitTypes[];
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  unitTypes: UnitTypes;
  lstUnitTypes: LstUnitTypes[];
  rentalPeriod: RentalPeriod;
  LstRentalPeriods: LstRentalPeriods[];
  LstInsuranceChoices: LstInsuranceChoices[];
  objTenant: ObjTenant;
  objTenantDetail: ObjTenantDetail;

  strTempTenantToken: StrTempTenantToken;

  strConfirmation: string;
  dteStartDate: string;

  successMessage = false;

  dataModel: any;

  objTenantCopy: any;

  count = 0;

  option =  [];
  option1 = [];
  reserveUnitForm: FormGroup;

  tokenExit: string;

  submitted = false;
  rate: string;
  PeriodDescription: string;
  reservationFee: number;
  ReservationFeeValue: number;
  reservationFeeTax: number;
  reservationInProgress = false;
  UnitTypeRate: number;
  description: string;
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
  premium: number;
  minDay: number;
  maxDay: number;
  militaryTypes = [];
  militaryBranch = [];
  MilitaryBranch: number;
  MilitaryTypes: number;
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
  totalTaxAmount: number;
  totalChargesAmount: number;
  ProrateTax: number;
  strAccessCode: string;
  parentShowSuccessPayment: Boolean;
  unitTypeNotAvailability = false;

  showPaymentPage = false;
  gettingTenantData = false;
  showReservationButton = false;
  monthlyRate: number;
  annualRate: number;
  biAnnualRate: number;
  quarterRate: number;

  alternatetypeDetail: any;

  showAltDetails = false;
  showMilitaryDetails = false;

  private  getLeadDaysSubscribe$: Subscription;
  private  getTenantInfoSubscribe$: Subscription;
  private  getDataSubscribe$: Subscription;
  private  getRentalPeriodSubscribe$: Subscription;
  private  getInsuranceChoiceSubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private  dataSharingService: DataSharingService,
    private fetchDataService: FetchDataService,
    private tenantInfoService: TenantInfoService,
    private leadDaysService: LeadDaysService,
    private moveInService: MoveInService,
    public router: Router,
    private canonical: CanonicalService
    ) {      
      this.canonical.create();
      if (this.router.url.includes('view-rates')) {
        this.showReservationButton = true;
      } else {
        this.showReservationButton = false;
      }
  
      if ((this.router.url.includes('reserve'))) {
        this.navigateToReserve = true;
        this.dataSharingService.navigateToReserve = true;
        this.dataSharingService.navigateToMoveIn = false;
        this.showAltDetails = (environment.alternateType.reserve === true) ? true : false;
        this.dataSharingService.showAltDetails = this.showAltDetails;
      } else {
        if (this.router.url.includes('move-in')) {
          this.navigateToMoveIn = true;
          this.dataSharingService.navigateToMoveIn = true;
          this.dataSharingService.navigateToReserve = false;
          this.showAltDetails = (environment.alternateType.moveIn === true) ? true : false;
          this.dataSharingService.showAltDetails = this.showAltDetails;
          this.showMilitaryDetails = (environment.military === true) ? true : false;
          this.dataSharingService.showMilitaryDetails = this.showMilitaryDetails;
        }
      }
        
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
        DriversLicense: ['', conditionalValidator(
            (() => this.showMilitaryDetails === false),
            Validators.required
          )],
        // DriversLicenseExpDate: [''],
        // DateOfBirth: [''],
        // MilitaryBranch: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // MilitaryDivision: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // MilitaryType: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // MilitaryID: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // DeployedUntil: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // CommandingOfficer: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // )],
        // CommandingOfficerPhone: ['', conditionalValidator(
        //   (() => this.showMilitaryDetails === false),
        //   Validators.required
        // ),],
        AlternateName: ['', conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),],
        AlternatePhone:   ['', [  conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),
          Validators.pattern(
            '^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$'
            )
        ]],
        AlternateAddressLine1: ['', conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),],
        AlternateAddressLine2: [''],
        AlternateCity: ['', conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),],
        AlternateState: ['', conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),],
        AlternateZIP: ['', conditionalValidator(
          (() => this.showAltDetails === false),
          Validators.required
        ),],
      }),


      lstUnitTypes: new FormArray([
        this.initLstUnitTypes(),
      ]),

      lstInsuranceChoices: new FormArray([
        this.initLstInsuranceChoices(),
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
      };
    }
  }

  initLstInsuranceChoices() {
    return this.formBuilder.group({
      CoverageDescription: ['']
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
    });
  }

  ngOnInit() {
    this.dteStartDate =this.convertDate(new Date());
    this.description  = this.dataSharingService.getReservationData().Description;
    this.monthlyRate = this.dataSharingService.getReservationData().MonthlyRate;
    this.unitTypeId = this.dataSharingService.getReservationData().UnitTypeID;
    this.fetchMilitaryBranch();
    this.fetchMilitaryTypes();
    this.getData();
    this.getRentalPeriod();
    if (this.navigateToMoveIn === true ) {
      this.getInsuranceChoices();
    }
    this.getLeadDays(this.data);
    this.MoveIn.intUnitTypeID = this.unitTypeId;

    this.currentdate = new Date();

    this.fetchUSState();
    if (window.localStorage) {
      if (!!localStorage.getItem('strTenantToken')) {
        this.getTenantInfo();
        this.gettingTenantData = true;
      }
    }
    this.reserveUnitForm.patchValue({
      lstUnitTypes: ([{
        Description: this.description,
      }])
    });
  }
    public fetchUSState() {
    this.option = option;
    this.option1 = option1;
    }

    public fetchMilitaryTypes() {
      this.militaryTypes = MilitaryTypes;
    }

    public fetchMilitaryBranch() {
      this.militaryBranch = MilitaryBranch;
    }

  public navigate(location: any) {
    this.router.navigate([`${environment.locationName}/${location}`]);
  }

  get f(): any { return this.reserveUnitForm.controls; }

  getError(form: {controls: any}) {
    return form.controls;
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
    this.router.navigate([`${environment.locationName}/${location}`]);
  }


  selectInsuranceChoice(event: any) {
    const indexValue = event.target.value;
    const index = this.LstInsuranceChoices.findIndex(x => x.CoverageDescription === indexValue);
    if (index!=null && index>=0) {
      this.dataSharingService.insuranceChoiceId = this.LstInsuranceChoices[index].InsuranceChoiceID;
      this.premium = this.LstInsuranceChoices[index].Premium;
    }
    this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID, this.dteStartDate);
  }


  changeRate(event: any) {
    const indexValue = event.target.value;
    const index = this.LstRentalPeriods.findIndex(x => x.PeriodDescription === indexValue);
    this.dataSharingService.periodID = this.LstRentalPeriods[index].PeriodID;
    this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID, this.dteStartDate);
  }

  selectChangeHandler (event: any) {
    const indexValue  = event.target.value;
    const index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);
    if (index!=null && index>=0) {
      this.monthlyRate = this.lstUnitTypes[index].MonthlyRate;
      this.annualRate = this.lstUnitTypes[index].AnnualRate;
      this.biAnnualRate = this.lstUnitTypes[index].BiAnnualRate;
      this.quarterRate = this.lstUnitTypes[index].QuarterRate;
      this.unitTypeId = this.lstUnitTypes[index].UnitTypeID;
      this.reservationFee = this.lstUnitTypes[index].ReservationFee;
      this.reservationFeeTax = this.lstUnitTypes[index].ReservationFeeTax;
    }
    this.MoveIn.intUnitTypeID = this.unitTypeId;
    this.dataSharingService.LstUnitTypes.MonthlyRate = this.monthlyRate;
    this.dataSharingService.LstUnitTypes.AnnualRate = this.annualRate;
    this.dataSharingService.LstUnitTypes.BiAnnualRate = this.biAnnualRate;
    this.dataSharingService.LstUnitTypes.QuarterRate = this.quarterRate;
    this.dataSharingService.LstUnitTypes.Description = indexValue;
    this.dataSharingService.LstUnitTypes.UnitTypeID = this.unitTypeId;

    if (this.navigateToMoveIn) {
      // tslint:disable-next-line:max-line-length
      this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID,  this.dteStartDate);
    }
}



getMoveInCharges(intUnitTypeID: any, intInsuranceID: number, intPeriodID: number,  dteStartDate: string,) {
  this.moveInService.getMoveInCharges({
    intUnitTypeID,
    intInsuranceID,
    intPeriodID,
    dteStartDate
  }).subscribe(result => {
    const {objCharges: {
      ProrateAmt = 0,
      Deposit = 0,
      DepositTax = 0,
      RateTax= 0,
      ProrateAmtTax = 0,
      OthDeposit = 0,
      Setup = 0,
      SetupTax = 0,
      TotalTaxAmount = 0,
      TotalChargesAmount = 0,
     }} = result;
    this.proRateAmount = ProrateAmt;
    this.deposit = Deposit;
    this.depositTax = DepositTax;
    this.rateTax = RateTax;
    this.prorateAmtTax = ProrateAmtTax;
    this.othDeposit = OthDeposit;
    this.setup = Setup;
    this.setupTax = SetupTax;
    this.totalTaxAmount = TotalTaxAmount;
    this.totalChargesAmount = TotalChargesAmount;
    this.dataSharingService.MoveInData.TotalChargesAmount = parseFloat(this.totalChargesAmount.toFixed(2));
    this.dataSharingService.MoveInData.TotalTaxAmount = parseFloat(this.totalTaxAmount.toFixed(2));
  }, err => {
  });
}

  getLeadDays(data: any) {
    this.getLeadDaysSubscribe$ =  this.leadDaysService.getLeadDays(data)
      .subscribe(result => {
        this.intLeadDaysFrom = result.intLeadDaysFrom;
        this.intLeadDaysTo = result.intLeadDaysTo;
        this.from = moment().add(this.intLeadDaysFrom, 'days').toISOString();
        this.to = moment().add(this.intLeadDaysTo, 'days').toISOString();
        this.currentDate = new Date().toISOString();
      });
    }



  getTenantInfo() {
  this.getTenantInfoSubscribe$ =  this.tenantInfoService.getTenantInfo()
      .subscribe(tenantData => {
        this.gettingTenantData = false;
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
            DriversLicense: Tenant.DriversLicense,
            DriversLicenseExpDate: Tenant.DriversLicenseExpDate,
            DateOfBirth: Tenant.DateOfBirth,
            MilitaryType: Tenant.militaryType,
            MilitaryBranch: Tenant.militaryBranch,
            MilitaryID: Tenant.MilitaryID,
            DeployedUntil: Tenant.DeployedUntil,
            MilitaryDivision: Tenant.MilitaryDivision,
            CommandingOfficer: Tenant.CommandingOfficer,
            CommandingOfficerPhone: Tenant.CommandingOfficerPhone,
            AlternateName: Tenant.AlternateName,
            AlternatePhone: Tenant.AlternatePhone,
            AlternateAddressLine1: Tenant.AlternateAddressLine2,
            AlternateAddressLine2: Tenant.AlternateAddressLine2,
            AlternateCity: Tenant.AlternateCity,
            AlternateState: Tenant.AlternateState,
            AlternateZIP: Tenant.AlternateZIP,
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
              DriversLicense: Tenant.DriversLicense,
              DriversLicenseExpDate: Tenant.DriversLicenseExpDate,
              DateOfBirth: Tenant.DateOfBirth,
              MilitaryType: Tenant.militaryType,
              MilitaryBranch: Tenant.militaryBranch,
              MilitaryID: Tenant.MilitaryID,
              DeployedUntil: Tenant.DeployedUntil,
              MilitaryDivision: Tenant.MilitaryDivision,
              CommandingOfficer: Tenant.CommandingOfficer,
              CommandingOfficerPhone: Tenant.CommandingOfficerPhone,
              AlternateName: Tenant.AlternateName,
              AlternatePhone: Tenant.AlternatePhone,
              AlternateAddressLine1: Tenant.AlternateAddressLine1,
              AlternateAddressLine2: Tenant.AlternateAddressLine2,
              AlternateCity: Tenant.AlternateCity,
              AlternateState: Tenant.AlternateState,
              AlternateZIP: Tenant.AlternateZIP,
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
        this.gettingTenantData = false;
        if (err.status === 401) {
          localStorage.removeItem('strTenantToken');
        }
      });
  }

  convertDate(date: any) {
    const formattedNormalDate = new Date(date);
    // tslint:disable-next-line:max-line-length
    return `${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
  }

  getFilterLstUnitTypes(unitTypesResponse: any) {
    this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
    this.filterLstUnitTypes = this.lstUnitTypes.filter(x => x.IsUnitsAvailable === true);
  }

  getData() {
    this.getDataSubscribe$ = this.fetchDataService.getData()
       .subscribe(unitTypesResponse => {
       if (this.dataSharingService.LstUnitTypes) {
       const index = unitTypesResponse.lstUnitTypes.findIndex(x => x.UnitTypeID === this.dataSharingService.LstUnitTypes.UnitTypeID);
       this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
       this.getFilterLstUnitTypes(unitTypesResponse);
       if (index!=null && index >= 0 ) {
         const defaultMonthlyValue = unitTypesResponse.lstUnitTypes[index].MonthlyRate;
         this.description = unitTypesResponse.lstUnitTypes[index].Description;
         this.reservationFeeTax = unitTypesResponse.lstUnitTypes[index].ReservationFeeTax;
         this.reservationFee = unitTypesResponse.lstUnitTypes[index].ReservationFee;
         this.MoveIn.intUnitTypeID = this.unitTypeID || unitTypesResponse.lstUnitTypes[index].UnitTypeID;
          this.unitTypeId =
          this.dataSharingService.getReservationData().UnitTypeID || unitTypesResponse.lstUnitTypes[index].UnitTypeID;
          this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate || defaultMonthlyValue;
       }
       const serviceMonthlyValue = this.dataSharingService.LstUnitTypes.MonthlyRate;
       const serviceDescriptionValue = this.dataSharingService.LstUnitTypes.Description;
       if (this.navigateToMoveIn) {
         // tslint:disable-next-line:max-line-length
         this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID,  this.dteStartDate);
       }
 
 
         this.dataSharingService.LstUnitTypes.ReservationFee = this.reservationFee;
         this.dataSharingService.LstUnitTypes.ReservationFeeTax = this.reservationFeeTax;
 
       if (!serviceDescriptionValue && !serviceMonthlyValue) {
         this.reserveUnitForm.patchValue({
           lstUnitTypes: ([{
             Description: this.description,
           }])
         });
 
         this.dataSharingService.LstUnitTypes.Description = this.description;
         this.dataSharingService.LstUnitTypes.UnitTypeID = this.unitTypeID;
         this.dataSharingService.LstUnitTypes.MonthlyRate = this.monthlyRate;
         this.dataSharingService.LstUnitTypes.AnnualRate = this.annualRate;
         this.dataSharingService.LstUnitTypes.BiAnnualRate = this.biAnnualRate;
         this.dataSharingService.LstUnitTypes.QuarterRate = this.quarterRate;
 
       } else {
         this.reserveUnitForm.patchValue({
           lstUnitTypes: ([{
             Description: serviceDescriptionValue,
           }])
         });
         this.dataSharingService.LstUnitTypes.Description = serviceDescriptionValue;
         this.dataSharingService.LstUnitTypes.MonthlyRate = serviceMonthlyValue;
       }
     }});
   }


  getRentalPeriod() {
   this.getRentalPeriodSubscribe$ = this.fetchDataService.getRentalPeriod()
      .subscribe(rentalPeriodResponse => {
        this.LstRentalPeriods = rentalPeriodResponse.lstRentalPeriods;
        if (this.LstRentalPeriods.length != 0) {
          const defaultPeriodDescription = rentalPeriodResponse.lstRentalPeriods[0].PeriodDescription;
          this.dataSharingService.periodID = rentalPeriodResponse.lstRentalPeriods[0].PeriodID;
          this.reserveUnitForm.patchValue({
            lstRentalPeriods: ([{
              PeriodDescription: defaultPeriodDescription,
            }])
          });
          this.dataSharingService.period = defaultPeriodDescription;
        }
      }
    );
  }

  getInsuranceChoices() {
    this.getInsuranceChoiceSubscribe$ = this.fetchDataService.getInsuranceChoices()
    .subscribe(insuranceChoicesResponse => {
      if (insuranceChoicesResponse.blnSuccess === true) {
        this.LstInsuranceChoices = insuranceChoicesResponse.lstInsuranceChoices;
        const defaultInsuranceChoice = insuranceChoicesResponse.lstInsuranceChoices[0].CoverageDescription;
        this.dataSharingService.insuranceChoiceId = insuranceChoicesResponse.lstInsuranceChoices[0].InsuranceChoiceID;
        this.reserveUnitForm.patchValue({
          lstInsuranceChoices: ([{
            CoverageDescription: defaultInsuranceChoice,
          }])
        });
      }
    });
  }

  onSubmit() {

  }

  public ngOnDestroy(): void {
    if (this.getLeadDaysSubscribe$ && this.getLeadDaysSubscribe$.closed) {
      this.getLeadDaysSubscribe$.unsubscribe();
    }
    if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
      this.getTenantInfoSubscribe$.unsubscribe();
    }
    if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
      this.getDataSubscribe$.unsubscribe();
    }
    if (this.getInsuranceChoiceSubscribe$ && this.getInsuranceChoiceSubscribe$) {
      this.getInsuranceChoiceSubscribe$.unsubscribe();
    }
    if (this.getRentalPeriodSubscribe$ && this.getRentalPeriodSubscribe$) {
      this.getRentalPeriodSubscribe$.unsubscribe();
    }
  }
}
