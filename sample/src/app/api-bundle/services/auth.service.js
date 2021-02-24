"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = "auth/signin";
        this.forgotPasswordUrl = "auth/verifyemail";
        this.verifyCodeUrl = "auth/verifycode";
        this.resetPasswordUrl = "auth/resetpassword";
        this.changePasswordUrl = "auth/changepassword";
    }
    AuthService.prototype.auth = function (auth) {
        return this.http.post(this.url, auth);
    };
    AuthService.prototype.forgotPassword = function (forgotPassword) {
        return this.http.post(this.forgotPasswordUrl, forgotPassword);
    };
    AuthService.prototype.verifyCode = function (verifyCode) {
        return this.http.post(this.verifyCodeUrl, verifyCode);
    };
    AuthService.prototype.resetPassword = function (resetPassword) {
        return this.http.post(this.resetPasswordUrl, resetPassword);
    };
    AuthService.prototype.changePassword = function (changePassword) {
        return this.http.post(this.changePasswordUrl, changePassword);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return !!localStorage.getItem('strTenantToken');
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
