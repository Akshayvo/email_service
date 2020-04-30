import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { PhotosComponent } from './photos/photos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { TruckRentalsComponent } from './truck-rentals/truck-rentals.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { AboutusPhotosComponent } from './aboutus-photos/aboutus-photos.component';
import { RvRentalComponent } from './rv-rental/rv-rental.component';
import { WildwoodComponent } from './wildwood/wildwood.component';
import { PrimeTimeComponent } from './prime-time/prime-time.component';
import { CamperRentalComponent } from './camper-rental/camper-rental.component';
import { LoginComponent } from './api-bundle/login/login.component';
import { ForgotPasswordComponent } from './api-bundle/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './api-bundle/change-password/change-password.component';
import { PayRentFormComponent } from './api-bundle/pay-rent-form/pay-rent-form.component';
import { VerifyCodeComponent } from './api-bundle/verify-code/verify-code.component';
import { ResetPasswordComponent } from './api-bundle/reset-password/reset-password.component';
import { LoginModalComponent } from './api-bundle/login-modal/login-modal.component';
import { PaymentComponent } from './payment/payment.component';
import { MakePaymentComponent } from './iframe-bundle/make-payment/make-payment.component';
import { StorageUnitComponent } from './iframe-bundle/storage-unit/storage-unit.component';
import { ReserveUnitComponent } from './iframe-bundle/reserve-unit/reserve-unit.component';
import { ViewRatesPageComponent } from './api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './api-bundle/confirmation-data/confirmation-data.component';
import { PayRentComponent } from './api-bundle/pay-rent/pay-rent.component';
import { MaterialModule } from './api-bundle/modules/material/material.module';
import { ViewRatesComponent } from './api-bundle/view-rates/view-rates.component';
import { DatePipe } from '@angular/common';
import { AuthService } from './api-bundle/services/auth.service';
import { AuthGuard } from './auth.gurad';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { RequestInterceptorService } from './api-bundle/services/request-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReserveComponent } from './api-bundle/reserve/reserve.component';
import { WinnebagoComponent } from './winnebago/winnebago.component';


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
    SelectLocationComponent,
    TruckRentalsComponent,
    ErrorHandlerComponent,
    AboutusPhotosComponent,
    RvRentalComponent,
    WildwoodComponent,
    PrimeTimeComponent,
    CamperRentalComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PayRentFormComponent,
    VerifyCodeComponent,
    ResetPasswordComponent,
    LoginModalComponent,
    MakePaymentComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentComponent,
    ViewRatesComponent,
    ReserveComponent,
    WinnebagoComponent
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
