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
exports.ScriptHackComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ScriptHackComponent = /** @class */ (function () {
    function ScriptHackComponent(platformId) {
        this.platformId = platformId;
        this.destroyed = new rxjs_1.Subject();
    }
    ScriptHackComponent.prototype.convertToScript = function () {
        var element = this.script.nativeElement;
        var parent = element.parentElement;
        var script = document.createElement('script');
        script.type = this.type ? this.type : 'text/javascript';
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        parent.parentElement.replaceChild(script, parent);
    };
    ScriptHackComponent.prototype.ngAfterViewInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.convertToScript();
        }
    };
    ScriptHackComponent.prototype.ngOnDestroy = function () {
        this.destroyed.next();
        this.destroyed.complete();
    };
    __decorate([
        core_1.Input()
    ], ScriptHackComponent.prototype, "src");
    __decorate([
        core_1.Input()
    ], ScriptHackComponent.prototype, "type");
    __decorate([
        core_1.ViewChild('script')
    ], ScriptHackComponent.prototype, "script");
    ScriptHackComponent = __decorate([
        core_1.Component({
            selector: 'app-script-hack',
            templateUrl: './script-hack.component.html',
            styleUrls: ['./script-hack.component.scss']
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID))
    ], ScriptHackComponent);
    return ScriptHackComponent;
}());
exports.ScriptHackComponent = ScriptHackComponent;
