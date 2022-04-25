import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReserveRoutingModule } from './reserve-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReserveRoutingModule,
    SharedModule
  ]
})
export class ReserveModule { }
