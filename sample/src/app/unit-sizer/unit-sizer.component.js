"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnitSizerComponent = void 0;
var core_1 = require("@angular/core");
var heading_1 = require("../data/heading");
var title_1 = require("../data/title");
var UnitSizerComponent = /** @class */ (function () {
    function UnitSizerComponent(titleService, meta, canonical) {
        this.titleService = titleService;
        this.meta = meta;
        this.canonical = canonical;
        this.fetchMetaData();
        this.meta.addTag({
            name: 'description',
            content: "" + this.unitSizerPageContent
        });
        this.titleService.setTitle("" + this.unitSizerPageTitle);
        this.canonical.create();
    }
    UnitSizerComponent.prototype.ngOnInit = function () {
        this.fetchContactHeading();
    };
    UnitSizerComponent.prototype.fetchMetaData = function () {
        this.unitSizerPageTitle = title_1.unitSizerPageTitle;
        this.unitSizerPageContent = title_1.unitSizerPageContent;
    };
    UnitSizerComponent.prototype.fetchContactHeading = function () {
        this.unitSizerHeading = heading_1.unitSizerHeading;
    };
    UnitSizerComponent = __decorate([
        core_1.Component({
            selector: 'app-unit-sizer',
            templateUrl: './unit-sizer.component.html',
            styleUrls: ['./unit-sizer.component.scss']
        })
    ], UnitSizerComponent);
    return UnitSizerComponent;
}());
exports.UnitSizerComponent = UnitSizerComponent;
