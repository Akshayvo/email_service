"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignUpComponent = void 0;
var core_1 = require("@angular/core");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, dataSharingService) {
        this.router = router;
        this.dataSharingService = dataSharingService;
        localStorage.setItem('paymentTab', 'sign-up');
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            templateUrl: './sign-up.component.html',
            styleUrls: ['./sign-up.component.scss']
        })
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
