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
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var contact_1 = require("../data/contact");
var home_1 = require("../data/home");
var common_1 = require("@angular/common");
var title_1 = require("../data/title");
var configuration_1 = require("../data/configuration");
var environment_1 = require("../../environments/environment");
var script_1 = require("../data/script");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, titleService, meta, _renderer2, metaService, uaParserService, canonical, fetchDataService, _document) {
        var _this = this;
        this.router = router;
        this.titleService = titleService;
        this.meta = meta;
        this._renderer2 = _renderer2;
        this.metaService = metaService;
        this.uaParserService = uaParserService;
        this.canonical = canonical;
        this.fetchDataService = fetchDataService;
        this._document = _document;
        this.year = [];
        this.fetchScript();
        this.loadScript();
        this.fetchMetaData();
        this.fetchOgHomePage();
        this.fetchTwitterHomePage();
        this.ogHomePage.forEach(function (element) {
            _this.meta.addTag({
                property: element.property,
                content: element.content
            });
        });
        this.twitterHomePage.forEach(function (element) {
            _this.meta.addTag({
                name: element.name,
                content: element.content
            });
        });
        this.meta.addTag({
            name: 'description',
            content: "" + this.homePageContent
        });
        this.titleService.setTitle("" + this.homePageTitle);
        this.canonical.create();
        this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
        this.imageBaseUrl = this.uaParserService.baseUrl;
    }
    HomeComponent.prototype.navigate = function (location) {
        if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
            this.router.navigate([environment_1.environment.locationName + "/" + location]);
        }
        else {
            this.router.navigate(["" + location]);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
        this.objSIMSetting = configuration_1.objSIMSetting;
        this.fetchContactDetails();
        this.fetchHours();
        this.fetchFeatures();
        this.fetchStaticContent();
        this.fetchFeature();
        this.fetchJumbotron();
        this.fetchTemplate();
        this.fetchScript();
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.findMinMax = function (arr) {
        var min = arr[0].MonthlyRate, max = arr[0].MonthlyRate;
        for (var i = 1, len = arr.length; i < len; i++) {
            var v = arr[i].MonthlyRate;
            min = (v < min) ? v : min;
            max = (v > max) ? v : max;
        }
        return [min, max];
    };
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.getDataSubscribe$ = this.fetchDataService.getData()
            .subscribe(function (unitTypesResponse) {
            _this.findMinMax(unitTypesResponse.lstUnitTypes);
            var min = _this.findMinMax(unitTypesResponse.lstUnitTypes)[0];
            var max = _this.findMinMax(unitTypesResponse.lstUnitTypes)[1];
            console.log('this.findMinMax(unitTypesResponse.lstUnitTypes)[0]', min, 'this.findMinMax(unitTypesResponse.lstUnitTypes)[1]', max);
        });
    };
    HomeComponent.prototype.loadScript = function () {
        var node = document.createElement('script'); // creates the script tag
        node.type = 'application/ld+json'; // set the script type
        node.async = false; // makes script run asynchronously
        // node.charset = 'utf-8';
        node.innerHTML = JSON.stringify(this.script);
        // append to head of document
        // document.getElementsByTagName('head')[0].appendChild(node);
        document.head.appendChild(node);
    };
    HomeComponent.prototype.fetchScript = function () {
        this.script = script_1.homePageScript;
    };
    HomeComponent.prototype.fetchOgHomePage = function () {
        this.ogHomePage = script_1.ogHomePage;
    };
    HomeComponent.prototype.fetchTwitterHomePage = function () {
        this.twitterHomePage = script_1.twitterHomePage;
    };
    HomeComponent.prototype.fetchTemplate = function () {
        this.template = environment_1.environment.template;
    };
    HomeComponent.prototype.fetchMetaData = function () {
        this.homePageTitle = title_1.homePageTitle;
        this.homePageContent = title_1.homePageContent;
    };
    HomeComponent.prototype.fetchContactDetails = function () {
        this.contactDetails = contact_1.contact;
    };
    HomeComponent.prototype.fetchHours = function () {
        this.hours = contact_1.hours;
    };
    HomeComponent.prototype.fetchFeatures = function () {
        this.featuresList = home_1.featuresList;
    };
    HomeComponent.prototype.fetchStaticContent = function () {
        this.aboutUs = home_1.aboutUs;
        this.aboutUsAlt = home_1.aboutUsAlt;
        this.aboutUsHeading = home_1.aboutUsHeading;
        this.gettingStarted = home_1.gettingStarted;
    };
    HomeComponent.prototype.fetchFeature = function () {
        this.feature = home_1.feature;
    };
    HomeComponent.prototype.fetchJumbotron = function () {
        this.jumbotron = home_1.jumbotron;
    };
    HomeComponent.prototype.getImageUrl = function (imageName) {
        return this.imageBaseUrl + "/" + imageName + "." + this.imagetype;
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
            this.getDataSubscribe$.unsubscribe();
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        __param(8, core_1.Inject(common_1.DOCUMENT))
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
