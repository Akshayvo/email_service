import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './api-bundle/services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) {}

  canActivate(): boolean {
      if (this.auth.isUserAuthenticated()) {
        console.log('auth result', this.auth.isUserAuthenticated());
          return true;
      } else {
        console.log('auth result second condition', this.auth.isUserAuthenticated());
        this.router.navigate([`pay-rent`]);
          return false;
      }
  }
}
