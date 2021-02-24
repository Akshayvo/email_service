"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccordionComponent = void 0;
var core_1 = require("@angular/core");
var storage_1 = require("../data/storage");
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.fetchStorageTipAccordion();
    };
    AccordionComponent.prototype.fetchStorageTipAccordion = function () {
        this.storageTipAccordion = storage_1.storageTipAccordion;
    };
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'app-accordion',
            templateUrl: './accordion.component.html',
            styleUrls: ['./accordion.component.scss']
        })
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
