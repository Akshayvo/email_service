import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { DataSharingService } from './api-bundle/services/data-sharing.service';

@Injectable()
export class VerifictionCodeGuard implements CanActivate {
    navTo: string;

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    ) {
        if (window.localStorage) {
            this.navTo = localStorage.getItem('paymentNavigationUrl');
          }
    }

  canActivate(): boolean {
      if (this.dataSharingService.verificationCode) {
          return true;
      } else {
          this.router.navigate([`pay-rent/${this.navTo}/forgotPassword`]);
          return false;
      }
  }
}
