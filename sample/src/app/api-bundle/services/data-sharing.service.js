"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataSharingService = void 0;
var core_1 = require("@angular/core");
var DataSharingService = /** @class */ (function () {
    function DataSharingService() {
        this.addingTenant = false;
        this.apiKey = '';
        this.cardDetailsObject = {
            CCNumber: '',
            CCBillingAccountName: '',
            CCExpirationMonth: '',
            CCExpirationYear: '',
            CCBillingAddress: '',
            CCBillingZIP: ''
        };
        this.MoveInData = {
            Description: '',
            MonthlyRate: 0,
            UnitTypeID: 0,
            proRateAmount: 0,
            ProrateAmtTax: 0,
            Setup: 0,
            SetupTax: 0,
            OthDeposit: 0,
            Deposit: 0,
            DepositTax: 0,
            RateTax: 0,
            TotalTaxAmount: 0,
            TotalChargesAmount: 0
        };
        this.ReservationData = {
            Description: '',
            MonthlyRate: 0,
            UnitTypeID: 0,
            RateTax: 0,
            formattedMoveInDate: ''
        };
        this.LstUnitTypes = {
            Description: '',
            ReservationFee: 0,
            ReservationFeeTax: 0,
            UnitTypeID: 0,
            MonthlyRate: 0,
            AnnualRate: 0,
            BiAnnualRate: 0,
            QuarterRate: 0
        };
        this.objTenant = {
            FirstName: '',
            LastName: '',
            Phone: '',
            EmailAddress: '',
            AddressLine1: '',
            AddressLine2: '',
            City: '',
            State: '',
            ZIP: '',
            AlternateName: '',
            AlternatePhone: '',
            AlternateAddressLine1: '',
            AlternateAddressLine2: '',
            AlternateCity: '',
            AlternateState: '',
            AlternateZIP: ''
        };
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.getUnitData();
    }
    DataSharingService.prototype.setTenantData = function (value) {
        this.objTenant = value;
    };
    DataSharingService.prototype.getTenantData = function () {
        return this.objTenant;
    };
    DataSharingService.prototype.setUnitData = function (value) {
        this.LstUnitTypes = value;
    };
    DataSharingService.prototype.getUnitData = function () {
        return this.LstUnitTypes;
    };
    DataSharingService.prototype.setReservationData = function (value) {
        this.ReservationData.Description = value.Description;
        this.ReservationData.MonthlyRate = value.MonthlyRate;
        this.ReservationData.UnitTypeID = value.UnitTypeID;
    };
    DataSharingService.prototype.getReservationData = function () {
        return this.ReservationData;
    };
    DataSharingService.prototype.setMoveInData = function (value) {
        this.MoveInData.Description = value.Description;
        this.MoveInData.MonthlyRate = value.MonthlyRate;
        this.MoveInData.UnitTypeID = value.UnitTypeID;
    };
    DataSharingService.prototype.getMoveInData = function () {
        return this.MoveInData;
    };
    DataSharingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataSharingService);
    return DataSharingService;
}());
exports.DataSharingService = DataSharingService;
