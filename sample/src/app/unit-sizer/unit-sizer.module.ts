import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitSizerComponent } from './unit-sizer.component';
import { UnitSizesComponent } from '../unit-sizes/unit-sizes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { unitSizerRoutingModule } from './unit-sizer-routing.module';

console.warn("unit sizer module is loaded")

@NgModule({
  declarations: [UnitSizerComponent, UnitSizesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    unitSizerRoutingModule,
  ]
})
export class UnitSizerModule { }
