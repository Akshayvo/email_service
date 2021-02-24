"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var nav_1 = require("../data/nav");
var contact_1 = require("../data/contact");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, uaParserService) {
        this.router = router;
        this.uaParserService = uaParserService;
        this.navbarCollapsed = true;
        this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
        this.imageBaseUrl = this.uaParserService.baseUrl;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.fetchNavigationLinks();
        this.fetchSocialLinks();
        this.fetchContactDetails();
    };
    HeaderComponent.prototype.fetchContactDetails = function () {
        this.contactDetails = contact_1.contact;
    };
    HeaderComponent.prototype.fetchSocialLinks = function () {
        this.socialLinks = contact_1.socialLinks;
    };
    HeaderComponent.prototype.fetchNavigationLinks = function () {
        this.navLinks = nav_1.navLinks;
    };
    HeaderComponent.prototype.navigate = function (location) {
        this.router.navigate([location]);
    };
    HeaderComponent.prototype.onClick = function (menu) {
        menu.classList.remove('show');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
