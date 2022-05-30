import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { ThankYouComponent } from '../api-bundle/thank-you/thank-you.component';

import { ForgotPasswordComponent } from '../api-bundle/forgot-password/forgot-password.component';
import { PhotosComponent } from '../photos/photos.component';

@NgModule({
  declarations: [
    ViewRatesPageComponent, 
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    ThankYouComponent,
    ForgotPasswordComponent,
    PhotosComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SelectDropDownModule
  ],
  exports:[
    ViewRatesPageComponent, 
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    ThankYouComponent,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SelectDropDownModule,
    ForgotPasswordComponent,
    PhotosComponent,
  ]
})
export class SharedModule { }
