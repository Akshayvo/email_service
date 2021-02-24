"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThankYouComponent = void 0;
var core_1 = require("@angular/core");
var title_1 = require("../../data/title");
var environment_1 = require("../../../environments/environment");
var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent(titleService, meta, dataSharingService, router, signOutService) {
        this.titleService = titleService;
        this.meta = meta;
        this.dataSharingService = dataSharingService;
        this.router = router;
        this.signOutService = signOutService;
        this.MoveIn = {
            dteMoveIn: '',
            intUnitTypeID: 0
        };
        this.facilityName = environment_1.environment.facilityName;
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.thankYouPageContent
        });
        this.titleService.setTitle("" + this.thankYouPageTitle);
    }
    ThankYouComponent.prototype.ngOnInit = function () {
        this.strConfirmation = this.dataSharingService.strConfirmation;
        this.strAccessCode = this.dataSharingService.strAccessCode;
        this.navigateToMoveIn = this.dataSharingService.navigateToMoveIn;
        this.navigateToReserve = this.dataSharingService.navigateToReserve;
        this.description = this.dataSharingService.LstUnitTypes.Description;
        this.monthlyRate = this.dataSharingService.LstUnitTypes.MonthlyRate;
        this.PaymentAmount = this.dataSharingService.PaymentAmount;
        this.CCApprovalCode = this.dataSharingService.CCApprovalCode;
        this.MoveIn.dteMoveIn = this.dataSharingService.MoveIn.dteMoveIn;
        this.eventName = this.dataSharingService.eventName;
        if (localStorage.getItem('strTenantToken')) {
            this.tokenExit = localStorage.getItem('strTenantToken');
        }
        if (localStorage.getItem('paymentNavigationUrl')) {
            this.paymentNavigationUrl = localStorage.getItem('paymentNavigationUrl');
        }
        var today = new Date();
        window['dataLayer'] = window['dataLayer'] || {};
        window['dataLayer'] = window['dataLayer'] || [];
        window['dataLayer'].push({
            'event': this.eventName,
            'confirmationNumber': this.strConfirmation,
            'unitType': this.description,
            'price': this.monthlyRate && this.monthlyRate || '',
            'date': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            'time': today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        });
    };
    ThankYouComponent.prototype.fetchMetaData = function () {
        this.thankYouPageTitle = title_1.thankYouPageTitle;
        this.thankYouPageContent = title_1.thankYouPageContent;
    };
    ThankYouComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    ThankYouComponent.prototype.signOut = function (logOut) {
        var _this = this;
        this.signOutSubscribe$ = this.signOutService.signOut(logOut)
            .subscribe(function (result) {
            localStorage.removeItem('strTenantToken');
            if (!!localStorage.getItem('APIKey')) {
                localStorage.removeItem('APIKey');
            }
            _this.router.navigate(['/']);
        }, function (err) {
        });
    };
    ThankYouComponent.prototype.ngOnDestroy = function () {
        if (this.signOutSubscribe$ && this.signOutSubscribe$.closed) {
            this.signOutSubscribe$.unsubscribe();
        }
        window.removeEventListener('beforeunload', function (event) {
        });
    };
    ThankYouComponent = __decorate([
        core_1.Component({
            selector: 'app-thank-you',
            templateUrl: './thank-you.component.html',
            styleUrls: ['./thank-you.component.scss']
        })
    ], ThankYouComponent);
    return ThankYouComponent;
}());
exports.ThankYouComponent = ThankYouComponent;
