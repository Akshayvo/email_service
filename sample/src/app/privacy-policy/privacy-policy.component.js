"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrivacyPolicyComponent = void 0;
var core_1 = require("@angular/core");
var privacy_policy_1 = require("../data/privacy-policy");
var title_1 = require("../data/title");
var environment_1 = require("../../environments/environment");
var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent(titleService, meta, canonical) {
        this.titleService = titleService;
        this.meta = meta;
        this.canonical = canonical;
        this.facilityName = environment_1.environment.facilityName;
        this.fetchMetaData();
        this.canonical.create();
        this.meta.addTag({
            name: 'description',
            content: "" + this.privacyPolicyPageContent
        });
        this.titleService.setTitle("" + this.privacyPolicyPageTitle);
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.fetchPrivacyPlicy();
    };
    PrivacyPolicyComponent.prototype.fetchMetaData = function () {
        this.privacyPolicyPageTitle = title_1.privacyPolicyPageTitle;
        this.privacyPolicyPageContent = title_1.privacyPolicyPageContent;
    };
    PrivacyPolicyComponent.prototype.fetchPrivacyPlicy = function () {
        this.privacyPolicy = privacy_policy_1.privacyPolicy;
    };
    PrivacyPolicyComponent = __decorate([
        core_1.Component({
            selector: 'app-privacy-policy',
            templateUrl: './privacy-policy.component.html',
            styleUrls: ['./privacy-policy.component.scss']
        })
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());
exports.PrivacyPolicyComponent = PrivacyPolicyComponent;
