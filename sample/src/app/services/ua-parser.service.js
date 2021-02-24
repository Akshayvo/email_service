"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UaParserService = void 0;
var core_1 = require("@angular/core");
var ua_parser_js_1 = require("ua-parser-js");
var UaParserService = /** @class */ (function () {
    function UaParserService() {
        this.uaParser = new ua_parser_js_1.UAParser();
        this.browserDetails = this.uaParser.getResult();
        this.determineBaseUrl();
    }
    UaParserService.prototype.determineBaseUrl = function () {
        if (this.browserDetails) {
            var _a = this.browserDetails.browser, _b = _a.name, name_1 = _b === void 0 ? 'Chrome' : _b, _c = _a.major, major = _c === void 0 ? '32 ' : _c;
            switch (name_1) {
                case 'Chrome':
                    this.typeOfImages = (major && major < 32) ? 'JPG' : 'WEBP';
                    break;
                case 'Firefox':
                    this.typeOfImages = (major && major < 65) ? 'JPG' : 'WEBP';
                    break;
                default:
                    this.typeOfImages = 'JPG';
                    break;
            }
        }
        if (this.typeOfImages === 'WEBP') {
            this.baseUrl = "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/webp";
        }
        else {
            this.baseUrl = 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg';
        }
    };
    UaParserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UaParserService);
    return UaParserService;
}());
exports.UaParserService = UaParserService;
