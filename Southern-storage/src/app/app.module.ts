import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgtUniversalModule } from '@ng-toolkit/universal';

// import '@material/tab/mdc-tab-scroller';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { SafePipe } from './safe.pipe';
import { StorageUnitComponent } from './storage-unit/storage-unit.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { AuthGuard } from '../app/auth.gurad';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { MaterialModule } from './api-bundle/modules/material/material.module';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { RentSubComponent } from './api-bundle/rent-sub/rent-sub.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { AuthService } from './api-bundle/services/auth.service';
import { ErrorHandlerService } from './api-bundle/services/error-handler.service';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { ThankYouComponent } from './api-bundle/thank-you/thank-you.component';
import { SignUpComponent } from './api-bundle/sign-up/sign-up.component';
import { AutoPayComponent } from './api-bundle/auto-pay/auto-pay.component';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    PaymentComponent,
    TablesComponent,
    ErrorComponent,
    LocationComponent,
    StorageTipsComponent,
    SafePipe,
    StorageUnitComponent,
    UnitSizerComponent,
    ReserveUnitComponent,
    PhotosComponent,
    AboutUsComponent,
    DirectionsComponent,
    TabsComponent,
    AccordionComponent,
    RentSubComponent,
    SelectLocationComponent,
    ErrorHandlerComponent,
    ConfirmationDataComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    PayRentFormComponent,
    ChangePasswordComponent,
    LoginModalComponent,
    ResetPasswordComponent,
    VerifyCodeComponent,
    PayRentComponent,
    ThankYouComponent,
    SignUpComponent,
    AutoPayComponent,
    ReserveComponent,
    ViewRatesComponent,
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
    ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    Title,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
