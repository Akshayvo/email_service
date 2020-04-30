import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes, RentalPeriod, LstRentalPeriods } from '../models/unittypes';
import { ObjTenantDetail, ObjTenant, StrTempTenantToken } from '../models/tenant';
import { Router, ActivatedRoute } from '@angular/router';
import { option } from '../../data/view-rates';
import { DatePipe } from '@angular/common';
import { TenantInfoService } from '../services/tenant-info.service';
import { LeadDaysService } from '../services/lead-days.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { MoveInService } from '../services/moveIn.service';
import { DataSharingService } from '../services/data-sharing.service';
import { PreviousRouteService } from '../services/previous-route.service';

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
  UnitTypeID: number;
  showPaymentForMoveIn: boolean;
  showPaymentForReserve: boolean;


  navigateToReserve: boolean;
  navigateToMoveIn: boolean;

  unitTypes: UnitTypes;
  lstUnitTypes: LstUnitTypes[];
  filterLstUnitTypes: LstUnitTypes[];
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

  option = [];
  reserveUnitForm: FormGroup;

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
  myNavLinks: any;
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
  totalTaxAmount: number;
  totalChargesAmount: number;
  ProrateTax: number;
  strAccessCode: string;
  parentShowSuccessPayment: Boolean;
  unitTypeNotAvailability = false;

  showPaymentPage = false;
  gettingTenantData = false;
  monthlyRate: number;
  annualRate: number;
  biAnnualRate: number;
  quarterRate: number;

  showPrevious = false;


  private getLeadDaysSubscribe$: Subscription;
  private getTenantInfoSubscribe$: Subscription;
  private getDataSubscribe$: Subscription;
  private getRentalPeriodSubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private dataSharingService: DataSharingService,
    private fetchDataService: FetchDataService,
    private tenantInfoService: TenantInfoService,
    private leadDaysService: LeadDaysService,
    private moveInService: MoveInService,
    public router: Router,
    // private activatedRoute: ActivatedRoute,
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
      return (control: AbstractControl): { [key: string]: any } => {
        if (condition()) {
          return null;
        }
        return validator(control);
      };
    }

    if (this.router.url.includes('/reserve')) {
      this.navigateToReserve = true;
      this.dataSharingService.navigateToReserve = true;
      this.dataSharingService.navigateToMoveIn = false;
    } else {
      if (this.router.url.includes('/move-in')) {
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
    });
  }

  ngOnInit() {
    this.Description = this.dataSharingService.getReservationData().Description;
    this.UnitTypeRate = this.dataSharingService.getReservationData().MonthlyRate;
    this.unitTypeId = this.dataSharingService.getReservationData().UnitTypeID;
    this.dataSharingService.initMyNavLinks('reservationForm', window.location.pathname);
    this.myNavLinks = this.dataSharingService.getMyNavLinks('reservationForm');
    this.getData();
    this.getRentalPeriod();
    this.getLeadDays(this.data);
    this.MoveIn.intUnitTypeID = this.unitTypeId;

    this.currentdate = new Date();

    this.fetchUSState();
    if (window.localStorage) {
      const loginUrl = localStorage.getItem('paymentNavigationUrl');
      if (!!localStorage.getItem('strTenantToken') && (this.router.url.includes(`${loginUrl}`))) {
        this.getTenantInfo();
        this.gettingTenantData = true;
      }
    }
    console.log('TCL: navigateToConfirmation -> this.dataSharingService.objTenant', this.dataSharingService.objTenant);

      this.reserveUnitForm.patchValue({
        objTenant: ({
          FirstName: this.dataSharingService.objTenant.FirstName,
          LastName: this.dataSharingService.objTenant.LastName,
          Phone: this.dataSharingService.objTenant.Phone,
          EmailAddress: this.dataSharingService.objTenant.EmailAddress,
          AddressLine1: this.dataSharingService.objTenant.AddressLine1,
          AddressLine2: this.dataSharingService.objTenant.AddressLine2,
          City: this.dataSharingService.objTenant.City,
          State: this.dataSharingService.objTenant.State,
          ZIP: this.dataSharingService.objTenant.ZIP,
        }),
      });

      this.reserveUnitForm.patchValue({
        lstUnitTypes: ([{
          Description: this.Description,
        }])
      });


    /* if (this.activatedRoute.snapshot.url[1].path === 'agricola') {
      console.log('yes its ', this.activatedRoute.snapshot.url[1].path);
    } */

    if (this.router.url.includes('reserveUnit')) {
      this.showPrevious = true;
    }
  }

  public fetchUSState() {
    this.option = option;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  get f(): any { return this.reserveUnitForm.controls; }

  getError(form: { controls: any }) {
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
    const navTo = this.dataSharingService.navigationTo;
    this.dataSharingService.navigateToPrevious = this.router.url;
    this.dataSharingService.updateMyNavLink('reservationForm', 'next', `${navTo}/${location}`);
    // tslint:disable-next-line:max-line-length
    this.dataSharingService.updateMyNavLink('reservationForm', 'prev', `${this.dataSharingService.navLinksForComponent.viewRates.next}`);
    const myCurNavLinks = this.dataSharingService.getMyNavLinks('reservationForm');
    this.router.navigate([this.dataSharingService.navLinksForComponent.reservationForm.next]);
  }

  public navigateToPrevious() {
    this.router.navigate([this.dataSharingService.navLinksForComponent.viewRates.prev]);
  }

  selectionChanged(event: any) {
  }

  selectChangeHandler(event: any) {
    const indexValue = event.target.value;
    const index = this.lstUnitTypes.findIndex(x => x.Description === indexValue);
    this.UnitTypeRate = this.lstUnitTypes[index].MonthlyRate;
    this.monthlyRate = this.lstUnitTypes[index].MonthlyRate;
    this.annualRate = this.lstUnitTypes[index].AnnualRate;
    this.biAnnualRate = this.lstUnitTypes[index].BiAnnualRate;
    this.quarterRate = this.lstUnitTypes[index].QuarterRate;
    this.unitTypeId = this.lstUnitTypes[index].UnitTypeID;
    this.ReservationFee = this.lstUnitTypes[index].ReservationFee;
    this.ReservationFeeTax = this.lstUnitTypes[index].ReservationFeeTax;
    this.MoveIn.intUnitTypeID = this.unitTypeId;
    this.dataSharingService.LstUnitTypes.MonthlyRate = this.monthlyRate;
    this.dataSharingService.LstUnitTypes.AnnualRate = this.annualRate;
    this.dataSharingService.LstUnitTypes.BiAnnualRate = this.biAnnualRate;
    this.dataSharingService.LstUnitTypes.QuarterRate = this.quarterRate;
    this.dataSharingService.LstUnitTypes.Description = indexValue;
    this.dataSharingService.LstUnitTypes.UnitTypeID = this.unitTypeId;

    if (this.navigateToMoveIn) {
      this.getMoveInCharges(this.unitTypeId);
    }
  }


  getMoveInCharges(intUnitTypeID: any) {
    this.moveInService.getMoveInCharges({
      intUnitTypeID
    }).subscribe(result => {
      const { objCharges: {
        ProrateAmt = 0,
        Deposit = 0,
        DepositTax = 0,
        RateTax = 0,
        ProrateAmtTax = 0,
        OthDeposit = 0,
        Setup = 0,
        SetupTax = 0,
        TotalTaxAmount = 0,
        TotalChargesAmount = 0,
      } } = result;
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
    this.getLeadDaysSubscribe$ = this.leadDaysService.getLeadDays(data)
      .subscribe(result => {
        this.intLeadDaysFrom = result.intLeadDaysFrom;
        this.intLeadDaysTo = result.intLeadDaysTo;
        this.from = moment().add(this.intLeadDaysFrom, 'days').toISOString();
        this.to = moment().add(this.intLeadDaysTo, 'days').toISOString();
      });
  }



  getTenantInfo() {
    this.getTenantInfoSubscribe$ = this.tenantInfoService.getTenantInfo()
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
    return `${formattedNormalDate.getMonth() + 1}-${formattedNormalDate.getDate()}-${formattedNormalDate.getFullYear()}`;
  }

  getFilterLstUnitTypes(unitTypesResponse: any) {
    this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
    this.filterLstUnitTypes = this.lstUnitTypes.filter(x => x.IsUnitsAvailable === true);
  }


  getData() {
    this.getDataSubscribe$ = this.fetchDataService.getData()
      .subscribe(unitTypesResponse => {
        this.getFilterLstUnitTypes(unitTypesResponse);
        this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
        const defaultMonthlyValue = unitTypesResponse.lstUnitTypes[0].MonthlyRate;
        this.UnitTypeRate = this.dataSharingService.LstUnitTypes.MonthlyRate || defaultMonthlyValue;
        const serviceMonthlyValue = this.dataSharingService.LstUnitTypes.MonthlyRate;
        this.Description = unitTypesResponse.lstUnitTypes[0].Description;
        const serviceDescriptionValue = this.dataSharingService.LstUnitTypes.Description;
        this.ReservationFee = unitTypesResponse.lstUnitTypes[0].ReservationFee;
        this.ReservationFeeTax = unitTypesResponse.lstUnitTypes[0].ReservationFeeTax;
        this.MoveIn.intUnitTypeID = this.UnitTypeID || unitTypesResponse.lstUnitTypes[0].UnitTypeID;
        this.unitTypeId =
          this.dataSharingService.getReservationData().UnitTypeID || unitTypesResponse.lstUnitTypes[0].UnitTypeID;
        this.UnitTypeID = unitTypesResponse.lstUnitTypes[0].UnitTypeID;
        if (this.navigateToMoveIn) {
          this.getMoveInCharges(this.unitTypeId);
        }


        this.dataSharingService.LstUnitTypes.ReservationFee = this.ReservationFee;
        this.dataSharingService.LstUnitTypes.ReservationFeeTax = this.ReservationFeeTax;

        if (!serviceDescriptionValue && !serviceMonthlyValue) {
          this.reserveUnitForm.patchValue({
            lstUnitTypes: ([{
              Description: this.Description,
            }])
          });

          this.dataSharingService.LstUnitTypes.Description = this.Description;
          this.dataSharingService.LstUnitTypes.UnitTypeID = this.UnitTypeID;
          // this.dataSharingService.LstUnitTypes.MonthlyRate = this.UnitTypeRate;
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
      });
  }


  getRentalPeriod() {
    this.getRentalPeriodSubscribe$ = this.fetchDataService.getRentalPeriod()
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
    if (this.getRentalPeriodSubscribe$ && this.getRentalPeriodSubscribe$) {
      this.getRentalPeriodSubscribe$.unsubscribe();
    }
  }
}
