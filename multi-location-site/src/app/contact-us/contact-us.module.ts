import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

console.info("contact-us module is loaded")
@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    ReactiveFormsModule,
  ], exports: [ContactUsComponent], entryComponents: [ContactUsComponent]
})
export class ContactUsModule { }
