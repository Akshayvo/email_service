import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from '../tables/tables.component';
import { HomeRoutingModule } from './home-routing.module';

console.warn("Home modul loaded")
@NgModule({
  declarations: [HomeComponent,TablesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
