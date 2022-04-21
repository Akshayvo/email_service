import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRoutingModule } from './header-routing.module';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, AppComponent, FooterComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
  ]
})
export class HeaderModule { } 
