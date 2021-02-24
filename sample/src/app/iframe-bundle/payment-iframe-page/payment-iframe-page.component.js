"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentIframePageComponent = void 0;
var core_1 = require("@angular/core");
var contact_1 = require("../../data/contact");
var title_1 = require("../../data/title");
var heading_1 = require("../../data/heading");
var pay_rent_1 = require("../../data/pay-rent");
var PaymentIframePageComponent = /** @class */ (function () {
    function PaymentIframePageComponent(titleService, meta) {
        this.titleService = titleService;
        this.meta = meta;
        this.loginDetail = [];
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.payRentPageContent
        });
        this.titleService.setTitle("" + this.payRentPageTitle);
    }
    PaymentIframePageComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.fetchLoginDetail();
        this.fetchpayRentHeading();
        this.fetchContactDetails();
    };
    PaymentIframePageComponent.prototype.fetchMetaData = function () {
        this.payRentPageContent = title_1.payRentPageContent;
        this.payRentPageTitle = title_1.payRentPageTitle;
    };
    PaymentIframePageComponent.prototype.fetchLoginDetail = function () {
        this.loginDetail = pay_rent_1.loginDetail;
    };
    PaymentIframePageComponent.prototype.fetchContactDetails = function () {
        this.contact = contact_1.contact;
    };
    PaymentIframePageComponent.prototype.fetchpayRentHeading = function () {
        this.payRentHeading = heading_1.payRentHeading;
    };
    PaymentIframePageComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-iframe-page',
            templateUrl: './payment-iframe-page.component.html',
            styleUrls: ['./payment-iframe-page.component.scss']
        })
    ], PaymentIframePageComponent);
    return PaymentIframePageComponent;
}());
exports.PaymentIframePageComponent = PaymentIframePageComponent;
