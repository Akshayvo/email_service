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
import { StorageTipsComponent } from './storage-tips/storage-tips.component';
import { SafePipe } from './safe.pipe';
import { StorageUnitComponent } from './storage-unit/storage-unit.component';
import { UnitSizerComponent } from './unit-sizer/unit-sizer.component';
import { ReserveUnitComponent } from './reserve-unit/reserve-unit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DirectionsComponent } from './directions/directions.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { SelectLocationComponent } from './select-location/select-location.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { PayRentComponent } from './pay-rent-florida/pay-rent-florida.component';
import { PayRentChesterComponent } from './pay-rent-chester/pay-rent-chester.component'
import { PayRentMontgomeryComponent } from './pay-rent-montgomery/pay-rent-montgomery.component';
import { PayRentMiddletownComponent } from './pay-rent-middletown/pay-rent-middletown.component';
import { ContactFloridaComponent } from './contact-florida/contact-florida.component';
import { ContactMontgomeryComponent } from './contact-montgomery/contact-montgomery.component';
import { ContactChesterComponent } from './contact-chester/contact-chester.component';
import { ContactMiddletownComponent } from './contact-middletown/contact-middletown.component';
import { ListOfFacilityComponent } from './list-of-facility/list-of-facility.component';
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
    ContactFloridaComponent,
    ContactMontgomeryComponent,
    ContactChesterComponent,
    ContactMiddletownComponent,
    ListOfFacilityComponent
  ],
  imports: [
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
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          window.location.href = (route.data as any).externalUrl;
      }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
