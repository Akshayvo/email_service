"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FetchDataService = void 0;
var core_1 = require("@angular/core");
var FetchDataService = /** @class */ (function () {
    function FetchDataService(http) {
        this.http = http;
        this.url = "facility/unittypes";
        this.rentalPeriodUrl = "facility/rentalperiods";
        this.payMethodUrl = "facility/paymethods";
        this.insuranceChoiceUrl = "facility/insurancechoices";
    }
    FetchDataService.prototype.getData = function () {
        return this.http.get(this.url);
    };
    FetchDataService.prototype.getRentalPeriod = function () {
        return this.http.get(this.rentalPeriodUrl);
    };
    FetchDataService.prototype.getPayMethods = function () {
        return this.http.get(this.payMethodUrl);
    };
    FetchDataService.prototype.getInsuranceChoices = function () {
        return this.http.get(this.insuranceChoiceUrl);
    };
    FetchDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FetchDataService);
    return FetchDataService;
}());
exports.FetchDataService = FetchDataService;
