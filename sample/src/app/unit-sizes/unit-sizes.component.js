"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UnitSizesComponent = void 0;
var core_1 = require("@angular/core");
var unitSizer_1 = require("../data/unitSizer");
var environment_1 = require("../../environments/environment");
var UnitSizesComponent = /** @class */ (function () {
    function UnitSizesComponent(router) {
        this.router = router;
    }
    UnitSizesComponent.prototype.ngOnInit = function () {
        this.i = 0;
        this.h = 7;
        this.j = this.i + 1;
        this.fetchUnitSizer();
        window.scrollTo(0, 0);
    };
    UnitSizesComponent.prototype.navigate = function (location) {
        if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
            this.router.navigate([environment_1.environment.locationName + "/" + location]);
        }
        else {
            this.router.navigate(["" + location]);
        }
    };
    /**
     * fetchUnitSizer
     */
    UnitSizesComponent.prototype.fetchUnitSizer = function () {
        this.unitsizers = unitSizer_1.unitSizer;
    };
    UnitSizesComponent.prototype.moveLeft = function () {
        this.j = this.i;
        this.i = this.h;
        if (this.h === 0) {
            this.h = 7;
        }
        else {
            this.h = this.h - 1;
        }
    };
    UnitSizesComponent.prototype.moveRight = function () {
        this.h = this.i;
        this.i = this.j;
        if (this.j === 7) {
            this.j = 0;
        }
        else {
            this.j = this.j + 1;
        }
    };
    UnitSizesComponent.prototype.activeUnit = function (unitId) {
        this.i = unitId;
        if (this.i === 0) {
            this.h = 7;
            this.j = this.i + 7;
        }
        else if (this.i === 7) {
            this.j = 0;
            this.h = this.i - 1;
        }
        else {
            this.h = this.i - 1;
            this.j = this.i + 1;
        }
    };
    UnitSizesComponent = __decorate([
        core_1.Component({
            selector: 'app-unit-sizes',
            templateUrl: './unit-sizes.component.html',
            styleUrls: ['./unit-sizes.component.scss']
        })
    ], UnitSizesComponent);
    return UnitSizesComponent;
}());
exports.UnitSizesComponent = UnitSizesComponent;
