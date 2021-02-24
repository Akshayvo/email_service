"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginModalComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(formBuilder, authService, router, dataSharingService, elementRef) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.elementRef = elementRef;
        this.closeLoginPrompt = new core_1.EventEmitter();
    }
    LoginModalComponent.prototype.ngOnInit = function () {
        this.loginModalForm = this.formBuilder.group({
            strUserName: ['', forms_1.Validators.required],
            strPassword: ['', forms_1.Validators.required],
            intAuthMethod: 1
        });
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    };
    Object.defineProperty(LoginModalComponent.prototype, "f", {
        get: function () { return this.loginModalForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginModalComponent.prototype.closeBox = function () {
        this.closeLoginPrompt.next();
    };
    LoginModalComponent.prototype.handleForgotPassword = function () {
        this.showForgotPassword = true;
    };
    LoginModalComponent.prototype.handleShowLoader = function () {
        this.showLoader = true;
    };
    LoginModalComponent.prototype.auth = function (data) {
        var _this = this;
        this.authUnsubscribe$ = this.authService.auth(data)
            .subscribe(function (auth) {
            _this.showPayRent = true;
            _this.authData = auth.strTenantToken;
            localStorage.setItem('strTenantToken', _this.authData);
            _this.dataSharingService.changePassword = true;
            if (!!_this.paymentTab) {
                _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/changePassword"]);
            }
            else {
                _this.router.navigate(["/pay-rent/changePassword"]);
            }
            // this.router.navigate(['/pay-rent/changePassword']);
        }, function (err) {
            _this.credentialsInvalid = true;
            _this.showLoader = false;
        });
    };
    LoginModalComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginModalForm.invalid) {
            return;
        }
        else {
            if (window.localStorage) {
                localStorage.removeItem('strTempTenantToken');
            }
            this.allowedToshow = true;
            this.auth(this.loginModalForm.value);
        }
    };
    LoginModalComponent.prototype.ngOnDestroy = function () {
        if (this.authUnsubscribe$ && !this.authUnsubscribe$.closed) {
            this.authUnsubscribe$.unsubscribe();
        }
    };
    __decorate([
        core_1.Output()
    ], LoginModalComponent.prototype, "closeLoginPrompt");
    LoginModalComponent = __decorate([
        core_1.Component({
            selector: 'app-login-modal',
            templateUrl: './login-modal.component.html',
            styleUrls: ['./login-modal.component.scss']
        })
    ], LoginModalComponent);
    return LoginModalComponent;
}());
exports.LoginModalComponent = LoginModalComponent;
