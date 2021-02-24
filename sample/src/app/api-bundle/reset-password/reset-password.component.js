"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResetPasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, authService, router, dataSharingService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.submitted = false;
        this.passwordResetted = false;
        this.showLoader = false;
        this.resetPasswordForm = this.formBuilder.group({
            emailID: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            strPasswordToken: ['', forms_1.Validators.required],
            strNewPassword: ['', forms_1.Validators.required]
        });
        this.resetPasswordForm.patchValue({
            strPasswordToken: this.dataSharingService.verificationCode
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "f", {
        get: function () { return this.resetPasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ResetPasswordComponent.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    ResetPasswordComponent.prototype.goToLogin = function () {
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
        }
        else {
            this.router.navigate(["/pay-rent/login"]);
        }
    };
    ResetPasswordComponent.prototype.goBack = function () {
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/verifyCode"]);
        }
        else {
            this.router.navigate(["/pay-rent/verifyCode"]);
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function (data) {
        var _this = this;
        this.resetPasswordUnsubscribe$ = this.authService.resetPassword(data)
            .subscribe(function (result) {
            if (result.blnSuccess === true) {
                _this.showLoader = false;
                _this.passwordResetted = true;
            }
        }, function (err) {
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.resetPasswordForm.invalid) {
            return;
        }
        else {
            this.showLoader = true;
            this.resetPassword(this.resetPasswordForm.value);
        }
    };
    ResetPasswordComponent.prototype.ngOnDestroy = function () {
        if (this.resetPasswordUnsubscribe$ && !this.resetPasswordUnsubscribe$.closed) {
            this.resetPasswordUnsubscribe$.unsubscribe();
        }
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
