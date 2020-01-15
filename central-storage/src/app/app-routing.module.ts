import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { apiRoutes, iFrameRoutes } from './data/route';
import { environment } from '../environments/environment';

export const routes: Routes = environment.type ?  iFrameRoutes : apiRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
