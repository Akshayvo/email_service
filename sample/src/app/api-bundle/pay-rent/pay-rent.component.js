"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PayRentComponent = void 0;
var core_1 = require("@angular/core");
var tab_1 = require("../../data/tab");
var heading_1 = require("../../data/heading");
var title_1 = require("../../data/title");
var environment_1 = require("../../../environments/environment");
var script_1 = require("../../data/script");
var PayRentComponent = /** @class */ (function () {
    function PayRentComponent(titleService, router, activatedRoute, dataSharingService, meta, canonical) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataSharingService = dataSharingService;
        this.meta = meta;
        this.canonical = canonical;
        this.fetchMetaData();
        this.fetchOg();
        this.fetchTwitter();
        this.og.forEach(function (element) {
            _this.meta.addTag({
                property: element.property,
                content: element.content
            });
        });
        this.twitter.forEach(function (element) {
            _this.meta.addTag({
                name: element.name,
                content: element.content
            });
        });
        this.meta.addTag({
            name: 'description',
            content: "" + this.payRentPageContent
        });
        this.titleService.setTitle("" + this.payRentPageTitle);
        this.canonical.create();
    }
    PayRentComponent.prototype.ngOnInit = function () {
        this.fetchContactDetails();
        this.showPaymentPageType = environment_1.environment.signUpForAuotoPay;
    };
    PayRentComponent.prototype.fetchOg = function () {
        this.og = script_1.ogPayRentPage;
    };
    PayRentComponent.prototype.fetchTwitter = function () {
        this.twitter = script_1.twitterPayRentPage;
    };
    PayRentComponent.prototype.fetchMetaData = function () {
        this.payRentPageContent = title_1.payRentPageContent;
        this.payRentPageTitle = title_1.payRentPageTitle;
    };
    PayRentComponent.prototype.fetchContactDetails = function () {
        this.payRentHeading = heading_1.payRentHeading;
        this.tabs = tab_1.tabs;
    };
    PayRentComponent = __decorate([
        core_1.Component({
            selector: 'app-pay-rent',
            templateUrl: './pay-rent.component.html',
            styleUrls: ['./pay-rent.component.scss']
        })
    ], PayRentComponent);
    return PayRentComponent;
}());
exports.PayRentComponent = PayRentComponent;
