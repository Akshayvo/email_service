"use strict";
exports.__esModule = true;
exports.ResetPassword = exports.VerifyCode = exports.ChangePassword = exports.ForgotPassword = exports.Auth = void 0;
var Auth = /** @class */ (function () {
    function Auth(strTenantToken) {
        this.strTenantToken = strTenantToken;
    }
    return Auth;
}());
exports.Auth = Auth;
var ForgotPassword = /** @class */ (function () {
    function ForgotPassword(strEmailID, intErrorCode) {
        this.strEmailID = strEmailID;
        this.intErrorCode = intErrorCode;
    }
    return ForgotPassword;
}());
exports.ForgotPassword = ForgotPassword;
var ChangePassword = /** @class */ (function () {
    function ChangePassword(strOldPassword, strNewPassword, intErrorCode) {
        this.strNewPassword = strNewPassword;
        this.strOldPassword = strOldPassword;
        this.intErrorCode = intErrorCode;
    }
    return ChangePassword;
}());
exports.ChangePassword = ChangePassword;
var VerifyCode = /** @class */ (function () {
    function VerifyCode(strEmailID, strPasswordToken, intErrorCode, blnSuccess) {
        this.strEmailID = strEmailID;
        strPasswordToken = strPasswordToken;
        this.intErrorCode = intErrorCode;
        this.blnSuccess = blnSuccess;
    }
    return VerifyCode;
}());
exports.VerifyCode = VerifyCode;
var ResetPassword = /** @class */ (function () {
    function ResetPassword(emailID, strPasswordToken, strOldPassword, strNewPassword, intErrorCode, blnSuccess) {
        this.emailID = emailID;
        this.strPasswordToken = strPasswordToken;
        this.strOldPassword = strOldPassword;
        this.strNewPassword = strNewPassword;
        this.intErrorCode = intErrorCode;
        this.blnSuccess = blnSuccess;
    }
    return ResetPassword;
}());
exports.ResetPassword = ResetPassword;
