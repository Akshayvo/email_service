"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoveInService = void 0;
var core_1 = require("@angular/core");
var MoveInService = /** @class */ (function () {
    function MoveInService(http) {
        this.http = http;
        this.getMoveinCharges = "movein/charges";
        this.movein = "movein";
    }
    MoveInService.prototype.getMoveInCharges = function (request) {
        return this.http.post(this.getMoveinCharges, request);
    };
    MoveInService.prototype.moveIn = function (request) {
        return this.http.post(this.movein, request);
    };
    MoveInService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MoveInService);
    return MoveInService;
}());
exports.MoveInService = MoveInService;
