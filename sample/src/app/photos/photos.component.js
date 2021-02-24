"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PhotosComponent = void 0;
var core_1 = require("@angular/core");
var galleryImage_1 = require("../data/galleryImage");
var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(route, router, uaParserService) {
        this.route = route;
        this.router = router;
        this.uaParserService = uaParserService;
        this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
        this.imageBaseUrl = this.uaParserService.baseUrl;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.fetchGallery();
        this.setSelectedImage(this.galleryImages[0]);
    };
    PhotosComponent.prototype.fetchGallery = function () {
        this.galleryImages = galleryImage_1.galleryHome;
    };
    PhotosComponent.prototype.setSelectedImage = function (image) {
        this.selectedImage = image;
    };
    PhotosComponent = __decorate([
        core_1.Component({
            selector: 'app-photos',
            templateUrl: './photos.component.html',
            styleUrls: ['./photos.component.scss']
        })
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
