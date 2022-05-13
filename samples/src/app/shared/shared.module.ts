import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRatesComponent } from '../api-bundle/view-rates/view-rates.component';
import { ViewRatesPageComponent } from '../api-bundle/view-rates-page/view-rates-page.component';
import { ReserveUnitFormComponent } from '../api-bundle/reserve-unit-form/reserve-unit-form.component';
import { ReserveComponent } from '../api-bundle/reserve/reserve.component';
import { ConfirmationDataComponent } from '../api-bundle/confirmation-data/confirmation-data.component';
import { PayRentFormComponent } from '../api-bundle/pay-rent-form/pay-rent-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SelectDropDownModule } from 'ngx-select-dropdown';

@NgModule({
  declarations: [
    ViewRatesComponent,
    ViewRatesPageComponent, 
    ReserveComponent,
    ReserveUnitFormComponent,
    ConfirmationDataComponent,
    PayRentFormComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SelectDropDownModule
  ]
})
export class SharedModule { }
