"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewRatesComponent = void 0;
var core_1 = require("@angular/core");
var view_rates_1 = require("../../data/view-rates");
var heading_1 = require("../../data/heading");
var title_1 = require("../../data/title");
var environment_1 = require("../../../environments/environment");
var script_1 = require("../../data/script");
var ViewRatesComponent = /** @class */ (function () {
    function ViewRatesComponent(titleService, router, meta, metaService, uaParserService, canonical) {
        this.titleService = titleService;
        this.router = router;
        this.meta = meta;
        this.metaService = metaService;
        this.uaParserService = uaParserService;
        this.canonical = canonical;
        this.showTable = false;
        this.openComponent = false;
        this.state = script_1.script.state;
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
    ViewRatesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.fetchViewRates();
        this.fetchViewRatesHeading();
    };
    ViewRatesComponent.prototype.navigate = function (location) {
        if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
            this.router.navigate([environment_1.environment.locationName + "/" + location]);
        }
        else {
            this.router.navigate(["" + location]);
        }
    };
    ViewRatesComponent.prototype.fetchViewRates = function () {
        this.viewRates = view_rates_1.dataViewRates;
        this.viewRatesAltText = view_rates_1.viewRatesAltText;
    };
    ViewRatesComponent.prototype.fetchViewRatesHeading = function () {
        this.viewRatesHeading = heading_1.viewRatesHeading;
    };
    ViewRatesComponent.prototype.fetchMetaData = function () {
        this.viewRatesPageContent = title_1.viewRatesPageContent;
        this.viewRatesPageTitle = title_1.viewRatesPageTitle;
    };
    ViewRatesComponent.prototype.handleClick = function (event, event1) {
        this.openComponent = true;
        this.DescriptionVR = JSON.parse(JSON.stringify(event));
        this.MonthlyRateVR = parseFloat(JSON.stringify(event1));
    };
    ViewRatesComponent.prototype.ngOnDestroy = function () {
        if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
            this.isUnsubscribe$.unsubscribe();
        }
    };
    ViewRatesComponent = __decorate([
        core_1.Component({
            selector: 'app-view-rates',
            templateUrl: './view-rates.component.html',
            styleUrls: ['./view-rates.component.scss']
        })
    ], ViewRatesComponent);
    return ViewRatesComponent;
}());
exports.ViewRatesComponent = ViewRatesComponent;
