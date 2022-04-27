import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PhotosComponent } from '../photos/photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HometRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, PhotosComponent],
  imports: [
    CommonModule,
    HometRoutingModule,
    ReactiveFormsModule,
  ], exports: [HomeComponent], entryComponents: [HomeComponent]
})
export class HomeModule { }
