"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ThankYouGuard = void 0;
var core_1 = require("@angular/core");
var ThankYouGuard = /** @class */ (function () {
    function ThankYouGuard(dataSharingService, router) {
        this.dataSharingService = dataSharingService;
        this.router = router;
    }
    ThankYouGuard.prototype.isData = function () {
        if (!!this.dataSharingService.strAccessCode || !!this.dataSharingService.strConfirmation || !!this.dataSharingService.CCApprovalCode) {
            return true;
        }
        else {
            return false;
        }
    };
    ThankYouGuard.prototype.canActivate = function (next, state) {
        return this.isData() ? true : this.router.navigate(['/']);
    };
    ThankYouGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ThankYouGuard);
    return ThankYouGuard;
}());
exports.ThankYouGuard = ThankYouGuard;
