"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VerifyCodeComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var VerifyCodeComponent = /** @class */ (function () {
    function VerifyCodeComponent(formBuilder, authService, router, dataSharingService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.submitted = false;
        this.showLoader = false;
        this.verifyCodeForm = this.formBuilder.group({
            strEmailID: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            strPasswordToken: ['', forms_1.Validators.required]
        });
    }
    VerifyCodeComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    };
    Object.defineProperty(VerifyCodeComponent.prototype, "f", {
        get: function () { return this.verifyCodeForm.controls; },
        enumerable: false,
        configurable: true
    });
    VerifyCodeComponent.prototype.goBack = function () {
        if (!!this.paymentTab) {
            this.router.navigate(["/pay-rent/" + this.paymentTab + "/forgotPassword"]);
        }
        else {
            this.router.navigate(["/pay-rent/forgotPassword"]);
        }
    };
    VerifyCodeComponent.prototype.verifyCode = function (data) {
        var _this = this;
        this.verifyCodeUnsubscribe$ = this.authService.verifyCode(data)
            .subscribe(function (result) {
            if (result.blnSuccess === true) {
                _this.showLoader = false;
                if (!!_this.paymentTab) {
                    _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/reset"]);
                }
                else {
                    _this.router.navigate(["/pay-rent/reset"]);
                }
            }
        }, function (err) {
        });
    };
    VerifyCodeComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.verifyCodeForm.invalid) {
            return;
        }
        else {
            this.showLoader = true;
            this.verifyCode(this.verifyCodeForm.value);
            this.dataSharingService.verificationCode = this.verifyCodeForm.value.strPasswordToken;
        }
    };
    VerifyCodeComponent.prototype.ngOnDestroy = function () {
        if (this.verifyCodeUnsubscribe$ && !this.verifyCodeUnsubscribe$.closed) {
            this.verifyCodeUnsubscribe$.unsubscribe();
        }
    };
    VerifyCodeComponent = __decorate([
        core_1.Component({
            selector: 'app-verify-code',
            templateUrl: './verify-code.component.html',
            styleUrls: ['./verify-code.component.scss']
        })
    ], VerifyCodeComponent);
    return VerifyCodeComponent;
}());
exports.VerifyCodeComponent = VerifyCodeComponent;
