import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';

@Injectable()
export class VerifictionCodeGuard implements CanActivate {

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    ) {}

  canActivate(): boolean {
      if (this.dataSharingService.verificationCode) {
          return true;
      } else {
          this.router.navigate(['/pay-rent/forgotPassword']);
          return false;
      }
  }
}
