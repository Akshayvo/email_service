"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestInterceptorService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("../../../environments/environment");
var RequestInterceptorService = /** @class */ (function () {
    function RequestInterceptorService() {
    }
    RequestInterceptorService.prototype.intercept = function (request, next) {
        // Values
        var tenantToken = (!!localStorage.getItem('strTenantToken') ? localStorage.getItem('strTenantToken') : '');
        var token = tenantToken || localStorage.getItem('strTempTenantToken');
        var baseUrl = environment_1.environment.baseUrl;
        var emailUrl = environment_1.environment.emailBaseUrl;
        // Modify Request, by keeping reference to previous
        var modifiedAPIKey = request.clone({
            headers: request.headers.set('APIKey', "" + environment_1.environment.APIKey)
        });
        var authAPIKey = modifiedAPIKey;
        if (token) {
            authAPIKey = modifiedAPIKey.clone({
                headers: request.url.startsWith('tenant') ?
                    modifiedAPIKey.headers.set('Authorization', "Bearer " + tenantToken)
                    : modifiedAPIKey.headers.set('Authorization', "Bearer " + token)
            });
        }
        var contentAPIKey = authAPIKey.clone({
            headers: authAPIKey.headers.set('Content-Type', 'application/json'),
            url: request.url.startsWith('email') ? "" + emailUrl : "" + baseUrl + request.url
        });
        return next.handle(contentAPIKey);
    };
    RequestInterceptorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RequestInterceptorService);
    return RequestInterceptorService;
}());
exports.RequestInterceptorService = RequestInterceptorService;
