"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorReportingService = void 0;
var environment_1 = require("../../environments/environment");
var core_1 = require("@angular/core");
var ErrorReportingService = /** @class */ (function () {
    function ErrorReportingService(email) {
        this.email = email;
    }
    ErrorReportingService.prototype.reportError = function (error) {
        console.log('Sending Email For Error:', error);
        // Sending the error
        this.email.sendEmail({
            name: environment_1.environment.appId,
            email: environment_1.environment.senderEmail,
            receiveremail: environment_1.environment.errorsMails,
            message: "Error Details: " + JSON.stringify(error),
            subject: " " + environment_1.environment.appId + " Website Error Details"
        }).subscribe(function (result) {
            console.log('Send Email Result:', result);
        });
    };
    ErrorReportingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ErrorReportingService);
    return ErrorReportingService;
}());
exports.ErrorReportingService = ErrorReportingService;
