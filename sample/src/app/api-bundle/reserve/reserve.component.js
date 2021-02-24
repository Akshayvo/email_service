"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReserveComponent = void 0;
var core_1 = require("@angular/core");
var title_1 = require("../../data/title");
var heading_1 = require("../../data/heading");
var ReserveComponent = /** @class */ (function () {
    function ReserveComponent(titleService, meta) {
        this.titleService = titleService;
        this.meta = meta;
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.reservePageContent
        });
        this.titleService.setTitle("" + this.reservePageTitle);
    }
    ReserveComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ReserveComponent.prototype.fetchMetaData = function () {
        this.reservePageTitle = title_1.reservePageTitle;
        this.reservePageContent = title_1.reservePageContent;
    };
    ReserveComponent.prototype.fetchReserveUnitHeading = function () {
        this.reserveUnitHeading = heading_1.reserveUnitHeading;
    };
    ReserveComponent = __decorate([
        core_1.Component({
            selector: 'app-reserve',
            templateUrl: './reserve.component.html',
            styleUrls: ['./reserve.component.scss']
        })
    ], ReserveComponent);
    return ReserveComponent;
}());
exports.ReserveComponent = ReserveComponent;
