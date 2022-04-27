import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


console.info("contact module is loaded")
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
  ], exports: [ContactComponent], entryComponents: [ContactComponent]
})
export class ContactModule { }
