"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AutoPayComponent = void 0;
var core_1 = require("@angular/core");
var date_1 = require("../../data/date");
var AutoPayComponent = /** @class */ (function () {
    function AutoPayComponent(formBuilder, tenantInfoService, fetchDataService, signOutService, surchargeService, dataSharingService, router) {
        this.formBuilder = formBuilder;
        this.tenantInfoService = tenantInfoService;
        this.fetchDataService = fetchDataService;
        this.signOutService = signOutService;
        this.surchargeService = surchargeService;
        this.dataSharingService = dataSharingService;
        this.router = router;
        this.year = [];
        this.showInput = false;
        this.submitted = false;
        this.showloaderForPayment = false;
        this.toggleSignUp = false;
        this.IsAutoPaymentsEnabled = false;
        this.makeAutoPayStatus = false;
        this.showLoader = false;
        this.marked = false;
        this.signUp = {};
        this.logOut = {};
        this.otherValue = 0;
        this.showSuccessStatus = false;
        this.showError = false;
        this.count = 0;
        this.tokenRemoved = false;
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.tenantTokenExist = false;
        this.isDataUpdated = false;
        this.enableUpdateButton = false;
        this.canExit = true;
        this.isDataSaved = false;
        this.autoPayForm = this.formBuilder.group({
            objTenant: this.formBuilder.group({
                CCNumber: [''],
                CCBillingAccountName: [''],
                CCExpirationMonth: [''],
                CCExpirationYear: [''],
                CCBillingAddress: [''],
                CCBillingZIP: [''],
                PayType: this.formBuilder.group({
                    PayTypeDescription: ['',],
                    PayTypeID: ['']
                })
            })
        });
        var newYear = new Date().getFullYear();
        for (var i = 1; i < 15; i++) {
            this.year.push({
                id: newYear.toString().slice(-2),
                label: newYear
            });
            newYear = newYear + 1;
        }
        if (this.router.url === '/pay-rent/sign-up/payment') {
            this.navigateToMoveInPayment = true;
        }
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
    }
    AutoPayComponent.prototype.unloadNotification = function ($event) {
        $event.returnValue = true;
    };
    AutoPayComponent.prototype.hasUnsavedData = function () {
        return this.canExit;
    };
    AutoPayComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('strTenantToken')) {
            this.getPayMethods();
        }
        else {
            if (!localStorage.getItem('strTempTenantToken')) {
                this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
            }
            else {
                this.getPayMethods();
            }
        }
        this.fetchMonth();
        if (!!this.dataSharingService.isDataSaved && !!this.dataSharingService.isDataUpdated) {
            this.isDataUpdated = this.dataSharingService.isDataUpdated;
            this.enableUpdateButton = true;
        }
    };
    Object.defineProperty(AutoPayComponent.prototype, "f", {
        get: function () { return this.autoPayForm.controls; },
        enumerable: false,
        configurable: true
    });
    AutoPayComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    AutoPayComponent.prototype.fetchMonth = function () {
        this.month = date_1.month;
    };
    AutoPayComponent.prototype.autoCardType = function (number) {
        var _this = this;
        this.cardType = this.getCardType(number.target.value);
        var index = this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === _this.cardType; });
        // tslint:disable-next-line: max-line-length
        var cardTypeId = ((index > -1) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[1].PayTypeID);
        this.paytypeid = cardTypeId;
        this.surchargeService.getIdPaytype(this.paytypeid);
        this.autoPayForm.patchValue({
            objTenant: {
                // PreferredPaymentMethod: cardTypeId,
                PayType: {
                    PayTypeDescription: this.cardType,
                    PayTypeID: cardTypeId
                }
            }
        });
    };
    AutoPayComponent.prototype.getCardType = function (number) {
        // visa
        var re = new RegExp('^4');
        if (number.match(re) != null) {
            return 'Visa';
        }
        // Mastercard
        // Updated for Mastercard 2017 BINs expansion
        // tslint:disable-next-line: max-line-length
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) {
            return 'Master Card';
        }
        // AMEX
        re = new RegExp('^3[47]');
        if (number.match(re) != null) {
            return 'Amex';
        }
        // Discover
        re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
        if (number.match(re) != null) {
            return 'Discover';
        }
        return '';
    };
    AutoPayComponent.prototype.saveDetail = function () {
        this.dataSharingService.cardDetailsObject = Object.assign({}, this.autoPayForm.controls.objTenant.value);
        this.isDataSaved = true;
        this.dataSharingService.isDataSaved = true;
        this.messageSavedData = 'Card Details saved.';
    };
    AutoPayComponent.prototype.selectChangeHandler = function (event) {
        this.selectedDescription = JSON.stringify(event.target.value);
        var indexValue = event.target.value;
        var index = this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === indexValue; });
        this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
        this.surchargeService.getIdPaytype(this.PayTypeIDValue);
        this.autoPayForm.patchValue({
            objTenant: {
                // PreferredPaymentMethod: this.PayTypeIDValue,
                PayType: {
                    PayTypeID: this.PayTypeIDValue
                }
            }
        });
    };
    AutoPayComponent.prototype.getTenantInfo = function () {
        var _this = this;
        this.getTenantInfoSubscribe$ = this.tenantInfoService.getTenantInfo()
            .subscribe(function (tenantData) {
            if (tenantData) {
                var Tenant = tenantData.Tenant;
                _this.balance = Tenant.Balance;
                _this.surchargeService.setAmt(_this.balance);
                _this.surchargeService.getIdPaytype(_this.paytypeid);
                _this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled;
                _this.date = Tenant.LastPaymentOn;
                _this.dataSharingService.signUpForAutoPay = Tenant.IsAutoPaymentsEnabled;
                // tslint:disable-next-line: max-line-length
                _this.defaultCardType = ((Tenant.CCNumber) ? _this.getCardType(Tenant.CCNumber) : _this.lstPayTypes[1].PayTypeDescription);
                var index = _this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === _this.defaultCardType; });
                // tslint:disable-next-line: max-line-length
                var defaultCardPayTypeId = ((index > -1) ? _this.lstPayTypes[index].PayTypeID : _this.lstPayTypes[1].PayTypeID);
                if (localStorage.getItem('strTenantToken')) {
                    _this.paytypeid = defaultCardPayTypeId;
                    _this.surchargeService.getIdPaytype(_this.paytypeid);
                    _this.autoPayForm.patchValue({
                        objTenant: {
                            // PreferredPaymentMethod: defaultCardPayTypeId,
                            PayType: {
                                PayTypeDescription: _this.defaultCardType,
                                PayTypeID: defaultCardPayTypeId
                            }
                        }
                    });
                }
                var tempObject_1 = {
                    CCNumber: Tenant.CCNumber,
                    CCBillingAccountName: Tenant.CCBillingAccountName,
                    CCExpirationMonth: Tenant.CCExpirationMonth,
                    CCExpirationYear: Tenant.CCExpirationYear,
                    CCBillingAddress: Tenant.CCBillingAddress,
                    CCBillingZIP: Tenant.CCBillingZIP,
                    PayType: {
                        PayTypeDescription: _this.defaultCardType,
                        PayTypeID: defaultCardPayTypeId
                    }
                };
                if (!!_this.dataSharingService.isDataUpdated && !!_this.dataSharingService.isDataSaved) {
                    _this.autoPayForm.patchValue({
                        objTenant: {
                            CCNumber: _this.dataSharingService.cardDetailsObject.CCNumber,
                            CCBillingAccountName: _this.dataSharingService.cardDetailsObject.CCBillingAccountName,
                            CCExpirationMonth: _this.dataSharingService.cardDetailsObject.CCExpirationMonth,
                            CCExpirationYear: _this.dataSharingService.cardDetailsObject.CCExpirationYear,
                            CCBillingAddress: _this.dataSharingService.cardDetailsObject.CCBillingAddress,
                            CCBillingZIP: _this.dataSharingService.cardDetailsObject.CCBillingZIP
                        }
                    });
                }
                else {
                    _this.autoPayForm.patchValue({
                        objTenant: {
                            CCNumber: Tenant.CCNumber,
                            CCBillingAccountName: Tenant.CCBillingAccountName,
                            CCExpirationMonth: Tenant.CCExpirationMonth,
                            CCExpirationYear: Tenant.CCExpirationYear,
                            CCBillingAddress: Tenant.CCBillingAddress,
                            CCBillingZIP: Tenant.CCBillingZIP
                        }
                    });
                }
                _this.autoPayForm.controls.objTenant.valueChanges.subscribe(function (data) {
                    _this.objTenantCopy = data;
                    _this.dataSharingService.isDataUpdated = (JSON.stringify(_this.objTenantCopy) !== JSON.stringify(tempObject_1));
                    _this.isDataUpdated = _this.dataSharingService.isDataUpdated;
                    _this.enableUpdateButton = true;
                });
                _this.showLoader = false;
            }
        }, function (err) {
            if (err.status === 401) {
                localStorage.removeItem('strTenantToken');
                _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/login"]);
                _this.sessionExpire = 'Session Expired. Please Login for completing the payment.';
            }
        });
    };
    AutoPayComponent.prototype.navigateToConfirmation = function (location) {
        this.router.navigate([location]);
    };
    AutoPayComponent.prototype.getPayMethods = function () {
        var _this = this;
        this.getPayMethodsSubscribe$ = this.fetchDataService.getPayMethods()
            .subscribe(function (payTypesResponse) {
            _this.lstPayTypes = payTypesResponse.lstPayTypes;
            if (!!localStorage.getItem('strTenantToken')) {
                _this.tenantTokenExist = true;
                _this.showLoader = true;
                _this.getTenantInfo();
            }
            if (!localStorage.getItem('strTenantToken')) {
                var defaultDescription = _this.lstPayTypes[1].PayTypeDescription;
                var defaultPayTypeID = _this.lstPayTypes[1].PayTypeID;
                _this.paytypeid = _this.lstPayTypes[1].PayTypeID;
                _this.surchargeService.getIdPaytype(defaultPayTypeID);
                _this.autoPayForm.patchValue({
                    objTenant: {
                        // PreferredPaymentMethod: defaultPayTypeID,
                        PayType: {
                            PayTypeDescription: defaultDescription,
                            PayTypeID: defaultPayTypeID
                        }
                    }
                });
            }
        });
    };
    AutoPayComponent.prototype.toggleEvent = function () {
        this.enableUpdateButton = true;
        this.count = this.count + 1;
        this.toggleSignUp = true;
        this.dataSharingService.signUpForAutoPay = !this.dataSharingService.signUpForAutoPay;
    };
    AutoPayComponent.prototype.goBack = function () {
        this.showSuccessStatus = false;
        this.showloaderForPayment = false;
        this.IsAutoPaymentsEnabled = this.dataSharingService.signUpForAutoPay;
    };
    AutoPayComponent.prototype.signOut = function (logOut) {
        var _this = this;
        this.signOutSubscribe$ = this.signOutService.signOut(logOut)
            .subscribe(function (result) {
            localStorage.removeItem('strTenantToken');
            _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/login"]);
        }, function (err) {
        });
    };
    AutoPayComponent.prototype.signUpAutoPay = function (signUp) {
        var _this = this;
        this.makeAutoPayStatus = true;
        this.progressMessage = 'Sign Up Auto Pay';
        this.signUpAutoPaySubscribe$ = this.tenantInfoService.signUpAutoPay(signUp)
            .subscribe(function (result) {
            _this.makeAutoPayStatus = false;
            if (result.intErrorCode === 1) {
                _this.showSuccessStatus = true;
                if (_this.dataSharingService.isDataUpdated) {
                    _this.successMessage = "Card Details Updated.";
                    if (_this.toggleSignUp === true) {
                        _this.customSignUp();
                    }
                    if (_this.IsAutoPaymentsEnabled === false && _this.toggleSignUp === false) {
                        _this.OptionOutOfAutoPay(_this.signUp);
                    }
                }
                else {
                    _this.successMessage = 'Sign Up Auto Pay is Completed.';
                }
            }
            _this.toggleSignUp = false;
            _this.dataSharingService.isDataUpdated = false;
        }, function (err) {
        });
    };
    AutoPayComponent.prototype.OptionOutOfAutoPay = function (signUp) {
        var _this = this;
        this.makeAutoPayStatus = true;
        this.progressMessage = 'Option Out Of AutoPay';
        this.OptionOutOfAutoPaySubscribe$ = this.tenantInfoService.OptionOutOfAutoPay(signUp)
            .subscribe(function (result) {
            _this.makeAutoPayStatus = false;
            if (result.intErrorCode === 1) {
                _this.showSuccessStatus = true;
                switch (true) {
                    case (_this.isDataUpdated && _this.count > 0):
                        _this.successMessage = 'Card Details Updated and Option Out Of AutoPay is Completed';
                        break;
                    case (_this.isDataUpdated && _this.count === 0):
                        _this.successMessage = 'Card Details Updated.';
                        break;
                    default:
                        _this.successMessage = 'Option Out Of AutoPay is Completed.';
                }
            }
            _this.toggleSignUp = false;
            _this.dataSharingService.isDataUpdated = false;
        }, function (err) {
        });
    };
    AutoPayComponent.prototype.convertDate = function (date) {
        var formattedNormalDate = new Date(date);
        // tslint:disable-next-line:max-line-length
        return formattedNormalDate.getMonth() + 1 + "-" + formattedNormalDate.getDate() + "-" + formattedNormalDate.getFullYear();
    };
    AutoPayComponent.prototype.customSignUp = function () {
        if (this.dataSharingService.signUpForAutoPay === true) {
            var signUpData = {
                objTenant: {
                    CCNumber: this.autoPayForm.value.objTenant.CCNumber,
                    CCBillingAccountName: this.autoPayForm.value.objTenant.CCBillingAccountName,
                    CCExpirationMonth: this.autoPayForm.value.objTenant.CCExpirationMonth,
                    CCExpirationYear: this.autoPayForm.value.objTenant.CCExpirationYear,
                    CCBillingAddress: this.autoPayForm.value.objTenant.CCBillingAddress,
                    CCBillingZIP: this.autoPayForm.value.objTenant.CCBillingZIP,
                    PreferredPaymentMethod: this.autoPayForm.value.objTenant.PayType.PayTypeID
                }
            };
            this.signUpAutoPay(signUpData);
        }
        else {
            this.OptionOutOfAutoPay(this.signUp);
        }
    };
    AutoPayComponent.prototype.customDataUpdate = function () {
        var data = {
            objTenant: {
                CCNumber: this.autoPayForm.value.objTenant.CCNumber,
                CCBillingAccountName: this.autoPayForm.value.objTenant.CCBillingAccountName,
                CCExpirationMonth: this.autoPayForm.value.objTenant.CCExpirationMonth,
                CCExpirationYear: this.autoPayForm.value.objTenant.CCExpirationYear,
                CCBillingAddress: this.autoPayForm.value.objTenant.CCBillingAddress,
                CCBillingZIP: this.autoPayForm.value.objTenant.CCBillingZIP,
                PreferredPaymentMethod: this.autoPayForm.value.objTenant.PayType.PayTypeID
            }
        };
        this.signUpAutoPay(data);
    };
    AutoPayComponent.prototype.autoPayStatus = function () {
        switch (true) {
            case ((this.dataSharingService.isDataUpdated === true) && (this.toggleSignUp === true)):
                this.customDataUpdate();
                // this.customSignUp();
                break;
            case (this.toggleSignUp === true):
                this.customSignUp();
                break;
            case (this.dataSharingService.isDataUpdated === true):
                this.customDataUpdate();
                break;
        }
    };
    AutoPayComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.makeAutoPayStatus = true;
        if (this.autoPayForm.invalid) {
            return;
        }
        else {
            this.showloaderForPayment = true;
            this.autoPayStatus();
        }
    };
    AutoPayComponent.prototype.ngOnDestroy = function () {
        if (this.OptionOutOfAutoPaySubscribe$ && this.OptionOutOfAutoPaySubscribe$.closed) {
            this.OptionOutOfAutoPaySubscribe$.unsubscribe();
        }
        if (this.signUpAutoPaySubscribe$ && this.signUpAutoPaySubscribe$.closed) {
            this.signUpAutoPaySubscribe$.unsubscribe();
        }
        if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
            this.signOutSubscribe$.unsubscribe();
        }
        if (this.makePaymentSubscribe$ && this.makePaymentSubscribe$.closed) {
            this.makePaymentSubscribe$.unsubscribe();
        }
        if (this.getPayMethodsSubscribe$ && this.getPayMethodsSubscribe$.closed) {
            this.getPayMethodsSubscribe$.unsubscribe();
        }
        if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
            this.getTenantInfoSubscribe$.unsubscribe();
        }
        window.removeEventListener('beforeunload', function (event) {
        });
    };
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event'])
    ], AutoPayComponent.prototype, "unloadNotification");
    AutoPayComponent = __decorate([
        core_1.Component({
            selector: 'app-auto-pay',
            templateUrl: './auto-pay.component.html',
            styleUrls: ['./auto-pay.component.scss']
        })
    ], AutoPayComponent);
    return AutoPayComponent;
}());
exports.AutoPayComponent = AutoPayComponent;
