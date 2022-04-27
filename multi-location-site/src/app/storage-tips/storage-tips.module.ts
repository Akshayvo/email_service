import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageTipsComponent } from './storage-tips.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { StorageTipsRoutingModule } from './storage-tips-routing.module';

console.info("storage tips component is loaded")
@NgModule({
  declarations: [StorageTipsComponent, AccordionComponent],
  imports: [
    CommonModule,
    StorageTipsRoutingModule,
  ], exports: [StorageTipsComponent, AccordionComponent], entryComponents: [StorageTipsComponent]
})
export class StorageTipsModule { }
