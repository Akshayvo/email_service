"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CanonicalService = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var environment_1 = require("../../environments/environment");
var CanonicalService = /** @class */ (function () {
    function CanonicalService(dom) {
        this.dom = dom;
    }
    CanonicalService.prototype.create = function () {
        var pathname = window.location.pathname;
        if (environment_1.environment.production) {
            var link = this.dom.querySelector("link[rel='canonical']") || null;
            if (link === null) {
                var link_1 = this.dom.createElement('link');
                link_1.setAttribute('rel', 'canonical');
                this.dom.head.appendChild(link_1);
                link_1.setAttribute('href', "" + environment_1.environment.websiteUrl + pathname);
            }
            else {
                link.setAttribute('href', "" + environment_1.environment.websiteUrl + pathname);
            }
        }
    };
    CanonicalService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(common_1.DOCUMENT))
    ], CanonicalService);
    return CanonicalService;
}());
exports.CanonicalService = CanonicalService;
