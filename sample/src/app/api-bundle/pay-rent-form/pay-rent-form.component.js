"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PayRentFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var date_1 = require("../../data/date");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var environment_1 = require("../../../environments/environment");
var configuration_1 = require("../../data/configuration");
var PayRentFormComponent = /** @class */ (function () {
    function PayRentFormComponent(formBuilder, tenantInfoService, fetchDataService, paymentService, signOutService, surchargeService, router, datePipe, dataSharingService, makeAReservationService, moveInService, addTenantService) {
        this.formBuilder = formBuilder;
        this.tenantInfoService = tenantInfoService;
        this.fetchDataService = fetchDataService;
        this.paymentService = paymentService;
        this.signOutService = signOutService;
        this.surchargeService = surchargeService;
        this.router = router;
        this.datePipe = datePipe;
        this.dataSharingService = dataSharingService;
        this.makeAReservationService = makeAReservationService;
        this.moveInService = moveInService;
        this.addTenantService = addTenantService;
        this.lstPayTypes = [];
        this.year = [];
        this.showInput = false;
        this.submitted = false;
        this.showloaderForPayment = false;
        this.toggleSignUp = false;
        this.IsAutoPaymentsEnabled = false;
        this.makePaymentForUnit = false;
        this.showLoader = false;
        this.marked = false;
        this.signUp = {};
        this.logOut = {};
        this.otherValue = 0;
        this.showSuccessPayment = false;
        this.showError = false;
        this.count = 0;
        this.tokenRemoved = false;
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.tenantTokenExist = false;
        this.tenantData = {
            objTenant: {}
        };
        this.payRentForm = this.formBuilder.group({
            objPayment: this.formBuilder.group({
                CCAccountNumber: ['', forms_1.Validators.required],
                CCAccountName: ['', forms_1.Validators.required],
                CCExpirationMonth: ['', forms_1.Validators.required],
                CCExpirationYear: ['', forms_1.Validators.required],
                CCAccountCVV2: [''],
                CCAccountBillingAddress: ['', forms_1.Validators.required],
                CCAccountZIP: ['', forms_1.Validators.required],
                SignUpForAutoPay: [],
                PaymentAmount: ['', forms_1.Validators.required],
                PayType: this.formBuilder.group({
                    PayTypeDescription: ['', forms_1.Validators.required],
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
        this.navigateToReserve = this.dataSharingService.navigateToReserve;
        this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
        if (!!this.dataSharingService.LstUnitTypes.ReservationFeeTax) {
            // tslint:disable-next-line: max-line-length
            var amount = parseFloat((this.dataSharingService.LstUnitTypes.ReservationFee + this.dataSharingService.LstUnitTypes.ReservationFeeTax).toFixed(2));
            if (amount && amount > 0) {
                this.surchargeService.setAmt(amount);
                // this.getSurCharge();
            }
        }
        else {
            this.TotalReserveAmount = this.dataSharingService.LstUnitTypes.ReservationFee;
            if (!!this.TotalReserveAmount && this.TotalReserveAmount > 0) {
                this.surchargeService.setAmt(this.TotalReserveAmount);
                // this.getSurCharge();
            }
        }
        if (!!this.dataSharingService.MoveInData.TotalChargesAmount) {
            this.totalMoveInAmount =
                // tslint:disable-next-line: max-line-length
                parseFloat((this.dataSharingService.MoveInData.TotalChargesAmount + this.dataSharingService.MoveInData.TotalTaxAmount).toFixed(2));
            if (!!this.totalMoveInAmount && this.totalMoveInAmount > 0) {
                this.surchargeService.setAmt(this.totalMoveInAmount);
                // this.getSurCharge();
            }
        }
        else {
            this.totalMoveInAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
            if (!!this.totalMoveInAmount && this.totalMoveInAmount > 0) {
                this.surchargeService.setAmt(this.totalMoveInAmount);
                // this.getSurCharge();
            }
        }
        if (this.router.url.includes('payReservationCharges')) {
            this.navigateToReserve = true;
            this.navigateToMoveIn = false;
            this.payRentForm.patchValue({
                objPayment: {
                    PaymentAmount: this.TotalReserveAmount
                }
            });
        }
        else {
            if (this.router.url.includes('payMoveInCharges')) {
                this.navigateToReserve = false;
                this.navigateToMoveIn = true;
                this.payRentForm.patchValue({
                    objPayment: {
                        PaymentAmount: this.totalMoveInAmount
                    }
                });
            }
            else {
                if (this.router.url.includes('payment')) {
                    this.navigateToMoveIn = false;
                    this.navigateToReserve = false;
                    this.navigateToMoveInPayment = true;
                }
            }
        }
        this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
        this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
        this.fetchCards();
    }
    PayRentFormComponent.prototype.fetchCards = function () {
        this.cards = environment_1.environment.cards;
    };
    PayRentFormComponent.prototype.ngOnInit = function () {
        if (!!localStorage.getItem('paymentTab')) {
            this.paymentTab = localStorage.getItem('paymentTab');
        }
        this.blnAllowPartialPayments = configuration_1.objSIMSetting.objPaymentSetting.blnAllowPartialPayments;
        this.tenantData.objTenant = this.dataSharingService.objTenant;
        if (!!localStorage.getItem('strTenantToken')) {
            this.getPayMethods();
        }
        else {
            if (!localStorage.getItem('strTempTenantToken')) {
                if (this.dataSharingService.addingTenant === true) {
                    this.getPayMethods();
                }
                else {
                    if (!!this.paymentTab) {
                        this.router.navigate(["/pay-rent/" + this.paymentTab + "/login"]);
                    }
                    else {
                        this.router.navigate(['/pay-rent/login']);
                    }
                }
            }
            else {
                this.getPayMethods();
            }
        }
        this.fetchMonth();
    };
    Object.defineProperty(PayRentFormComponent.prototype, "f", {
        get: function () { return this.payRentForm.controls; },
        enumerable: false,
        configurable: true
    });
    PayRentFormComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    PayRentFormComponent.prototype.fetchMonth = function () {
        this.month = date_1.month;
    };
    PayRentFormComponent.prototype.autoCardType = function (number) {
        var _this = this;
        this.cardType = this.getCardType(number.target.value);
        var index = this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === _this.cardType; });
        // tslint:disable-next-line: max-line-length
        var cardTypeId = ((index > -1) ? this.lstPayTypes[index].PayTypeID : this.lstPayTypes[0].PayTypeID);
        this.paytypeid = cardTypeId;
        this.surchargeService.getIdPaytype(this.paytypeid);
        this.payRentForm.patchValue({
            objPayment: {
                PayType: {
                    PayTypeDescription: this.cardType,
                    PayTypeID: cardTypeId
                }
            }
        });
    };
    PayRentFormComponent.prototype.getCardType = function (number) {
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
    PayRentFormComponent.prototype.selectChangeHandler = function (event) {
        this.selectedDescription = JSON.stringify(event.target.value);
        var indexValue = event.target.value;
        var index = this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === indexValue; });
        if (this.lstPayTypes && this.lstPayTypes.length > 0) {
            this.PayTypeIDValue = this.lstPayTypes[index].PayTypeID;
            this.surchargeService.getIdPaytype(this.PayTypeIDValue);
            this.payRentForm.patchValue({
                objPayment: {
                    PayType: {
                        PayTypeID: this.PayTypeIDValue
                    }
                }
            });
        }
        if (this.router.url.includes('payReservationCharges')) {
            this.surchargeService.setAmt(this.TotalReserveAmount);
            this.getSurCharge();
        }
        else {
            if (this.router.url.includes('payMoveInCharges')) {
                this.surchargeService.setAmt(this.totalMoveInAmount);
                this.getSurCharge();
            }
            else {
                if (this.showInput) {
                    if (this.customOtherValue) {
                        this.surchargeService.setAmt(this.customOtherValue);
                        this.getSurCharge();
                    }
                }
                else {
                    this.getSurCharge();
                }
            }
        }
    };
    PayRentFormComponent.prototype.handleChange = function (e) {
        if (e.target.id === '2') {
            this.showInput = true;
            this.id = e.target.id;
            this.surchargeService.setAmt(0);
            this.getSurCharge();
        }
        else {
            this.surchargeService.setAmt(this.balance);
            this.getSurCharge();
            this.showInput = false;
        }
    };
    PayRentFormComponent.prototype.onKeyUp = function (e) {
        var _this = this;
        this.customOtherValue = e.target.value;
        this.surchargeService.setAmt(e.target.value);
        setTimeout(function () {
            _this.getSurCharge();
        }, 1000);
    };
    PayRentFormComponent.prototype.getTenantInfo = function () {
        var _this = this;
        this.getTenantInfoSubscribe$ = this.tenantInfoService.getTenantInfo()
            .subscribe(function (tenantData) {
            if (tenantData) {
                var Tenant = tenantData.Tenant;
                _this.balance = Tenant.Balance;
                _this.surchargeService.setAmt(_this.balance);
                if (_this.router.url.includes('payReservationCharges')) {
                    _this.surchargeService.setAmt(_this.TotalReserveAmount);
                }
                else {
                    if (_this.router.url.includes('payMoveInCharges')) {
                        _this.surchargeService.setAmt(_this.totalMoveInAmount);
                    }
                    else {
                        _this.surchargeService.setAmt(_this.balance);
                    }
                }
                _this.surchargeService.getIdPaytype(_this.paytypeid);
                _this.IsAutoPaymentsEnabled = Tenant.IsAutoPaymentsEnabled;
                _this.date = Tenant.LastPaymentOn;
                _this.lastPaymentOn = _this.datePipe.transform(_this.date, 'MM/dd/yyyy');
                _this.lastPaymentAmount = Tenant.LastPaymentAmount;
                _this.UnpaidAR = Tenant.UnpaidAR;
                // tslint:disable-next-line:forin
                for (var i in _this.UnpaidAR) {
                    _this.UnpaidAR[i].FromDate = _this.datePipe.transform(_this.UnpaidAR[i].FromDate, 'MM/dd/yyyy');
                    _this.UnpaidAR[i].ToDate = _this.datePipe.transform(_this.UnpaidAR[i].ToDate, 'MM/dd/yyyy');
                    if (_this.UnpaidAR[i].AmountOwed < 0) {
                        _this.UnpaidAR[i].amountOwed = Math.abs(_this.UnpaidAR[i].AmountOwed);
                    }
                }
                if (_this.balance < 0) {
                    _this.displayBalance = Math.abs(_this.balance);
                }
                else {
                    _this.displayBalance = _this.balance;
                }
                if (_this.balance <= 0) {
                    _this.showInput = true;
                }
                // tslint:disable-next-line: max-line-length
                _this.defaultCardType = ((Tenant.CCNumber) ? _this.getCardType(Tenant.CCNumber) : _this.lstPayTypes[0].PayTypeDescription);
                var index = _this.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === _this.defaultCardType; });
                // tslint:disable-next-line: max-line-length
                var defaultCardPayTypeId = ((index > -1) ? _this.lstPayTypes[index].PayTypeID : _this.lstPayTypes[0].PayTypeID);
                if (localStorage.getItem('strTenantToken')) {
                    _this.paytypeid = defaultCardPayTypeId;
                    _this.surchargeService.getIdPaytype(_this.paytypeid);
                    _this.payRentForm.patchValue({
                        objPayment: {
                            PayType: {
                                PayTypeDescription: _this.defaultCardType,
                                PayTypeID: defaultCardPayTypeId
                            }
                        }
                    });
                }
                _this.payRentForm.patchValue({
                    objPayment: {
                        CCAccountNumber: Tenant.CCNumber,
                        CCAccountName: Tenant.CCBillingAccountName,
                        CCExpirationMonth: Tenant.CCExpirationMonth,
                        CCExpirationYear: Tenant.CCExpirationYear,
                        CCAccountBillingAddress: Tenant.CCBillingAddress,
                        CCAccountZIP: Tenant.CCBillingZIP,
                        SignUpForAutoPay: Tenant.IsAutoPaymentsEnabled,
                        // tslint:disable-next-line: max-line-length
                        PaymentAmount: (_this.navigateToMoveInPayment ? _this.balance : (_this.navigateToReserve ? _this.TotalReserveAmount : _this.totalMoveInAmount))
                    }
                });
                _this.showLoader = false;
                _this.getSurCharge();
            }
        }, function (err) {
            if (err.status === 401) {
                localStorage.removeItem('strTenantToken');
                if (!!_this.paymentTab) {
                    _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/login"]);
                }
                else {
                    _this.router.navigate(['/pay-rent/login']);
                }
                _this.sessionExpire = 'Session Expired. Please Login for completing the payment.';
            }
        });
    };
    PayRentFormComponent.prototype.navigateToConfirmation = function (location) {
        this.router.navigate([location]);
    };
    PayRentFormComponent.prototype.getPayMethods = function () {
        var _this = this;
        this.getPayMethodsSubscribe$ = this.fetchDataService.getPayMethods()
            .subscribe(function (payTypesResponse) {
            _this.cards.forEach(function (element) {
                if (payTypesResponse.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === element; })) {
                    var index = payTypesResponse.lstPayTypes.findIndex(function (x) { return x.PayTypeDescription === element; });
                    if (index > -1) {
                        _this.lstPayTypes.push(payTypesResponse.lstPayTypes[index]);
                    }
                }
            });
            if (!!localStorage.getItem('strTenantToken')) {
                _this.tenantTokenExist = true;
                _this.showLoader = true;
                _this.getTenantInfo();
            }
            else {
                var defaultDescription = _this.lstPayTypes[0].PayTypeDescription;
                var defaultPayTypeID = _this.lstPayTypes[0].PayTypeID;
                _this.paytypeid = _this.lstPayTypes[0].PayTypeID;
                console.log('lstPayTypes', _this.lstPayTypes, _this.paytypeid);
                _this.surchargeService.getIdPaytype(_this.paytypeid);
                console.log('this.surchargeService.getIdPaytype(this.paytypeid);', _this.surchargeService.getIdPaytype(_this.paytypeid));
                _this.getSurCharge();
                _this.payRentForm.patchValue({
                    objPayment: {
                        PayType: {
                            PayTypeDescription: defaultDescription,
                            PayTypeID: defaultPayTypeID
                        }
                    }
                });
            }
        });
    };
    // toggleEvent(e: any) {
    //   this.toggleSignUp = true;
    // }
    PayRentFormComponent.prototype.getSurCharge = function () {
        var _this = this;
        this.surcharge = 0;
        this.surchargeService.getSurCharge()
            .subscribe(function (result) {
            _this.amountToPay = result.decTotalAmount;
            _this.TotalReserveAmount = result.decTotalAmount;
            if (_this.router.url.includes('payReservationCharges')) {
                _this.surcharge = result.decTotalAmount - _this.TotalReserveAmount;
            }
            else {
                if (_this.router.url.includes('payReservationCharges')) {
                    _this.surcharge = result.decTotalAmount - _this.totalMoveInAmount;
                }
                else {
                    if (_this.showInput) {
                        if (_this.customOtherValue) {
                            _this.surcharge = result.decTotalAmount - _this.customOtherValue;
                        }
                    }
                    else {
                        if (_this.balance > 0) {
                            _this.surcharge = result.decTotalAmount - _this.balance;
                        }
                    }
                }
            }
        }, function (err) {
            if (err.status === 400) {
                _this.showError = true;
                _this.errorMessage = 'Please enter the valid amount';
            }
        });
    };
    PayRentFormComponent.prototype.makePayment = function (paymentData) {
        var _this = this;
        this.makePaymentForUnit = true;
        if (this.toggleSignUp === true) {
            if (this.payRentForm.value.objPayment.SignUpForAutoPay === true) {
                this.signUpAutoPay(this.signUp);
            }
            else {
                this.OptionOutOfAutoPay(this.signUp);
            }
        }
        this.invalidPayment = null;
        this.makePaymentSubscribe$ = this.paymentService.makePayment(paymentData)
            .subscribe(function (paymentDataResponse) {
            // this.showloaderForPayment = false;
            if (paymentDataResponse && paymentDataResponse.PayTypeForResult && paymentDataResponse.PayTypeForResult.PaymentAmountTotal) {
                _this.dataSharingService.PaymentAmount = paymentDataResponse.PayTypeForResult.PaymentAmountTotal;
            }
            _this.dataSharingService.CCApprovalCode = paymentDataResponse.PayTypeForResult.CCApprovalCode;
            if (paymentDataResponse.intErrorCode === 1) {
                _this.makePaymentForUnit = false;
                if (_this.navigateToReserve) {
                    _this.MoveIn.intUnitTypeID = _this.dataSharingService.LstUnitTypes.UnitTypeID;
                    _this.makeAReservation(_this.MoveIn);
                }
                else {
                    if (_this.navigateToMoveIn) {
                        _this.MoveIn.intUnitTypeID = _this.dataSharingService.LstUnitTypes.UnitTypeID;
                        _this.moveIn(_this.MoveIn);
                    }
                    else {
                        if (!!_this.paymentTab) {
                            _this.router.navigate(["pay-rent/" + _this.paymentTab + "/thank-you"]);
                        }
                        else {
                            _this.router.navigate(["pay-rent/thank-you"]);
                        }
                    }
                }
                _this.showSuccessPayment = true;
            }
            else {
                _this.makePaymentForUnit = false;
                _this.invalidPayment = 'Unable to make the payment. Please check your card detail.';
            }
        }, function (err) {
            _this.makePaymentForUnit = false;
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 400) {
                    _this.showloaderForPayment = false;
                    _this.invalidPayment = 'Invalid Amount, Payment Amount must be greater than 0.';
                }
            }
        });
    };
    PayRentFormComponent.prototype.signOut = function (logOut) {
        var _this = this;
        this.signOutSubscribe$ = this.signOutService.signOut(logOut)
            .subscribe(function (result) {
            localStorage.removeItem('strTenantToken');
            if (!!_this.paymentTab) {
                _this.router.navigate(["/pay-rent/" + _this.paymentTab + "/login"]);
            }
            else {
                _this.router.navigate(['/pay-rent/login']);
            }
        }, function (err) {
        });
    };
    PayRentFormComponent.prototype.signUpAutoPay = function (signUp) {
        this.signUpAutoPaySubscribe$ = this.tenantInfoService.signUpAutoPay(signUp)
            .subscribe(function (result) {
        }, function (err) {
        });
    };
    PayRentFormComponent.prototype.OptionOutOfAutoPay = function (signUp) {
        this.OptionOutOfAutoPaySubscribe$ = this.tenantInfoService.OptionOutOfAutoPay(signUp)
            .subscribe(function (result) {
        }, function (err) {
        });
    };
    PayRentFormComponent.prototype.makeAReservation = function (strConfirmation) {
        var _this = this;
        this.makePaymentForUnit = true;
        this.reservationInProgress = true;
        this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
        this.makeAReservationSubscribe$ = this.makeAReservationService.makeAReservation(strConfirmation)
            .subscribe(function (strConfirmationResponse) {
            _this.strConfirmation = strConfirmationResponse.strConfirmation;
            _this.dataSharingService.strConfirmation = strConfirmationResponse.strConfirmation;
            _this.showConfirmation = false;
            _this.dataSharingService.eventName = 'reservation';
            _this.makePaymentForUnit = false;
            _this.submitted = false;
            _this.tokenExit = localStorage.getItem('strTenantToken');
            if (_this.tokenExit) {
                _this.tenantTokenExist = true;
            }
            _this.existTempToken = localStorage.getItem('strTempTenantToken');
            if (_this.existTempToken) {
                localStorage.removeItem('strTempTenantToken');
                _this.tokenRemoved = true;
            }
            _this.router.navigate([environment_1.environment.locationName + "/view-rates/thank-you"]);
            _this.reservationInProgress = false;
        }, function (err) {
            _this.makePaymentForUnit = false;
            if (err.status === 403) {
            }
            else {
                if (err.status === 401) {
                    localStorage.removeItem('strTempTenantToken');
                }
            }
            _this.reservationInProgress = false;
        });
    };
    PayRentFormComponent.prototype.convertDate = function (date) {
        var formattedNormalDate = new Date(date);
        // tslint:disable-next-line:max-line-length
        return formattedNormalDate.getMonth() + 1 + "-" + formattedNormalDate.getDate() + "-" + formattedNormalDate.getFullYear();
    };
    PayRentFormComponent.prototype.moveIn = function (strAccessCode) {
        var _this = this;
        this.makePaymentForUnit = true;
        this.reservationInProgress = true;
        this.MoveIn['blnGenerateDocuments'] = true;
        this.MoveIn.dteMoveIn = this.convertDate(new Date());
        this.makeAReservationSubscribe$ = this.moveInService.moveIn(strAccessCode)
            .subscribe(function (strConfirmationResponse) {
            _this.strAccessCode = strConfirmationResponse.strAccessCode;
            _this.dataSharingService.strAccessCode = strConfirmationResponse.strAccessCode;
            _this.dataSharingService.eventName = 'MoveIn';
            _this.makePaymentForUnit = false;
            _this.submitted = false;
            _this.tokenExit = localStorage.getItem('strTenantToken');
            if (_this.tokenExit) {
                _this.tenantTokenExist = true;
            }
            _this.existTempToken = localStorage.getItem('strTempTenantToken');
            if (_this.existTempToken) {
                localStorage.removeItem('strTempTenantToken');
                _this.tokenRemoved = true;
            }
            _this.router.navigate([environment_1.environment.locationName + "/view-rates/thank-you"]);
            _this.reservationInProgress = false;
        }, function (err) {
            _this.makePaymentForUnit = false;
            if (err.status === 403) {
                _this.showConfirmation = false;
            }
            else {
                if (err.status === 401) {
                    localStorage.removeItem('strTempTenantToken');
                }
                if (err.status === 500) {
                    _this.unitTypeNotAvailability = true;
                }
            }
            _this.reservationInProgress = false;
        });
    };
    PayRentFormComponent.prototype.addTenant = function (data) {
        var _this = this;
        this.addTenantSubscribe$ = this.addTenantService.addTenant(data)
            .subscribe(function (result) {
            localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
            if (_this.navigateToMoveIn) {
                if (_this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                    _this.makePayment(_this.payRentForm.value);
                }
                else {
                    _this.moveIn(_this.MoveIn);
                }
            }
            else {
                if (_this.navigateToReserve) {
                    if (_this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
                        _this.makePayment(_this.payRentForm.value);
                    }
                    else {
                        _this.makeAReservation(_this.MoveIn);
                    }
                }
            }
        });
    };
    PayRentFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.payRentForm.invalid) {
            return;
        }
        else {
            this.showloaderForPayment = true;
            // if ( this.navigateToMoveIn === false && this.navigateToReserve === false) {
            if (this.amountToPay > 0) {
                this.payRentForm.patchValue({
                    objPayment: {
                        PaymentAmount: this.amountToPay
                    }
                });
            }
            else if (this.customOtherValue > 0) {
                this.payRentForm.patchValue({
                    objPayment: {
                        PaymentAmount: this.customOtherValue
                    }
                });
            }
            else {
                this.payRentForm.patchValue({
                    objPayment: {
                        PaymentAmount: this.balance
                    }
                });
            }
            // }
            if (!localStorage.getItem('strTenantToken') &&
                !localStorage.getItem('strTempTenantToken')) {
                this.addTenant(this.tenantData);
            }
            else {
                this.makePayment(this.payRentForm.value);
            }
        }
    };
    PayRentFormComponent.prototype.ngOnDestroy = function () {
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
        if (this.makeAReservationSubscribe$ && this.makeAReservationSubscribe$.closed) {
            this.makeAReservationSubscribe$.unsubscribe();
        }
        if (this.addTenantSubscribe$ && this.addTenantSubscribe$.closed) {
            this.addTenantSubscribe$.unsubscribe();
        }
    };
    PayRentFormComponent = __decorate([
        core_1.Component({
            selector: 'app-pay-rent-form',
            templateUrl: './pay-rent-form.component.html',
            styleUrls: ['./pay-rent-form.component.scss'],
            providers: [common_1.DatePipe]
        })
    ], PayRentFormComponent);
    return PayRentFormComponent;
}());
exports.PayRentFormComponent = PayRentFormComponent;
