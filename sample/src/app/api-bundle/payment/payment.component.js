"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var core_1 = require("@angular/core");
var contact_1 = require("../../data/contact");
var universal_1 = require("@ng-toolkit/universal");
var title_1 = require("../../data/title");
var heading_1 = require("../../data/heading");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(titleService, window, meta) {
        // this.fetchMetaData();
        // this.fetchOg();
        // this.fetchTwitter();
        // this.og.forEach(element => {
        //   this.meta.addTag({
        //     property: element.property,
        //     content: element.content
        //   })
        // });
        this.titleService = titleService;
        this.window = window;
        this.meta = meta;
        // this.twitter.forEach(element => {
        //   this.meta.addTag({
        //     name: element.name,
        //     content: element.content
        //   })
        // });
        this.meta.addTag({
            name: 'description',
            content: "" + this.payRentPageContent
        });
        this.titleService.setTitle("" + this.payRentPageTitle);
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.fetchContactDetails();
        this.fetchpayRentHeading();
        window.scrollTo(0, 0);
    };
    // public fetchOg() {
    //   this.og = ogPayRentPage;
    // }
    // public fetchTwitter() {
    //   this.twitter = twitterPayRentPage;
    // }
    PaymentComponent.prototype.fetchMetaData = function () {
        this.payRentPageContent = title_1.payRentPageContent;
        this.payRentPageTitle = title_1.payRentPageTitle;
    };
    PaymentComponent.prototype.fetchpayRentHeading = function () {
        this.payRentHeading = heading_1.payRentHeading;
    };
    PaymentComponent.prototype.fetchContactDetails = function () {
        this.contact = contact_1.contact;
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.scss']
        }),
        __param(1, core_1.Inject(universal_1.WINDOW))
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
