import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { DataSharingService } from './api-bundle/services/data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class ThankYouGuard implements CanActivate {

  constructor(
    private dataSharingService: DataSharingService,
    public router: Router,
  ) {
  }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;


  isData(): boolean {
    if (!!this.dataSharingService.strAccessCode || !!this.dataSharingService.strConfirmation || !!this.dataSharingService.CCApprovalCode) {
      return true
    } else {
      return false;
    }
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
       return this.isData() ? true : this.router.navigate(['/']);
  }
}
