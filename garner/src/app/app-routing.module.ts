import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { apiRoutes, iFrameRoutes } from './data/route';
import { AppResolver } from './api-bundle/resolver/app.resolver';

export const routes: Routes = environment.type ?  iFrameRoutes : apiRoutes;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppResolver]
})
export class AppRoutingModule { }
