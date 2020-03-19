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
import { PaymentComponent } from './payment/payment.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { LocationComponent } from './location/location.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
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
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { PayRentNatronaComponent } from './pay-rent-natrona/pay-rent-natrona.component';
import { PayRentShalerComponent } from './pay-rent-shaler/pay-rent-shaler.component';
import { ViewRatesPageComponent } from './view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from './reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from './confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.gurad';
import { CanDeactivateGuard } from './preventRouteChange.guard';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginModalComponent } from './login-modal/login-modal.component';

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
    ErrorHandlerComponent,
    PayRentComponent,
    PayRentNatronaComponent,
    PayRentShalerComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    VerifyCodeComponent,
    LoginModalComponent,
    ResetPasswordComponent
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
