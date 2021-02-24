"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewRatesPageComponent = void 0;
var core_1 = require("@angular/core");
var view_rates_1 = require("../../data/view-rates");
var environment_1 = require("../../../environments/environment");
var configuration_1 = require("../../data/configuration");
var script_1 = require("../../data/script");
var ViewRatesPageComponent = /** @class */ (function () {
    function ViewRatesPageComponent(getMoveinChargesService, fetchDataService, router, dataSharingService, eRef) {
        this.getMoveinChargesService = getMoveinChargesService;
        this.fetchDataService = fetchDataService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.eRef = eRef;
        this.showTable = false;
        this.openComponent = false;
        this.showMoveIn = false;
        this.curStage = 0;
        this.showLoader = false;
        this.defaultClimateString = ' ';
        this.showPaymentForMoveIn = false;
        this.showPaymentForReserve = false;
        this.text = false;
        this.facilityName = environment_1.environment.facilityName;
    }
    ViewRatesPageComponent.prototype.ngOnInit = function () {
        this.getData();
        this.fetchThData();
        this.state = script_1.script.state;
    };
    ViewRatesPageComponent.prototype.fetchThData = function () {
        this.th = view_rates_1.th.filter(function (x) { return x.state === true; });
        this.showRate = configuration_1.objSIMSetting.objUnitSizesSetting.blnShowRate;
        this.showDeposit = configuration_1.objSIMSetting.objUnitSizesSetting.blnShowDeposit;
        this.showReserve = configuration_1.objSIMSetting.objActionSetting.blnAllowReservation;
        this.showMovein = configuration_1.objSIMSetting.objActionSetting.blnAllowMoveIn;
        this.showClimateControl = configuration_1.objSIMSetting.objUnitSizesSetting.blnClimateControl;
    };
    ViewRatesPageComponent.prototype.navigate = function (location, unitData) {
        this.dataSharingService.setReservationData(unitData);
        this.router.navigate([environment_1.environment.locationName + "/" + location]);
        this.dataSharingService.LstUnitTypes = unitData;
    };
    ViewRatesPageComponent.prototype.getMoveInCharges = function (description, monthlyRate, intUnitTypeID) {
        var _this = this;
        this.showLoader = true;
        this.getMoveinChargesService.getMoveInCharges({
            intUnitTypeID: intUnitTypeID
        }).subscribe(function (result) {
            _this.showLoader = false;
            var _a = result.objCharges, _b = _a.ProrateAmt, ProrateAmt = _b === void 0 ? 0 : _b, _c = _a.Deposit, Deposit = _c === void 0 ? 0 : _c, _d = _a.DepositTax, DepositTax = _d === void 0 ? 0 : _d, _e = _a.Rate, Rate = _e === void 0 ? 0 : _e, _f = _a.RateTax, RateTax = _f === void 0 ? 0 : _f, _g = _a.ProrateTax, ProrateTax = _g === void 0 ? 0 : _g, _h = _a.OthDeposit, OthDeposit = _h === void 0 ? 0 : _h, _j = _a.Setup, Setup = _j === void 0 ? 0 : _j, _k = _a.SetupTax, SetupTax = _k === void 0 ? 0 : _k, _l = _a.TotalTaxAmount, TotalTaxAmount = _l === void 0 ? 0 : _l, _m = _a.TotalChargesAmount, TotalChargesAmount = _m === void 0 ? 0 : _m;
            _this.prorateAmt = ProrateAmt;
            _this.deposit = Deposit;
            _this.depositTax = DepositTax;
            _this.rate = Rate;
            _this.rateTax = RateTax;
            _this.prorateAmtTax = ProrateTax;
            _this.othDeposit = OthDeposit;
            _this.setup = Setup;
            _this.setupTax = SetupTax;
            _this.defaultTotalTaxAmount = TotalTaxAmount;
            _this.defaultTotalChargesAmount = TotalChargesAmount;
            _this.showPaymentForMoveIn = true;
            _this.descriptionVR = description;
            _this.monthlyRateVR = monthlyRate;
            _this.unitTypeIdVR = intUnitTypeID;
            _this.curStage = 2;
        }, function (err) {
        });
    };
    ViewRatesPageComponent.prototype.getData = function () {
        var _this = this;
        this.getDataSubscribe$ = this.fetchDataService.getData()
            .subscribe(function (unitTypesResponse) {
            _this.showTable = true;
            _this.LstUnitTypes = unitTypesResponse.lstUnitTypes;
        });
    };
    ViewRatesPageComponent.prototype.ngOnDestroy = function () {
        if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
            this.getDataSubscribe$.unsubscribe();
        }
    };
    ViewRatesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-view-rates-page',
            templateUrl: './view-rates-page.component.html',
            styleUrls: ['./view-rates-page.component.scss']
        })
    ], ViewRatesPageComponent);
    return ViewRatesPageComponent;
}());
exports.ViewRatesPageComponent = ViewRatesPageComponent;
