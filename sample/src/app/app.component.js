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
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var universal_1 = require("@ng-toolkit/universal");
var rxjs_1 = require("rxjs");
var message_1 = require("./data/message");
var AppComponent = /** @class */ (function () {
    // logs: { event: string; message: string }[] = [];
    function AppComponent(router, angulatics, routerHistoryService, window) {
        var _this = this;
        this.router = router;
        this.angulatics = angulatics;
        this.routerHistoryService = routerHistoryService;
        this.window = window;
        this.title = "" + message_1.messages.routeChangePrevent;
        // Routing code
        this.previousUrlViaNavigationEnd$ = new rxjs_1.BehaviorSubject(null);
        this.currentUrlViaNavigationEnd$ = new rxjs_1.BehaviorSubject(null);
        this.previousUrlViaRoutesRecognized$ = new rxjs_1.BehaviorSubject(null);
        this.currentUrlViaRoutesRecognized$ = new rxjs_1.BehaviorSubject(null);
        // Via RouterHistoryService
        this.previousUrlViaRouterHistoryService$ = this.routerHistoryService.previousUrl$;
        this.currentUrlViaRouterHistoryService$ = this.routerHistoryService.currentUrl$;
        // Event logging only
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.routerHistoryService.updateHistoryLog({
                    event: 'NavigationStart',
                    message: JSON.stringify(event)
                });
            }
            if (event instanceof router_1.NavigationEnd) {
                _this.routerHistoryService.updateHistoryLog({
                    event: 'NavigationEnd',
                    message: JSON.stringify(event)
                });
            }
        });
        // Via Navigation End Event
        this.currentUrlViaNavigationEnd$.next(router.url);
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.previousUrlViaNavigationEnd$.next(_this.currentUrlViaNavigationEnd$.value);
                _this.currentUrlViaNavigationEnd$.next(event.urlAfterRedirects);
            }
        });
        // Via RoutesRecognized
        router.events
            .pipe(operators_1.filter(function (evt) { return evt instanceof router_1.RoutesRecognized; }), operators_1.pairwise())
            .subscribe(function (_a) {
            var previous = _a[0], current = _a[1];
            _this.previousUrlViaRoutesRecognized$.next(previous.urlAfterRedirects);
            _this.currentUrlViaRoutesRecognized$.next(current.urlAfterRedirects);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.x = window.matchMedia('(max-width: 600px)');
        this.flag = false;
        this.angulatics.eventTrack('Dev', { category: 'App initialized' });
    };
    AppComponent.prototype.dataShow = function () {
        if (!this.flag) {
            this.flag = !this.flag;
            if (this.x.matches) {
                document.body.style.overflow = 'hidden';
            }
        }
        else {
            this.flag = !this.flag;
            if (this.x.matches) {
                document.body.style.overflow = 'auto';
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __param(3, core_1.Inject(universal_1.WINDOW))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
