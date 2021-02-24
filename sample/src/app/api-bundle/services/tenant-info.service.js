"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TenantInfoService = void 0;
var core_1 = require("@angular/core");
var TenantInfoService = /** @class */ (function () {
    function TenantInfoService(http) {
        this.http = http;
        this.url = "tenant";
        this.updateTenantUrl = "tenant/";
        this.signUpAutoPayUrl = "tenant/autopaysignup";
        this.OptionOutOfAutoPayUrl = "tenant/autopayoptout";
    }
    TenantInfoService.prototype.getTenantInfo = function () {
        return this.http.get(this.url);
    };
    TenantInfoService.prototype.updateTenant = function (tenant) {
        return this.http.post(this.updateTenantUrl, tenant);
    };
    TenantInfoService.prototype.signUpAutoPay = function (signUp) {
        return this.http.post(this.signUpAutoPayUrl, signUp);
    };
    TenantInfoService.prototype.OptionOutOfAutoPay = function (signUp) {
        return this.http.post(this.OptionOutOfAutoPayUrl, signUp);
    };
    TenantInfoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TenantInfoService);
    return TenantInfoService;
}());
exports.TenantInfoService = TenantInfoService;
