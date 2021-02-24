"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForgotPasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(formBuilder, authService, router, dataSharingService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.submitted = false;
        this.showLoader = false;
        this.showNoError = false;
        this.forgotPasswordForm = this.formBuilder.group({
            strEmailID: ['', [forms_1.Validators.required, forms_1.Validators.email]]
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "f", {
        get: function () { return this.forgotPasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ForgotPasswordComponent.prototype.goBack = function () {
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
        }
        else {
            this.router.navigate(["/pay-rent/login"]);
        }
    };
    ForgotPasswordComponent.prototype.forgotPassword = function (data) {
        var _this = this;
        this.forgotPasswordUnsubscribe$ = this.authService.forgotPassword(data)
            .subscribe(function (result) {
            _this.showLoader = false;
            if (result.intErrorCode === 1) {
                if (!!_this.paymentTab) {
                    _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/verifyCode"]);
                }
                else {
                    _this.router.navigate(["/pay-rent/verifyCode"]);
                }
            }
            else {
                if (result.intErrorCode === 0) {
                    _this.showNoError = true;
                }
            }
        }, function (err) {
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.forgotPasswordForm.invalid) {
            return;
        }
        else {
            this.showLoader = true;
            this.forgotPassword(this.forgotPasswordForm.value);
        }
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        if (this.forgotPasswordUnsubscribe$ && !this.forgotPasswordUnsubscribe$.closed) {
            this.forgotPasswordUnsubscribe$.unsubscribe();
        }
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot-password',
            templateUrl: './forgot-password.component.html',
            styleUrls: ['./forgot-password.component.scss']
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
