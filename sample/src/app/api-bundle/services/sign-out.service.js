"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignOutService = void 0;
var core_1 = require("@angular/core");
var SignOutService = /** @class */ (function () {
    function SignOutService(http) {
        this.http = http;
        this.signOutUrl = "auth/signout";
    }
    SignOutService.prototype.signOut = function (logOut) {
        return this.http.post(this.signOutUrl, logOut);
    };
    SignOutService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SignOutService);
    return SignOutService;
}());
exports.SignOutService = SignOutService;
