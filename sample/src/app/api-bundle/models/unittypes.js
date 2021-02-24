"use strict";
exports.__esModule = true;
exports.LstInsuranceChoices = exports.InsuranceChoice = exports.LstRentalPeriods = exports.RentalPeriod = exports.LstUnitTypes = exports.UnitTypes = void 0;
var UnitTypes = /** @class */ (function () {
    function UnitTypes(lstUnitTypes) {
        this.lstUnitTypes = lstUnitTypes;
    }
    return UnitTypes;
}());
exports.UnitTypes = UnitTypes;
var LstUnitTypes = /** @class */ (function () {
    function LstUnitTypes(Description, MonthlyRate, DailyRate, AnnualRate, BiAnnualRate, QuarterRate, ReservationFeeTax, ReservationFee, UnitTypeID, IsUnitsAvailable, IsClimateControlled) {
        this.Description = Description,
            this.MonthlyRate = MonthlyRate;
        this.DailyRate = DailyRate;
        this.AnnualRate = AnnualRate;
        this.BiAnnualRate = BiAnnualRate;
        this.QuarterRate = QuarterRate;
        this.ReservationFeeTax = ReservationFeeTax;
        this.ReservationFee = ReservationFee;
        this.UnitTypeID = UnitTypeID;
        this.IsUnitsAvailable = IsUnitsAvailable;
        this.IsClimateControlled = IsClimateControlled;
    }
    return LstUnitTypes;
}());
exports.LstUnitTypes = LstUnitTypes;
var RentalPeriod = /** @class */ (function () {
    function RentalPeriod(lstRentalPeriods) {
        this.lstRentalPeriods = lstRentalPeriods;
    }
    return RentalPeriod;
}());
exports.RentalPeriod = RentalPeriod;
var LstRentalPeriods = /** @class */ (function () {
    function LstRentalPeriods(PeriodDescription, PeriodID) {
        this.PeriodDescription = PeriodDescription;
        this.PeriodID = PeriodID;
    }
    return LstRentalPeriods;
}());
exports.LstRentalPeriods = LstRentalPeriods;
var InsuranceChoice = /** @class */ (function () {
    function InsuranceChoice(lstInsuranceChoices, blnSuccess) {
        this.lstInsuranceChoices = lstInsuranceChoices;
        this.blnSuccess = blnSuccess;
    }
    return InsuranceChoice;
}());
exports.InsuranceChoice = InsuranceChoice;
var LstInsuranceChoices = /** @class */ (function () {
    function LstInsuranceChoices(InsuranceChoiceID, CoverageDescription, Premium, ActualCoverageAmount) {
        this.InsuranceChoiceID = InsuranceChoiceID;
        this.CoverageDescription = CoverageDescription;
        this.Premium = Premium;
        this.ActualCoverageAmount = ActualCoverageAmount;
    }
    return LstInsuranceChoices;
}());
exports.LstInsuranceChoices = LstInsuranceChoices;
