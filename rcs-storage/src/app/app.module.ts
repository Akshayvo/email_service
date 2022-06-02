import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgtUniversalModule } from '@ng-toolkit/universal';

// import '@material/tab/mdc-tab-scroller';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { SafePipe } from './safe.pipe';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentFloridaComponent } from './pay-rent-florida/pay-rent-florida.component';
import { PayRentChesterComponent } from './pay-rent-chester/pay-rent-chester.component';
import { PayRentMontgomeryComponent } from './pay-rent-montgomery/pay-rent-montgomery.component';
import { PayRentMiddletownComponent } from './pay-rent-middletown/pay-rent-middletown.component';
import { ListOfFacilityComponent } from './list-of-facility/list-of-facility.component';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { MaterialModule } from './api-bundle/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { AuthService } from './api-bundle/services/auth.service';
import { AuthGuard } from './auth.gurad';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { StorageUnitComponent } from './storage-unit/storage-unit.component';
import { PaymentIframeComponent } from './payment-iframe/payment-iframe.component';
import { PaymentComponent } from './api-bundle/payment/payment.component';
import { ThankYouComponent } from './api-bundle/thank-you/thank-you.component';
import { ScriptHackComponent } from './script-hack/script-hack.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ThankYouGuard } from './thank-you.guard';
import { PhotosComponent } from './photos/photos.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    TablesComponent,
    ErrorComponent,
    LocationComponent,
    StorageTipsComponent,
    SafePipe,
    StorageUnitComponent,
    UnitSizerComponent,
    ReserveUnitComponent,
    AboutUsComponent,
    DirectionsComponent,
    TabsComponent,
    AccordionComponent,
    SelectLocationComponent,
    ErrorHandlerComponent,
    PayRentComponent,
    PayRentChesterComponent,
    PayRentMontgomeryComponent,
    PayRentMiddletownComponent,
    ListOfFacilityComponent,
    ViewRatesComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    ReserveComponent,
    PayRentComponent,
    PayRentComponent,
    RentSubComponent,
    PayRentFloridaComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    SignUpComponent,
    AutoPayComponent,
    StorageUnitComponent,
    LoginModalComponent,
    PaymentIframeComponent,
    PaymentComponent,
    ThankYouComponent,
    ScriptHackComponent,
    PrivacyPolicyComponent,
    ContactUsComponent,
    PhotosComponent,
    FaqComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    NgtUniversalModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    // NgxJsonLdModule
    ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    Title,
    ThankYouGuard,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = (route.data as any).externalUrl;
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    },
    // { 
    //   provide: 'googleTagManagerId',
    //   useValue: `GTM-MN7WC8L`
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
