"use strict";
exports.__esModule = true;
exports.PayTypeForResult = exports.LstPayTypes = exports.PayTypes = exports.ObjPayment = exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(objPayment) {
        this.objPayment = objPayment;
    }
    return Payment;
}());
exports.Payment = Payment;
var ObjPayment = /** @class */ (function () {
    function ObjPayment(CCAccountNumber, CCAccountName, CCAccountCVV2, CCAccountBillingAddress, CCAccountZIP, CCExpirationMonth, CCExpirationYear, SignUpForAutoPay, PaymentAmount) {
        this.CCAccountNumber = CCAccountNumber;
        this.CCAccountName = CCAccountName;
        this.CCAccountCVV2 = CCAccountCVV2;
        this.CCAccountBillingAddress = CCAccountBillingAddress;
        this.CCAccountZIP = CCAccountZIP;
        this.CCExpirationMonth = CCExpirationMonth;
        this.CCExpirationYear = CCExpirationYear;
        this.SignUpForAutoPay = SignUpForAutoPay;
        this.PaymentAmount = PaymentAmount;
    }
    return ObjPayment;
}());
exports.ObjPayment = ObjPayment;
var PayTypes = /** @class */ (function () {
    function PayTypes(lstPayTypes) {
        this.lstPayTypes = lstPayTypes;
    }
    return PayTypes;
}());
exports.PayTypes = PayTypes;
var LstPayTypes = /** @class */ (function () {
    function LstPayTypes(PayTypeDescription, PayTypeID, IsCreditCard) {
        this.PayTypeDescription = PayTypeDescription;
        this.PayTypeID = PayTypeID;
        this.IsCreditCard = IsCreditCard;
    }
    return LstPayTypes;
}());
exports.LstPayTypes = LstPayTypes;
var PayTypeForResult = /** @class */ (function () {
    function PayTypeForResult(CCApprovalCode, PaymentAmount) {
        this.CCApprovalCode = CCApprovalCode;
        this.PaymentAmount = PaymentAmount;
    }
    return PayTypeForResult;
}());
exports.PayTypeForResult = PayTypeForResult;
