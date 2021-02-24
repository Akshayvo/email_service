"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var universal_1 = require("@ng-toolkit/universal");
var common_1 = require("@angular/common");
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var footer_component_1 = require("./footer/footer.component");
var tables_component_1 = require("./tables/tables.component");
var error_component_1 = require("./error/error.component");
var accordion_component_1 = require("./accordion/accordion.component");
var angulartics2_1 = require("angulartics2");
var ga_1 = require("angulartics2/ga");
var storage_tips_component_1 = require("./storage-tips/storage-tips.component");
var error_handler_component_1 = require("./error-handler/error-handler.component");
var error_handler_service_1 = require("./services/error-handler.service");
var reserve_component_1 = require("./api-bundle/reserve/reserve.component");
var view_rates_component_1 = require("./api-bundle/view-rates/view-rates.component");
var view_rates_iframe_page_component_1 = require("./iframe-bundle/view-rates-iframe-page/view-rates-iframe-page.component");
var view_rates_page_component_1 = require("./api-bundle/view-rates-page/view-rates-page.component");
var reserve_unit_form_component_1 = require("./api-bundle/reserve-unit-form/reserve-unit-form.component");
var reserve_unit_iframe_page_component_1 = require("./iframe-bundle/reserve-unit-iframe-page/reserve-unit-iframe-page.component");
var confirmation_data_component_1 = require("./api-bundle/confirmation-data/confirmation-data.component");
var pay_rent_form_component_1 = require("./api-bundle/pay-rent-form/pay-rent-form.component");
var payment_component_1 = require("./api-bundle/payment/payment.component");
var payment_iframe_page_component_1 = require("./iframe-bundle/payment-iframe-page/payment-iframe-page.component");
var login_component_1 = require("./api-bundle/login/login.component");
var login_modal_component_1 = require("./api-bundle/login-modal/login-modal.component");
var forgot_password_component_1 = require("./api-bundle/forgot-password/forgot-password.component");
var change_password_component_1 = require("./api-bundle/change-password/change-password.component");
var verificationCode_guard_1 = require("./auth-guard/verificationCode.guard");
var verify_code_component_1 = require("./api-bundle/verify-code/verify-code.component");
var common_2 = require("@angular/common");
var auth_gurad_1 = require("./auth-guard/auth.gurad");
var auth_service_1 = require("./api-bundle/services/auth.service");
var ngx_select_dropdown_1 = require("ngx-select-dropdown");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./modules/material/material.module");
var reset_password_component_1 = require("./api-bundle/reset-password/reset-password.component");
var request_interceptor_service_1 = require("./api-bundle/services/request-interceptor.service");
var preventRouteChange_guard_1 = require("./preventRouteChange.guard");
var unit_sizer_component_1 = require("./unit-sizer/unit-sizer.component");
var unit_sizes_component_1 = require("./unit-sizes/unit-sizes.component");
var photos_component_1 = require("./photos/photos.component");
var script_hack_component_1 = require("./script-hack/script-hack.component");
var rent_sub_component_1 = require("./api-bundle/rent-sub/rent-sub.component");
var auto_pay_component_1 = require("./api-bundle/auto-pay/auto-pay.component");
var pay_rent_component_1 = require("./api-bundle/pay-rent/pay-rent.component");
var sign_up_component_1 = require("./api-bundle/sign-up/sign-up.component");
var tabs_component_1 = require("./tabs/tabs.component");
var thank_you_component_1 = require("./api-bundle/thank-you/thank-you.component");
var thank_you_guard_1 = require("./thank-you.guard");
var privacy_policy_component_1 = require("./privacy-policy/privacy-policy.component");
var alternate_details_component_1 = require("./alternate-details/alternate-details.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                contact_component_1.ContactComponent,
                footer_component_1.FooterComponent,
                view_rates_component_1.ViewRatesComponent,
                tables_component_1.TablesComponent,
                error_component_1.ErrorComponent,
                error_handler_component_1.ErrorHandlerComponent,
                storage_tips_component_1.StorageTipsComponent,
                accordion_component_1.AccordionComponent,
                reserve_component_1.ReserveComponent,
                view_rates_component_1.ViewRatesComponent,
                view_rates_iframe_page_component_1.ViewRatesIframePageComponent,
                view_rates_page_component_1.ViewRatesPageComponent,
                reserve_unit_form_component_1.ReserveUnitFormComponent,
                reserve_unit_iframe_page_component_1.ReserveUnitIframePageComponent,
                confirmation_data_component_1.ConfirmationDataComponent,
                pay_rent_form_component_1.PayRentFormComponent,
                payment_component_1.PaymentComponent,
                payment_iframe_page_component_1.PaymentIframePageComponent,
                login_component_1.LoginComponent,
                login_modal_component_1.LoginModalComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                change_password_component_1.ChangePasswordComponent,
                verify_code_component_1.VerifyCodeComponent,
                reset_password_component_1.ResetPasswordComponent,
                unit_sizer_component_1.UnitSizerComponent,
                unit_sizes_component_1.UnitSizesComponent,
                photos_component_1.PhotosComponent,
                script_hack_component_1.ScriptHackComponent,
                auto_pay_component_1.AutoPayComponent,
                rent_sub_component_1.RentSubComponent,
                pay_rent_component_1.PayRentComponent,
                sign_up_component_1.SignUpComponent,
                tabs_component_1.TabsComponent,
                thank_you_component_1.ThankYouComponent,
                privacy_policy_component_1.PrivacyPolicyComponent,
                alternate_details_component_1.AlternateDetailsComponent,
            ],
            imports: [
                common_1.CommonModule,
                universal_1.NgtUniversalModule,
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
                angulartics2_1.Angulartics2Module.forRoot([ga_1.Angulartics2GoogleAnalytics]),
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ngx_select_dropdown_1.SelectDropDownModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
            ],
            providers: [
                common_2.DatePipe,
                auth_service_1.AuthService,
                auth_gurad_1.AuthGuard,
                verificationCode_guard_1.VerifictionCodeGuard,
                platform_browser_1.Title,
                preventRouteChange_guard_1.CanDeactivateGuard,
                thank_you_guard_1.ThankYouGuard,
                {
                    provide: core_1.ErrorHandler,
                    useClass: error_handler_service_1.ErrorHandlerService
                },
                platform_browser_1.Title,
                {
                    provide: 'externalUrlRedirectResolver',
                    useValue: function (route, state) {
                        window.location.href = route.data.externalUrl;
                    }
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: request_interceptor_service_1.RequestInterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
