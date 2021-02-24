"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.NavigationService = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        var _this = this;
        this.previousUrl$ = new rxjs_1.BehaviorSubject(null);
        this.currentUrl$ = new rxjs_1.BehaviorSubject(null);
        this.historyLogs = [];
        router.events
            .pipe(
        // only include NavigationStart and NavigationEnd events
        operators_1.filter(function (event) {
            return event instanceof router_1.NavigationStart || event instanceof router_1.NavigationEnd;
        }), operators_1.scan(function (acc, event) {
            if (event instanceof router_1.NavigationStart) {
                // We need to track the trigger, id, and idToRestore from the NavigationStart events
                return __assign(__assign({}, acc), { event: event, trigger: event.navigationTrigger, id: event.id, idToRestore: (event.restoredState && event.restoredState.navigationId) ||
                        undefined });
            }
            // NavigationEnd events
            var history = __spreadArrays(acc.history);
            var currentIndex = acc.currentIndex;
            // router events are imperative (router.navigate or routerLink)
            if (acc.trigger === 'imperative') {
                // remove all events in history that come after the current index
                history.splice(currentIndex + 1);
                // add the new event to the end of the history and set that as our current index
                history.push({ id: acc.id, url: event.urlAfterRedirects });
                currentIndex = history.length - 1;
            }
            // browser events (back/forward) are popstate events
            if (acc.trigger === 'popstate') {
                // get the history item that references the idToRestore
                var idx = history.findIndex(function (x) { return x.id === acc.idToRestore; });
                // if found, set the current index to that history item and update the id
                if (idx > -1) {
                    currentIndex = idx;
                    history[idx].id = acc.id;
                }
                else {
                    currentIndex = 0;
                }
            }
            return __assign(__assign({}, acc), { event: event,
                history: history,
                currentIndex: currentIndex });
        }, {
            event: null,
            history: [],
            trigger: null,
            id: 0,
            idToRestore: 0,
            currentIndex: 0
        }), 
        // filter out so we only act when navigation is done
        operators_1.filter(function (_a) {
            var event = _a.event, trigger = _a.trigger;
            return event instanceof router_1.NavigationEnd && !!trigger;
        }))
            .subscribe(function (_a) {
            var history = _a.history, currentIndex = _a.currentIndex;
            var previous = history[currentIndex - 1];
            var current = history[currentIndex];
            // update current and previous urls
            _this.previousUrl$.next(previous ? previous.url : null);
            _this.currentUrl$.next(current.url);
        });
    }
    NavigationService.prototype.updateHistoryLog = function (event) {
        this.historyLogs.push(event);
    };
    NavigationService.prototype.getHistoryLog = function () {
        return this.historyLogs;
    };
    NavigationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
