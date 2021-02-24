"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ChangePasswordComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var must_match_validator_1 = require("./_helpers/must-match.validator");
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, authService, router, dataSharingService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.submitted = false;
        this.showLoader = false;
        this.passwordChanged = false;
        this.incorrectPassword = false;
        this.changePasswordForm = this.formBuilder.group({
            strOldPassword: ['', [forms_1.Validators.required]],
            strNewPassword: ['', [forms_1.Validators.required]],
            confirmPassword: ['', [forms_1.Validators.required]]
        }, {
            validator: must_match_validator_1.MustMatch('strNewPassword', 'confirmPassword')
        });
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
        if (this.passwordChanged === true) {
            if (!!this.paymentTab) {
                this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
            }
            else {
                this.router.navigate(["/pay-rent/login"]);
            }
        }
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "f", {
        get: function () { return this.changePasswordForm.controls; },
        enumerable: false,
        configurable: true
    });
    ChangePasswordComponent.prototype.goBack = function () {
        this.dataSharingService.changePassword = false;
        localStorage.removeItem('strTenantToken');
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
        }
        else {
            this.router.navigate(["/pay-rent/login"]);
        }
    };
    ChangePasswordComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    ChangePasswordComponent.prototype.changePassword = function (data) {
        var _this = this;
        this.showLoader = true;
        this.changePasswordUnsubscribe$ = this.authService.changePassword(data)
            .subscribe(function (result) {
            _this.showLoader = false;
            if (result.intErrorCode === 1) {
                localStorage.removeItem('strTenantToken');
                _this.passwordChanged = true;
            }
            else {
                _this.incorrectPassword = true;
            }
        }, function (err) {
        });
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.changePasswordForm.invalid) {
            return;
        }
        else {
            this.changePassword(this.changePasswordForm.value);
        }
    };
    ChangePasswordComponent.prototype.ngOnDestroy = function () {
        if (this.changePasswordUnsubscribe$ && !this.changePasswordUnsubscribe$.closed) {
            this.changePasswordUnsubscribe$.unsubscribe();
        }
    };
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;
