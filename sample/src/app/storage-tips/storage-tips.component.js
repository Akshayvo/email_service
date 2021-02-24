"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageTipsComponent = void 0;
var core_1 = require("@angular/core");
var storage_1 = require("../data/storage");
var title_1 = require("../data/title");
var heading_1 = require("../data/heading");
var script_1 = require("../data/script");
var StorageTipsComponent = /** @class */ (function () {
    function StorageTipsComponent(titleService, meta, metaService, canonical) {
        var _this = this;
        this.titleService = titleService;
        this.meta = meta;
        this.metaService = metaService;
        this.canonical = canonical;
        this.fetchMetaData();
        this.fetchOg();
        this.fetchTwitter();
        this.og.forEach(function (element) {
            _this.meta.addTag({
                property: element.property,
                content: element.content
            });
        });
        this.twitter.forEach(function (element) {
            _this.meta.addTag({
                name: element.name,
                content: element.content
            });
        });
        this.meta.addTag({
            name: 'description',
            content: "" + this.storageTipsContent
        });
        this.titleService.setTitle("" + this.storageTipsTitle);
        this.canonical.create();
    }
    StorageTipsComponent.prototype.ngOnInit = function () {
        this.fetchStorageTip();
        this.fetchStorageTipAccordion();
        this.fetchStorageTipsHeading();
        window.scrollTo(0, 0);
    };
    StorageTipsComponent.prototype.fetchOg = function () {
        this.og = script_1.ogStorageTipsPage;
    };
    StorageTipsComponent.prototype.fetchTwitter = function () {
        this.twitter = script_1.twitterStorageTipsPage;
    };
    StorageTipsComponent.prototype.fetchMetaData = function () {
        this.storageTipsTitle = title_1.storageTipsTitle;
        this.storageTipsContent = title_1.storageTipsContent;
    };
    StorageTipsComponent.prototype.fetchStorageTipsHeading = function () {
        this.storageTipsHeading = heading_1.storageTipsHeading;
    };
    StorageTipsComponent.prototype.fetchStorageTip = function () {
        this.storageTip = storage_1.storageTip;
    };
    StorageTipsComponent.prototype.fetchStorageTipAccordion = function () {
        this.storageTipAccordion = storage_1.storageTipAccordion;
    };
    StorageTipsComponent = __decorate([
        core_1.Component({
            selector: 'app-storage-tips',
            templateUrl: './storage-tips.component.html',
            styleUrls: ['./storage-tips.component.scss']
        })
    ], StorageTipsComponent);
    return StorageTipsComponent;
}());
exports.StorageTipsComponent = StorageTipsComponent;
