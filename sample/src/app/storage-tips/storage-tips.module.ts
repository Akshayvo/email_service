import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageTipsComponent } from './storage-tips.component';
import { StorageTipsRoutingModule } from './storage-tips-routing.module';
import { AccordionComponent } from '../accordion/accordion.component';

console.warn("storage tips module loaded")
@NgModule({
  declarations: [StorageTipsComponent,AccordionComponent],
  imports: [
    CommonModule,
    StorageTipsRoutingModule,
  ]
})
export class StorageTipsModule { }
