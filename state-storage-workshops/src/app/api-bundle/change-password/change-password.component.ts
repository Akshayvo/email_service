import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  changePasswordForm: FormGroup;
  submitted = false;
  incorrectPassword = false;

  passwordChanged = false;
   private changePasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,

  ) {
    this.changePasswordForm = this.formBuilder.group({
      strOldPassword: ['', [Validators.required]],
      strNewPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (this.passwordChanged === true) {
      this.router.navigate(['pay-rent/login']);
    }
  }

  get f() { return this.changePasswordForm.controls; }

  goBack() {
    this.router.navigate(['pay-rent/login']);
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }


  changePassword(data: any): void {
  this.changePasswordUnsubscribe$ =  this.authService.changePassword(data)
    .subscribe(
      result => {
        if (result.intErrorCode === 1) {
          localStorage.removeItem('strTenantToken');
          console.log('password changed');
          this.passwordChanged = true;
        } else {
          this.incorrectPassword = true;
        }
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    } else {
      this.changePassword(this.changePasswordForm.value);
    }
  }

  public ngOnDestroy(): void  {
    if (this.changePasswordUnsubscribe$ && !this.changePasswordUnsubscribe$.closed) {
      this.changePasswordUnsubscribe$.unsubscribe();
    }
  }

}
