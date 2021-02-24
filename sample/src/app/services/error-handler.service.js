"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ErrorHandlerService = void 0;
var router_1 = require("@angular/router");
var environment_1 = require("../../environments/environment");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var StackTraceParser = require("error-stack-parser");
var ErrorHandlerService = /** @class */ (function () {
    function ErrorHandlerService(errorReport, injector, navigation) {
        this.errorReport = errorReport;
        this.injector = injector;
        this.navigation = navigation;
        console.log('Error reporting initialized');
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        console.log('Error');
        var router = this.injector.get(router_1.Router);
        if (error instanceof http_1.HttpErrorResponse) {
            // Server error happened
            if (!navigator.onLine) {
                // No Internet Connection
                console.log('App Error -> Not Online');
            }
            else {
                console.log('App Error -> Server Error');
            }
        }
        else {
            // App Error
            console.log('App Error -> Client Error');
        }
        var errorWithContext = this.addContextInfo(error);
        console.log('errorWithContext', errorWithContext);
        // Generic route /error -> Error Handler Component
        if (errorWithContext.message === 'window is not defined') {
            console.log('window is not defined');
        }
        else {
            this.reportError(errorWithContext);
            router.navigate(['/error']);
        }
    };
    ErrorHandlerService.prototype.addContextInfo = function (error) {
        var router = this.injector.get(router_1.Router);
        // You can include context details here (usually coming from other services: UserService...)
        var name = error.name || null;
        var appId = environment_1.environment.appId;
        var version = environment_1.environment.VERSION;
        var time = new Date().getTime();
        var id = appId + "-" + time;
        var location = common_1.LocationStrategy;
        var url = location instanceof common_1.PathLocationStrategy ? location.path() : '';
        var status = error.status || null;
        var message = error.message || error.toString();
        var stack = error instanceof http_1.HttpErrorResponse ? {
            headers: error.headers,
            status: error.status,
            url: error.url,
            type: error.type,
            referrer: document && document.referrer
        } : StackTraceParser.parse(error);
        var currenLocation = { url: router.url, navigationLogs: this.navigation.getHistoryLog() };
        // const previousLocation = window.history.back();
        var errorWithContext = {
            name: name, appId: appId, version: version, time: time, id: id, url: url, status: status, message: message, stack: stack,
            currenLocation: currenLocation
        };
        return errorWithContext;
    };
    ErrorHandlerService.prototype.reportError = function (error) {
        this.errorReport.reportError(error);
    };
    ErrorHandlerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ErrorHandlerService);
    return ErrorHandlerService;
}());
exports.ErrorHandlerService = ErrorHandlerService;
