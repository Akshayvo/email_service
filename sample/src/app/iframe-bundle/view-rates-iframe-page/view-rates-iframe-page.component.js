"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewRatesIframePageComponent = void 0;
var core_1 = require("@angular/core");
var view_rates_1 = require("../../data/view-rates");
var heading_1 = require("../..//data/heading");
var title_1 = require("../../data/title");
var ViewRatesIframePageComponent = /** @class */ (function () {
    function ViewRatesIframePageComponent(titleService, meta, metaService, uaParserService, canonical) {
        this.titleService = titleService;
        this.meta = meta;
        this.metaService = metaService;
        this.uaParserService = uaParserService;
        this.canonical = canonical;
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.viewRatesPageContent
        });
        this.titleService.setTitle("" + this.viewRatesPageTitle);
        this.canonical.create();
        this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
        this.imageBaseUrl = this.uaParserService.baseUrl;
    }
    ViewRatesIframePageComponent.prototype.ngOnInit = function () {
        this.fetchViewRatesHeading();
        window.scrollTo(0, 0);
        this.fetchViewRates();
    };
    ViewRatesIframePageComponent.prototype.fetchViewRatesHeading = function () {
        this.viewRatesHeading = heading_1.viewRatesHeading;
    };
    ViewRatesIframePageComponent.prototype.fetchMetaData = function () {
        this.viewRatesPageContent = title_1.viewRatesPageContent;
        this.viewRatesPageTitle = title_1.viewRatesPageTitle;
    };
    ViewRatesIframePageComponent.prototype.fetchViewRates = function () {
        this.viewRates = view_rates_1.dataViewRates;
        this.viewRatesAltText = view_rates_1.viewRatesAltText;
    };
    ViewRatesIframePageComponent = __decorate([
        core_1.Component({
            selector: 'app-view-rates-iframe-page',
            templateUrl: './view-rates-iframe-page.component.html',
            styleUrls: ['./view-rates-iframe-page.component.scss']
        })
    ], ViewRatesIframePageComponent);
    return ViewRatesIframePageComponent;
}());
exports.ViewRatesIframePageComponent = ViewRatesIframePageComponent;
