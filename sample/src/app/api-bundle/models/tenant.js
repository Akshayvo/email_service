"use strict";
exports.__esModule = true;
exports.StrTempTenantToken = exports.UnpaidAR = exports.Tenant = exports.TenantInfo = exports.ObjTenant = exports.ObjTenantDetail = void 0;
var ObjTenantDetail = /** @class */ (function () {
    function ObjTenantDetail(objTenant) {
        this.objTenant = objTenant;
    }
    return ObjTenantDetail;
}());
exports.ObjTenantDetail = ObjTenantDetail;
var ObjTenant = /** @class */ (function () {
    function ObjTenant(FirstName, LastName, Phone, EmailAddress, AddressLine1, AddressLine2, City, State, ZIP) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phone = Phone;
        this.EmailAddress = EmailAddress;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2,
            this.City = City;
        this.State = State;
        this.ZIP = ZIP;
    }
    return ObjTenant;
}());
exports.ObjTenant = ObjTenant;
var TenantInfo = /** @class */ (function () {
    function TenantInfo(tenant) {
        this.tenant = tenant;
    }
    return TenantInfo;
}());
exports.TenantInfo = TenantInfo;
var Tenant = /** @class */ (function () {
    function Tenant(Balance, Name, IsAutoPaymentsEnabled, LastPaymentOn, LastPaymentAmount, unpaidAR) {
        this.Balance = Balance;
        this.Name = Name;
        this.IsAutoPaymentsEnabled = IsAutoPaymentsEnabled;
        this.LastPaymentOn = LastPaymentOn;
        this.LastPaymentAmount = LastPaymentAmount;
        this.UnpaidAR = unpaidAR;
    }
    return Tenant;
}());
exports.Tenant = Tenant;
var UnpaidAR = /** @class */ (function () {
    function UnpaidAR(FromDate, ToDate, Description, Amount, AmountOwed, amountOwed, Comments) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.Description = Description;
        this.Amount = Amount;
        this.AmountOwed = AmountOwed;
        this.amountOwed = amountOwed;
        this.Comments = Comments;
    }
    return UnpaidAR;
}());
exports.UnpaidAR = UnpaidAR;
var StrTempTenantToken = /** @class */ (function () {
    function StrTempTenantToken(strTempTenantToken) {
        this.strTempTenantToken = strTempTenantToken;
    }
    return StrTempTenantToken;
}());
exports.StrTempTenantToken = StrTempTenantToken;
