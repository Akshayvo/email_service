import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { PhotosComponent } from './photos/photos.component';
import { TruckRentalsComponent } from './truck-rentals/truck-rentals.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PenskeTruckRentalsComponent } from './penske-truck-rentals/penske-truck-rentals.component';
import { UnitSizesComponent } from './unit-sizes/unit-sizes.component';
import { PayRentComponent } from './pay-rent/pay-rent.component';
import { RentSubComponent } from './rent-sub/rent-sub.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TabsComponent } from './tabs/tabs.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { PayRentFormComponent } from './pay-rent-form/pay-rent-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth-guard/auth.gurad';
import { VerifictionCodeGuard } from './auth-guard/verificationCode.guard';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ViewRatesComponent,
    TablesComponent,
    ErrorComponent,
    StorageTipsComponent,
    AccordionComponent,
    PhotosComponent,
    TruckRentalsComponent,
    ErrorHandlerComponent,
    PenskeTruckRentalsComponent,
    UnitSizesComponent,
    PayRentComponent,
    RentSubComponent,
    SignUpComponent,
    VerifyCodeComponent,
    TabsComponent,
    PayRentFormComponent,
    ResetPasswordComponent,
    LoginComponent,
    LoginModalComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // SelectDropDownModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    VerifictionCodeGuard,
    Title,
    // CanDeactivateGuard,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    Title,
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
  bootstrap: [AppComponent],
})
export class AppModule { }
