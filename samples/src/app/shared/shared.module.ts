import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { ThankYouComponent } from '../api-bundle/thank-you/thank-you.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../modules/material/material.module';
import { AuthService } from '../api-bundle/services/auth.service';
import { AuthGuard } from '../auth-guard/auth.gurad';
import { VerifictionCodeGuard } from '../auth-guard/verificationCode.guard';
import { Title } from '@angular/platform-browser';
import { CanDeactivateGuard } from '../preventRouteChange.guard';
import { ThankYouGuard } from '../thank-you.guard';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';

@NgModule({
  declarations: [
    ViewRatesComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    ThankYouComponent,
    // ReserveComponent, 
    
  ],
  exports:[
    ViewRatesComponent,
    ViewRatesPageComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent, 
    PayRentFormComponent,
    ThankYouComponent,
    // ReserveComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    AuthService,
    AuthGuard,
    VerifictionCodeGuard,
    Title,
    CanDeactivateGuard,
    ThankYouGuard, 
  ]
})
export class SharedModule { }
