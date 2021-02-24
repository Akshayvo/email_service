"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var pay_rent_1 = require("../../data/pay-rent");
var contact_1 = require("../../data/contact");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, dataSharingService, authService, router, elementRef) {
        this.formBuilder = formBuilder;
        this.dataSharingService = dataSharingService;
        this.authService = authService;
        this.router = router;
        this.elementRef = elementRef;
        this.submitted = false;
        this.credentialsInvalid = false;
        this.allowedToshow = false;
        this.loginDetail = [];
        this.showForgotPassword = false;
        this.showPayRent = false;
        this.showLoader = false;
        this.showLoginPage = true;
        this.open = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.fetchLoginDetail();
        this.fetchContactDetails();
        this.loginForm = this.formBuilder.group({
            strUserName: ['', forms_1.Validators.required],
            strPassword: ['', forms_1.Validators.required],
            intAuthMethod: 1
        });
        if (window.localStorage) {
            var token = localStorage.getItem('strTenantToken');
            if (token != null) {
                if (this.dataSharingService.changePassword === true) {
                    this.router.navigate(['/pay-rent/rent-sub/changePassword']);
                }
                else {
                    if (this.router.url.includes('rent-sub')) {
                        this.router.navigate(['/pay-rent/rent-sub/payment']);
                    }
                    else {
                        if (this.router.url.includes('sign-up')) {
                            this.router.navigate(['/pay-rent/sign-up/auto-pay']);
                        }
                        else {
                            this.router.navigate(["/pay-rent/payment"]);
                        }
                    }
                }
            }
        }
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.openBox = function () {
        this.open = !this.open;
    };
    LoginComponent.prototype.navigate = function (location) {
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/" + location]);
        }
        else {
            this.router.navigate(["/pay-rent/" + location]);
        }
    };
    LoginComponent.prototype.fetchLoginDetail = function () {
        this.loginDetail = pay_rent_1.loginDetail;
    };
    LoginComponent.prototype.fetchContactDetails = function () {
        this.contact = contact_1.contact;
    };
    LoginComponent.prototype.handleForgotPassword = function () {
        this.showForgotPassword = true;
    };
    LoginComponent.prototype.handleShowLoader = function () {
        this.showLoader = true;
    };
    LoginComponent.prototype.auth = function (data) {
        var _this = this;
        this.authUnsubscribe$ = this.authService.auth(data)
            .subscribe(function (auth) {
            _this.showPayRent = true;
            _this.authData = auth.strTenantToken;
            localStorage.setItem('strTenantToken', _this.authData);
            // this.dataSharingService.strTenantToken = this.authData;
            if (_this.router.url.includes('rent-sub')) {
                _this.router.navigate(['/pay-rent/rent-sub/payment']);
            }
            else {
                if (_this.router.url.includes('sign-up')) {
                    _this.router.navigate(['/pay-rent/sign-up/auto-pay']);
                }
                else {
                    _this.router.navigate(['/pay-rent/payment']);
                }
            }
        }, function (err) {
            _this.credentialsInvalid = true;
            _this.showLoader = false;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (window.localStorage) {
                localStorage.removeItem('strTempTenantToken');
            }
            this.allowedToshow = true;
            this.auth(this.loginForm.value);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.authUnsubscribe$ && !this.authUnsubscribe$.closed) {
            this.authUnsubscribe$.unsubscribe();
        }
    };
    LoginComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
