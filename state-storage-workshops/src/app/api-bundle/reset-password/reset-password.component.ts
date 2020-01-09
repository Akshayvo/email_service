import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  resetPasswordForm: FormGroup;
  submitted = false;
  passwordResetted = false;

   private resetPasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dataSharingService: DataSharingService,
  ) {
    this.resetPasswordForm = this.formBuilder.group({
      emailID: ['', [Validators.required, Validators.email]],
      strPasswordToken: ['', Validators.required],
      strOldPassword: ['', Validators.required],
      strNewPassword: ['', Validators.required],
    });

    // this.resetPasswordForm.patchValue({
    //   strPasswordToken : this.dataSharingService.verificationCode
    // });
  }

  ngOnInit() {
  }

  get f() { return this.resetPasswordForm.controls; }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/pay-rent/login']);
  }

  resetPassword(data: any): void {
  this.resetPasswordUnsubscribe$ =  this.authService.resetPassword(data)
    .subscribe(
      result => {
        if (result.intErrorCode === 1) {
          this.passwordResetted = true;
        }
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    } else {
      this.resetPassword(this.resetPasswordForm.value);
    }
  }

  public ngOnDestroy(): void  {
    if (this.resetPasswordUnsubscribe$ && !this.resetPasswordUnsubscribe$.closed) {
      this.resetPasswordUnsubscribe$.unsubscribe();
    }
  }
}

