"use strict";
exports.__esModule = true;
exports.ObjCharges = exports.StrConfirmation = exports.MoveIn = void 0;
var MoveIn = /** @class */ (function () {
    function MoveIn(dteMoveIn, intUnitTypeID) {
        this.dteMoveIn = dteMoveIn;
        this.intUnitTypeID = intUnitTypeID;
    }
    return MoveIn;
}());
exports.MoveIn = MoveIn;
var StrConfirmation = /** @class */ (function () {
    function StrConfirmation(strConfirmation, strAccessCode) {
        this.strConfirmation = strConfirmation;
        this.strAccessCode = strAccessCode;
    }
    return StrConfirmation;
}());
exports.StrConfirmation = StrConfirmation;
var ObjCharges = /** @class */ (function () {
    function ObjCharges(Rate, Setup, SecondMonthProrate, IsSecondMonthProrate, Deposit, OthDeposit, ProrateAmt, BillToDate, LeaseNumber, IsTaxExempt, Taxable, ProrateTax, RateTax, SetupTax, DepositTax, InsuranceRate, InsuranceTax, InsuranceCoverageAmount, InsuranceProrate, InsuranceProrateTax, TotalTaxAmount, TotalChargesAmount) {
        this.Rate = Rate;
        this.Setup = Setup;
        this.SecondMonthProrate = SecondMonthProrate;
        this.IsSecondMonthProrate = IsSecondMonthProrate;
        this.Deposit = Deposit;
        this.OthDeposit = OthDeposit;
        this.ProrateAmt = ProrateAmt;
        this.ProrateTax = ProrateTax;
        this.BillToDate = BillToDate;
        this.LeaseNumber = LeaseNumber;
        this.IsTaxExempt = IsTaxExempt;
        this.Taxable = Taxable;
        this.RateTax = RateTax;
        this.SetupTax = SetupTax;
        this.DepositTax = DepositTax;
        this.InsuranceRate = InsuranceRate;
        this.InsuranceTax = InsuranceTax;
        this.InsuranceCoverageAmount = InsuranceCoverageAmount;
        this.InsuranceProrate = InsuranceProrate;
        this.InsuranceProrateTax = InsuranceProrateTax;
        this.TotalTaxAmount = TotalTaxAmount;
        this.TotalChargesAmount = TotalChargesAmount;
    }
    return ObjCharges;
}());
exports.ObjCharges = ObjCharges;
