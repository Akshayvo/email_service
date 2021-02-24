"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TabsComponent = void 0;
var core_1 = require("@angular/core");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.fetchTabs();
        this.fetchPlace();
    };
    TabsComponent.prototype.fetchPlace = function () {
        this.placeName = this.name;
    };
    TabsComponent.prototype.fetchTabs = function () {
        this.tabData = this.tabs;
    };
    __decorate([
        core_1.Input()
    ], TabsComponent.prototype, "tabs");
    __decorate([
        core_1.Input()
    ], TabsComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], TabsComponent.prototype, "currentActiveTab");
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
        })
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
