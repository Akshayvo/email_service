"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var autocomplete_1 = require("@angular/material/autocomplete");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var chips_1 = require("@angular/material/chips");
var core_2 = require("@angular/material/core");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var expansion_1 = require("@angular/material/expansion");
var form_field_1 = require("@angular/material/form-field");
var grid_list_1 = require("@angular/material/grid-list");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var paginator_1 = require("@angular/material/paginator");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var sidenav_1 = require("@angular/material/sidenav");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var slider_1 = require("@angular/material/slider");
var snack_bar_1 = require("@angular/material/snack-bar");
var sort_1 = require("@angular/material/sort");
var stepper_1 = require("@angular/material/stepper");
var table_1 = require("@angular/material/table");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var table_2 = require("@angular/cdk/table");
var a11y_1 = require("@angular/cdk/a11y");
var bidi_1 = require("@angular/cdk/bidi");
var overlay_1 = require("@angular/cdk/overlay");
var platform_1 = require("@angular/cdk/platform");
var observers_1 = require("@angular/cdk/observers");
var portal_1 = require("@angular/cdk/portal");
// import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                // Material Modules
                autocomplete_1.MatAutocompleteModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                card_1.MatCardModule,
                checkbox_1.MatCheckboxModule,
                chips_1.MatChipsModule,
                table_1.MatTableModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                expansion_1.MatExpansionModule,
                form_field_1.MatFormFieldModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                paginator_1.MatPaginatorModule,
                progress_bar_1.MatProgressBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                radio_1.MatRadioModule,
                core_2.MatRippleModule,
                select_1.MatSelectModule,
                sidenav_1.MatSidenavModule,
                slide_toggle_1.MatSlideToggleModule,
                slider_1.MatSliderModule,
                snack_bar_1.MatSnackBarModule,
                sort_1.MatSortModule,
                tabs_1.MatTabsModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                core_2.MatNativeDateModule,
                stepper_1.MatStepperModule,
                table_2.CdkTableModule,
                a11y_1.A11yModule,
                bidi_1.BidiModule,
                observers_1.ObserversModule,
                overlay_1.OverlayModule,
                platform_1.PlatformModule,
                portal_1.PortalModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
