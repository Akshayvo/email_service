import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ViewRatesComponent } from './view-rates/view-rates.component';
import { PaymentComponent } from './payment/payment.component';
import { TablesComponent } from './tables/tables.component';
import { ErrorComponent } from './error/error.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { PhotosComponent } from './photos/photos.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { RvSiteRentalComponent } from './rv-site-rental/rv-site-rental.component';
import { LocationComponent } from './location/location.component';
import { HomeForSaleComponent } from './home-for-sale/home-for-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    ViewRatesComponent,
    PaymentComponent,
    TablesComponent,
    ErrorComponent,
    ErrorHandlerComponent,
    UnitSizerComponent,
    StorageTipsComponent,
    AccordionComponent,
    PhotosComponent,
    AmenitiesComponent,
    RvSiteRentalComponent,
    LocationComponent,
    HomeForSaleComponent,
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
  ],
  providers: [
    Title,
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
