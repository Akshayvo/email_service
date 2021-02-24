"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TablesComponent = void 0;
var core_1 = require("@angular/core");
var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
        this.th = this.tHead;
        this.tds = this.tBody;
        this.objectKeys = Object.keys(this.tds[0]);
    };
    __decorate([
        core_1.Input()
    ], TablesComponent.prototype, "tBody");
    __decorate([
        core_1.Input()
    ], TablesComponent.prototype, "tHead");
    TablesComponent = __decorate([
        core_1.Component({
            selector: 'app-tables',
            templateUrl: './tables.component.html',
            styleUrls: ['./tables.component.scss']
        })
    ], TablesComponent);
    return TablesComponent;
}());
exports.TablesComponent = TablesComponent;
