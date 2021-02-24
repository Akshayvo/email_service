"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConfirmationDataComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var view_rates_1 = require("../../data/view-rates");
var environment_1 = require("../../../environments/environment");
var ConfirmationDataComponent = /** @class */ (function () {
    function ConfirmationDataComponent(router, dataSharingService, moveInService, makeAReservationService, addTenantService, tenantInfoService, signOutService) {
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.moveInService = moveInService;
        this.makeAReservationService = makeAReservationService;
        this.addTenantService = addTenantService;
        this.tenantInfoService = tenantInfoService;
        this.signOutService = signOutService;
        this.submitted = false;
        this.showConfirmation = false;
        this.options = [{
                description: '',
                id: ''
            }];
        this.options1 = [{
                description: '',
                id: ''
            }];
        this.reservationInProgress = false;
        this.showMoveInDateError = false;
        this.isValueUpdated = true;
        // formattedMoveInDate: any;
        this.unitTypeNotAvailability = false;
        this.tenantData = {
            objTenant: {}
        };
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.unitData = {};
        this.canExit = true;
        this.showAltDetails = false;
        this.destroyed = new rxjs_1.Subject();
        this.fetchOption();
        this.fetchSharedData();
    }
    ConfirmationDataComponent.prototype.ngOnInit = function () {
        this.getTenantUnitData();
        this.showAltDetails = this.dataSharingService.showAltDetails;
    };
    ConfirmationDataComponent.prototype.fetchSharedData = function () {
        this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
        this.navigateToReserve = this.dataSharingService.navigateToReserve;
        this.tenantData.objTenant = this.dataSharingService.objTenant;
        this.unitData = this.dataSharingService.LstUnitTypes;
        this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
        this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
        this.isValueUpdated = this.dataSharingService.isValueUpdated;
        this.totalTaxAmount = this.dataSharingService.MoveInData.TotalTaxAmount;
        this.totalChargesAmount = this.dataSharingService.MoveInData.TotalChargesAmount;
        this.period = this.dataSharingService.period;
    };
    ConfirmationDataComponent.prototype.fetchOption = function () {
        var _this = this;
        this.options = view_rates_1.option;
        this.option1 = view_rates_1.option1;
        if (!!this.dataSharingService.objTenant.State) {
            this.index = JSON.stringify(this.options.findIndex(function (x) { return x.id === _this.dataSharingService.objTenant.State; }));
            if (!!this.options) {
                this.stateString = this.options[this.index].description;
            }
        }
        if (!!this.dataSharingService.objTenant.AlternateState) {
            this.alternateIndex = JSON.stringify(this.options.findIndex(function (x) { return x.id === _this.dataSharingService.objTenant.AlternateState; }));
            if (!!this.alternateIndex) {
                this.alternateStateString = this.options[this.alternateIndex].description;
            }
            else {
                this.alternateIndex = JSON.stringify(this.options1.findIndex(function (x) { return x.id === _this.dataSharingService.objTenant.AlternateState; }));
                this.alternateStateString = this.options1[this.alternateIndex].description;
            }
        }
    };
    ConfirmationDataComponent.prototype.unloadNotification = function ($event) {
        $event.returnValue = true;
    };
    ConfirmationDataComponent.prototype.navigateToPrevious = function () {
        if (this.dataSharingService.navigateToMoveIn) {
            this.router.navigate([environment_1.environment.locationName + "/view-rates/move-in"]);
        }
        else {
            if (this.dataSharingService.navigateToReserve) {
                this.router.navigate([environment_1.environment.locationName + "/view-rates/reserve"]);
            }
        }
    };
    ConfirmationDataComponent.prototype.hasUnsavedData = function () {
        return this.canExit;
    };
    ConfirmationDataComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    ConfirmationDataComponent.prototype.getTenantUnitData = function () {
        this.firstName = this.dataSharingService.objTenant.FirstName;
        this.lastName = this.dataSharingService.objTenant.LastName;
        this.phone = this.dataSharingService.objTenant.Phone;
        this.emailAddress = this.dataSharingService.objTenant.EmailAddress;
        this.addressLine1 = this.dataSharingService.objTenant.AddressLine1;
        this.addressLine2 = this.dataSharingService.objTenant.AddressLine2;
        this.city = this.dataSharingService.objTenant.City;
        this.zip = this.dataSharingService.objTenant.ZIP;
        this.alternateName = this.dataSharingService.objTenant.AlternateName;
        this.alternatePhone = this.dataSharingService.objTenant.AlternatePhone;
        this.alternateAddressLine1 = this.dataSharingService.objTenant.AlternateAddressLine1;
        this.alternateAddressLine2 = this.dataSharingService.objTenant.AlternateAddressLine2;
        this.alternateCity = this.dataSharingService.objTenant.AlternateCity;
        this.alternateState = this.dataSharingService.objTenant.AlternateState;
        this.alternateZIP = this.dataSharingService.objTenant.AlternateZIP;
        this.reservationFee = this.dataSharingService.LstUnitTypes.ReservationFee;
        this.reservationFeeTax = this.dataSharingService.LstUnitTypes.ReservationFeeTax;
        this.description = this.dataSharingService.LstUnitTypes.Description;
        this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
    };
    ConfirmationDataComponent.prototype.addTenant = function (data) {
        var _this = this;
        this.addTenantSubscribe$ = this.addTenantService.addTenant(data)
            .subscribe(function (result) {
            if (result.intErrorCode === 1) {
                localStorage.setItem('strTempTenantToken', result.strTempTenantToken);
                if (_this.navigateToMoveIn) {
                    _this.moveIn(_this.MoveIn);
                }
                else {
                    if (_this.navigateToReserve) {
                        _this.makeAReservation(_this.MoveIn);
                    }
                }
            }
        });
    };
    ConfirmationDataComponent.prototype.updateTenant = function (data) {
        var _this = this;
        this.updateTenantSubscribe$ = this.tenantInfoService.updateTenant(data)
            .subscribe(function (result) {
            if (result.intErrorCode === 1) {
                if (_this.navigateToMoveIn) {
                    if (_this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                        _this.router.navigate([environment_1.environment.locationName + "/view-rates/payMoveInCharges"]);
                    }
                    else {
                        _this.moveIn(_this.MoveIn);
                    }
                }
                else {
                    if (_this.navigateToReserve) {
                        if (_this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
                            _this.router.navigate([environment_1.environment.locationName + "/view-rates/payReservationCharges"]);
                        }
                        else {
                            _this.makeAReservation(_this.MoveIn);
                        }
                    }
                }
            }
        });
    };
    ConfirmationDataComponent.prototype.makeAReservation = function (strConfirmation) {
        var _this = this;
        this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
        this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
        this.reservationInProgress = true;
        this.makeAReservationSubscribe$ = this.makeAReservationService.makeAReservation(strConfirmation)
            .subscribe(function (strConfirmationResponse) {
            if (strConfirmationResponse.intErrorCode === 1) {
                _this.dataSharingService.strConfirmation = strConfirmationResponse.strConfirmation;
                _this.dataSharingService.eventName = 'reservation';
                // this.showConfirmation = false;
                _this.router.navigate([environment_1.environment.locationName + "/view-rates/thank-you"]);
                _this.reservationInProgress = false;
            }
        }, function (err) {
            if (err.status === 403) {
                _this.showConfirmation = false;
                _this.showMoveInDateError = true;
            }
            else {
                if (err.status === 401) {
                    localStorage.removeItem('strTempTenantToken');
                }
            }
            _this.reservationInProgress = false;
        });
    };
    ConfirmationDataComponent.prototype.convertDate = function (date) {
        var formattedNormalDate = new Date(date);
        // tslint:disable-next-line:max-line-length
        return formattedNormalDate.getMonth() + 1 + "-" + formattedNormalDate.getDate() + "-" + formattedNormalDate.getFullYear();
    };
    ConfirmationDataComponent.prototype.moveIn = function (strAccessCode) {
        var _this = this;
        this.reservationInProgress = true;
        this.MoveIn.intUnitTypeID = this.dataSharingService.LstUnitTypes.UnitTypeID;
        this.MoveIn.dteMoveIn = this.convertDate(new Date());
        this.MoveIn['blnGenerateDocuments'] = true;
        this.makeAReservationSubscribe$ = this.moveInService.moveIn(strAccessCode)
            .subscribe(function (strConfirmationResponse) {
            _this.dataSharingService.strAccessCode = strConfirmationResponse.strAccessCode;
            _this.dataSharingService.eventName = 'MoveIn';
            _this.router.navigate([environment_1.environment.locationName + "/view-rates/thank-you"]);
            _this.reservationInProgress = false;
        }, function (err) {
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
    ConfirmationDataComponent.prototype.signOut = function (logOut) {
        var _this = this;
        this.signOutSubscribe$ = this.signOutService.signOut(logOut)
            .subscribe(function (result) {
            localStorage.removeItem('strTenantToken');
            _this.router.navigate(['/']);
        }, function (err) {
        });
    };
    ConfirmationDataComponent.prototype.onSubmit = function () {
        if (window.localStorage) {
            if (localStorage.getItem('strTenantToken')) {
                this.existingTenantToken = localStorage.getItem('strTenantToken');
            }
            else {
                this.existTempToken = localStorage.getItem('strTempTenantToken');
            }
        }
        this.submitted = true;
        this.showConfirmation = true;
        this.reservationInProgress = true;
        if (this.existingTenantToken) {
            if (!this.isValueUpdated) {
                if (this.navigateToMoveIn === true) {
                    if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                        this.router.navigate([environment_1.environment.locationName + "/view-rates/payMoveInCharges"]);
                    }
                    else {
                        this.moveIn(this.MoveIn);
                    }
                }
                else {
                    if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
                        this.router.navigate([environment_1.environment.locationName + "/view-rates/payReservationCharges"]);
                    }
                    else {
                        this.makeAReservation(this.MoveIn);
                    }
                }
            }
            else {
                this.updateTenant(this.tenantData);
            }
        }
        else {
            if (this.existTempToken) {
                if (!this.isValueUpdated) {
                    if (this.navigateToMoveIn === true) {
                        if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                            this.router.navigate([environment_1.environment.locationName + "/view-rates/payMoveInCharges"]);
                        }
                        else {
                            this.moveIn(this.MoveIn);
                        }
                    }
                    else {
                        if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
                            this.router.navigate([environment_1.environment.locationName + "/view-rates/payReservationCharges"]);
                        }
                        else {
                            this.makeAReservation(this.MoveIn);
                        }
                    }
                }
            }
            else {
                if (this.navigateToMoveIn === true) {
                    if (this.dataSharingService.MoveInData.TotalChargesAmount > 0) {
                        this.dataSharingService.addingTenant = true;
                        this.router.navigate([environment_1.environment.locationName + "/view-rates/payMoveInCharges"]);
                    }
                    else {
                        this.addTenant(this.tenantData);
                    }
                }
                else {
                    if (this.dataSharingService.LstUnitTypes.ReservationFee > 0) {
                        this.dataSharingService.addingTenant = true;
                        this.dataSharingService.addingTenant = true;
                        this.router.navigate([environment_1.environment.locationName + "/view-rates/payReservationCharges"]);
                    }
                    else {
                        this.addTenant(this.tenantData);
                    }
                }
            }
        }
    };
    ConfirmationDataComponent.prototype.ngOnDestroy = function () {
        if (this.getTenantInfoSubscribe$ && this.getTenantInfoSubscribe$.closed) {
            this.getTenantInfoSubscribe$.unsubscribe();
        }
        if (this.updateTenantSubscribe$ && this.updateTenantSubscribe$.closed) {
            this.updateTenantSubscribe$.unsubscribe();
        }
        if (this.makeAReservationSubscribe$ && this.makeAReservationSubscribe$.closed) {
            this.makeAReservationSubscribe$.unsubscribe();
        }
        if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
            this.signOutSubscribe$.unsubscribe();
        }
        this.destroyed.next();
        this.destroyed.complete();
    };
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event'])
    ], ConfirmationDataComponent.prototype, "unloadNotification");
    ConfirmationDataComponent = __decorate([
        core_1.Component({
            selector: 'app-confirmation-data',
            templateUrl: './confirmation-data.component.html',
            styleUrls: ['./confirmation-data.component.scss']
        })
    ], ConfirmationDataComponent);
    return ConfirmationDataComponent;
}());
exports.ConfirmationDataComponent = ConfirmationDataComponent;
