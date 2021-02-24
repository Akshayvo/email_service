"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReserveUnitFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var view_rates_1 = require("../../data/view-rates");
var common_1 = require("@angular/common");
var moment = require("moment");
var environment_1 = require("../../../environments/environment");
var ReserveUnitFormComponent = /** @class */ (function () {
    function ReserveUnitFormComponent(formBuilder, dataSharingService, fetchDataService, tenantInfoService, leadDaysService, moveInService, router, canonical) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.dataSharingService = dataSharingService;
        this.fetchDataService = fetchDataService;
        this.tenantInfoService = tenantInfoService;
        this.leadDaysService = leadDaysService;
        this.moveInService = moveInService;
        this.router = router;
        this.canonical = canonical;
        this.successMessage = false;
        this.count = 0;
        this.option = [];
        this.option1 = [];
        this.submitted = false;
        this.reservationInProgress = false;
        this.showConfirmation = false;
        this.showMoveInDateError = false;
        this.isValueUpdated = true;
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.logOut = {};
        this.unitTypeNotAvailability = false;
        this.showPaymentPage = false;
        this.gettingTenantData = false;
        this.showReservationButton = false;
        this.showAltDetails = false;
        this.canonical.create();
        if (this.router.url.includes('view-rates')) {
            this.showReservationButton = true;
        }
        else {
            this.showReservationButton = false;
        }
        if ((this.router.url.includes('reserve'))) {
            this.navigateToReserve = true;
            this.dataSharingService.navigateToReserve = true;
            this.dataSharingService.navigateToMoveIn = false;
            this.showAltDetails = (environment_1.environment.alternateType.reserve === true) ? true : false;
            this.dataSharingService.showAltDetails = this.showAltDetails;
        }
        else {
            if (this.router.url.includes('move-in')) {
                this.navigateToMoveIn = true;
                this.dataSharingService.navigateToMoveIn = true;
                this.dataSharingService.navigateToReserve = false;
                this.showAltDetails = (environment_1.environment.alternateType.moveIn === true) ? true : false;
                this.dataSharingService.showAltDetails = this.showAltDetails;
            }
        }
        this.reserveUnitForm = this.formBuilder.group({
            objTenant: this.formBuilder.group({
                FirstName: ['', forms_1.Validators.required],
                LastName: ['', forms_1.Validators.required],
                Phone: ['', [forms_1.Validators.required,
                        forms_1.Validators.pattern('^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$')
                    ]],
                EmailAddress: ['', [forms_1.Validators.required, forms_1.Validators.email]],
                AddressLine1: ['', forms_1.Validators.required],
                AddressLine2: [''],
                City: ['', forms_1.Validators.required],
                State: ['', forms_1.Validators.required],
                ZIP: ['', forms_1.Validators.required],
                AlternateName: [''],
                AlternatePhone: ['', [conditionalValidator((function () { return _this.showAltDetails === false; }), forms_1.Validators.required), forms_1.Validators.pattern('^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$')]],
                AlternateAddressLine1: [''],
                AlternateAddressLine2: [''],
                AlternateCity: [''],
                AlternateState: [''],
                AlternateZIP: ['']
            }),
            lstUnitTypes: new forms_1.FormArray([
                this.initLstUnitTypes(),
            ]),
            lstInsuranceChoices: new forms_1.FormArray([
                this.initLstInsuranceChoices(),
            ]),
            lstRentalPeriods: new forms_1.FormArray([
                this.initPeriodDescription(),
            ]),
            dteMoveIn: ['', conditionalValidator((function () { return _this.navigateToMoveIn === true; }), forms_1.Validators.required)
            ]
        });
        function conditionalValidator(condition, validator) {
            return function (control) {
                if (condition()) {
                    return null;
                }
                return validator(control);
            };
        }
    }
    ReserveUnitFormComponent.prototype.initLstInsuranceChoices = function () {
        return this.formBuilder.group({
            CoverageDescription: ['']
        });
    };
    ReserveUnitFormComponent.prototype.initPeriodDescription = function () {
        return this.formBuilder.group({
            PeriodDescription: ['']
        });
    };
    ReserveUnitFormComponent.prototype.initLstUnitTypes = function () {
        return this.formBuilder.group({
            Description: ['']
        });
    };
    ReserveUnitFormComponent.prototype.ngOnInit = function () {
        this.description = this.dataSharingService.getReservationData().Description;
        this.monthlyRate = this.dataSharingService.getReservationData().MonthlyRate;
        this.unitTypeId = this.dataSharingService.getReservationData().UnitTypeID;
        this.getData();
        this.getRentalPeriod();
        if (this.navigateToMoveIn === true) {
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
                    Description: this.description
                }])
        });
    };
    ReserveUnitFormComponent.prototype.fetchUSState = function () {
        this.option = view_rates_1.option;
        this.option1 = view_rates_1.option1;
    };
    ReserveUnitFormComponent.prototype.navigate = function (location) {
        this.router.navigate([environment_1.environment.locationName + "/" + location]);
    };
    Object.defineProperty(ReserveUnitFormComponent.prototype, "f", {
        get: function () { return this.reserveUnitForm.controls; },
        enumerable: false,
        configurable: true
    });
    ReserveUnitFormComponent.prototype.getError = function (form) {
        return form.controls;
    };
    ReserveUnitFormComponent.prototype.close = function () {
        this.unitTypeNotAvailability = false;
    };
    ReserveUnitFormComponent.prototype.navigateToConfirmation = function (location) {
        this.submitted = true;
        this.dataSharingService.objTenant = this.reserveUnitForm.value.objTenant;
        this.dataSharingService.MoveIn.dteMoveIn = this.convertDate(this.reserveUnitForm.value.dteMoveIn);
        if (this.reserveUnitForm.invalid) {
            return;
        }
        else {
        }
        this.router.navigate([environment_1.environment.locationName + "/" + location]);
    };
    ReserveUnitFormComponent.prototype.selectInsuranceChoice = function (event) {
        var indexValue = event.target.value;
        var index = this.LstInsuranceChoices.findIndex(function (x) { return x.CoverageDescription === indexValue; });
        if (!!index) {
            this.dataSharingService.insuranceChoiceId = this.LstInsuranceChoices[index].InsuranceChoiceID;
            this.premium = this.LstInsuranceChoices[index].Premium;
        }
        this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID);
    };
    ReserveUnitFormComponent.prototype.changeRate = function (event) {
        var indexValue = event.target.value;
        var index = this.LstRentalPeriods.findIndex(function (x) { return x.PeriodDescription === indexValue; });
        this.dataSharingService.periodID = this.LstRentalPeriods[index].PeriodID;
        this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID);
    };
    ReserveUnitFormComponent.prototype.selectChangeHandler = function (event) {
        var indexValue = event.target.value;
        var index = this.lstUnitTypes.findIndex(function (x) { return x.Description === indexValue; });
        if (!!index) {
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
            this.getMoveInCharges(this.unitTypeId, this.dataSharingService.insuranceChoiceId, this.dataSharingService.periodID);
        }
    };
    ReserveUnitFormComponent.prototype.getMoveInCharges = function (intUnitTypeID, intInsuranceID, intPeriodID) {
        var _this = this;
        this.moveInService.getMoveInCharges({
            intUnitTypeID: intUnitTypeID,
            intInsuranceID: intInsuranceID,
            intPeriodID: intPeriodID
        }).subscribe(function (result) {
            var _a = result.objCharges, _b = _a.ProrateAmt, ProrateAmt = _b === void 0 ? 0 : _b, _c = _a.Deposit, Deposit = _c === void 0 ? 0 : _c, _d = _a.DepositTax, DepositTax = _d === void 0 ? 0 : _d, _e = _a.RateTax, RateTax = _e === void 0 ? 0 : _e, _f = _a.ProrateAmtTax, ProrateAmtTax = _f === void 0 ? 0 : _f, _g = _a.OthDeposit, OthDeposit = _g === void 0 ? 0 : _g, _h = _a.Setup, Setup = _h === void 0 ? 0 : _h, _j = _a.SetupTax, SetupTax = _j === void 0 ? 0 : _j, _k = _a.TotalTaxAmount, TotalTaxAmount = _k === void 0 ? 0 : _k, _l = _a.TotalChargesAmount, TotalChargesAmount = _l === void 0 ? 0 : _l;
            _this.proRateAmount = ProrateAmt;
            _this.deposit = Deposit;
            _this.depositTax = DepositTax;
            _this.rateTax = RateTax;
            _this.prorateAmtTax = ProrateAmtTax;
            _this.othDeposit = OthDeposit;
            _this.setup = Setup;
            _this.setupTax = SetupTax;
            _this.totalTaxAmount = TotalTaxAmount;
            _this.totalChargesAmount = TotalChargesAmount;
            _this.dataSharingService.MoveInData.TotalChargesAmount = parseFloat(_this.totalChargesAmount.toFixed(2));
            _this.dataSharingService.MoveInData.TotalTaxAmount = parseFloat(_this.totalTaxAmount.toFixed(2));
        }, function (err) {
        });
    };
    ReserveUnitFormComponent.prototype.getLeadDays = function (data) {
        var _this = this;
        this.getLeadDaysSubscribe$ = this.leadDaysService.getLeadDays(data)
            .subscribe(function (result) {
            _this.intLeadDaysFrom = result.intLeadDaysFrom;
            _this.intLeadDaysTo = result.intLeadDaysTo;
            _this.from = moment().add(_this.intLeadDaysFrom, 'days').toISOString();
            _this.to = moment().add(_this.intLeadDaysTo, 'days').toISOString();
        });
    };
    ReserveUnitFormComponent.prototype.getTenantInfo = function () {
        var _this = this;
        this.getTenantInfoSubscribe$ = this.tenantInfoService.getTenantInfo()
            .subscribe(function (tenantData) {
            _this.gettingTenantData = false;
            if (tenantData) {
                var Tenant = tenantData.Tenant;
                var tempObject_1 = {
                    FirstName: Tenant.FirstName,
                    LastName: Tenant.LastName,
                    Phone: Tenant.Phone,
                    EmailAddress: Tenant.EmailAddress,
                    AddressLine1: Tenant.AddressLine1,
                    AddressLine2: Tenant.AddressLine2,
                    City: Tenant.City,
                    State: Tenant.State,
                    ZIP: Tenant.ZIP,
                    AlternateName: Tenant.AlternateName,
                    AlternatePhone: Tenant.AlternatePhone,
                    AlternateAddressLine1: Tenant.AlternateAddressLine2,
                    AlternateAddressLine2: Tenant.AlternateAddressLine2,
                    AlternateCity: Tenant.AlternateCity,
                    AlternateState: Tenant.AlternateState,
                    AlternateZIP: Tenant.AlternateZIP
                };
                _this.reserveUnitForm.patchValue({
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
                        AlternateName: Tenant.AlternateName,
                        AlternatePhone: Tenant.AlternatePhone,
                        AlternateAddressLine1: Tenant.AlternateAddressLine1,
                        AlternateAddressLine2: Tenant.AlternateAddressLine2,
                        AlternateCity: Tenant.AlternateCity,
                        AlternateState: Tenant.AlternateState,
                        AlternateZIP: Tenant.AlternateZIP
                    })
                });
                _this.reserveUnitForm.controls.objTenant.valueChanges.subscribe(function (data) {
                    _this.objTenantCopy = data;
                    _this.isValueUpdated = (JSON.stringify(_this.objTenantCopy) !== JSON.stringify(tempObject_1));
                    _this.dataSharingService.isValueUpdated = _this.isValueUpdated;
                });
            }
        }, function (err) {
            _this.gettingTenantData = false;
            if (err.status === 401) {
                localStorage.removeItem('strTenantToken');
            }
        });
    };
    ReserveUnitFormComponent.prototype.convertDate = function (date) {
        var formattedNormalDate = new Date(date);
        // tslint:disable-next-line:max-line-length
        return formattedNormalDate.getMonth() + 1 + "-" + formattedNormalDate.getDate() + "-" + formattedNormalDate.getFullYear();
    };
    ReserveUnitFormComponent.prototype.getFilterLstUnitTypes = function (unitTypesResponse) {
        this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
        this.filterLstUnitTypes = this.lstUnitTypes.filter(function (x) { return x.IsUnitsAvailable === true; });
    };
    ReserveUnitFormComponent.prototype.getData = function () {
        var _this = this;
        this.getDataSubscribe$ = this.fetchDataService.getData()
            .subscribe(function (unitTypesResponse) {
            _this.lstUnitTypes = unitTypesResponse.lstUnitTypes;
            _this.getFilterLstUnitTypes(unitTypesResponse);
            if (_this.filterLstUnitTypes.length != 0) {
                var defaultMonthlyValue = _this.filterLstUnitTypes[0].MonthlyRate;
                _this.description = _this.filterLstUnitTypes[0].Description;
                _this.reservationFeeTax = _this.filterLstUnitTypes[0].ReservationFeeTax;
                _this.reservationFee = _this.filterLstUnitTypes[0].ReservationFee;
                _this.unitTypeID = _this.filterLstUnitTypes[0].UnitTypeID;
                _this.MoveIn.intUnitTypeID = _this.unitTypeID || _this.filterLstUnitTypes[0].UnitTypeID;
                _this.unitTypeId =
                    _this.dataSharingService.getReservationData().UnitTypeID || _this.filterLstUnitTypes[0].UnitTypeID;
                _this.monthlyRate = _this.dataSharingService.LstUnitTypes.MonthlyRate || defaultMonthlyValue;
            }
            var serviceMonthlyValue = _this.dataSharingService.LstUnitTypes.MonthlyRate;
            var serviceDescriptionValue = _this.dataSharingService.LstUnitTypes.Description;
            if (_this.navigateToMoveIn) {
                // tslint:disable-next-line:max-line-length
                _this.getMoveInCharges(_this.unitTypeId, _this.dataSharingService.insuranceChoiceId, _this.dataSharingService.periodID);
            }
            _this.dataSharingService.LstUnitTypes.ReservationFee = _this.reservationFee;
            _this.dataSharingService.LstUnitTypes.ReservationFeeTax = _this.reservationFeeTax;
            if (!serviceDescriptionValue && !serviceMonthlyValue) {
                _this.reserveUnitForm.patchValue({
                    lstUnitTypes: ([{
                            Description: _this.description
                        }])
                });
                _this.dataSharingService.LstUnitTypes.Description = _this.description;
                _this.dataSharingService.LstUnitTypes.UnitTypeID = _this.unitTypeID;
                _this.dataSharingService.LstUnitTypes.MonthlyRate = _this.monthlyRate;
                _this.dataSharingService.LstUnitTypes.AnnualRate = _this.annualRate;
                _this.dataSharingService.LstUnitTypes.BiAnnualRate = _this.biAnnualRate;
                _this.dataSharingService.LstUnitTypes.QuarterRate = _this.quarterRate;
            }
            else {
                _this.reserveUnitForm.patchValue({
                    lstUnitTypes: ([{
                            Description: serviceDescriptionValue
                        }])
                });
                _this.dataSharingService.LstUnitTypes.Description = serviceDescriptionValue;
                _this.dataSharingService.LstUnitTypes.MonthlyRate = serviceMonthlyValue;
            }
        });
    };
    ReserveUnitFormComponent.prototype.getRentalPeriod = function () {
        var _this = this;
        this.getRentalPeriodSubscribe$ = this.fetchDataService.getRentalPeriod()
            .subscribe(function (rentalPeriodResponse) {
            _this.LstRentalPeriods = rentalPeriodResponse.lstRentalPeriods;
            if (_this.LstRentalPeriods.length != 0) {
                var defaultPeriodDescription = rentalPeriodResponse.lstRentalPeriods[0].PeriodDescription;
                _this.dataSharingService.periodID = rentalPeriodResponse.lstRentalPeriods[0].PeriodID;
                _this.reserveUnitForm.patchValue({
                    lstRentalPeriods: ([{
                            PeriodDescription: defaultPeriodDescription
                        }])
                });
                _this.dataSharingService.period = defaultPeriodDescription;
            }
        });
    };
    ReserveUnitFormComponent.prototype.getInsuranceChoices = function () {
        var _this = this;
        this.getInsuranceChoiceSubscribe$ = this.fetchDataService.getInsuranceChoices()
            .subscribe(function (insuranceChoicesResponse) {
            if (insuranceChoicesResponse.blnSuccess === true) {
                _this.LstInsuranceChoices = insuranceChoicesResponse.lstInsuranceChoices;
                var defaultInsuranceChoice = insuranceChoicesResponse.lstInsuranceChoices[0].CoverageDescription;
                _this.dataSharingService.insuranceChoiceId = insuranceChoicesResponse.lstInsuranceChoices[0].InsuranceChoiceID;
                _this.reserveUnitForm.patchValue({
                    lstInsuranceChoices: ([{
                            CoverageDescription: defaultInsuranceChoice
                        }])
                });
            }
        });
    };
    ReserveUnitFormComponent.prototype.onSubmit = function () {
    };
    ReserveUnitFormComponent.prototype.ngOnDestroy = function () {
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
    };
    ReserveUnitFormComponent = __decorate([
        core_1.Component({
            selector: 'app-reserve-unit-form',
            templateUrl: './reserve-unit-form.component.html',
            styleUrls: ['./reserve-unit-form.component.scss'],
            providers: [common_1.DatePipe]
        })
    ], ReserveUnitFormComponent);
    return ReserveUnitFormComponent;
}());
exports.ReserveUnitFormComponent = ReserveUnitFormComponent;
