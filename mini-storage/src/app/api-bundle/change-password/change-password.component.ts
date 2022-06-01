import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataSharingService } from '../services/data-sharing.service';
import { MustMatch } from './_helpers/must-match.validator';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  submitted = false;
  showLoader = false;
  passwordChanged = false;
  incorrectPassword = false;
  paymentTab: string;
  changePasswordForm: FormGroup;
  private changePasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private dataSharingService: DataSharingService,

  ) {
    this.changePasswordForm = this.formBuilder.group({
      strOldPassword: ['', [Validators.required]],
      strNewPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    {
      validator: MustMatch('strNewPassword', 'confirmPassword')
    });
  }

  ngOnInit() {
    if (!!localStorage.getItem('paymentTab')) {
      this.paymentTab = localStorage.getItem('paymentTab');
    }
    if (this.passwordChanged === true) {
      if (!!this.paymentTab) {
        this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
      } else {
        this.router.navigate([`/pay-rent/login`]);
      }
    }
  }

  get f() { return this.changePasswordForm.controls; }

  goBack() {
    this.dataSharingService.changePassword = false;
    localStorage.removeItem('strTenantToken');
    if (!!this.paymentTab) {
      this.router.navigate([`/pay-rent/${this.paymentTab}/login`]);
    } else {
      this.router.navigate([`/pay-rent/login`]);
    }
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }


  changePassword(data: any): void {
    this.showLoader = true;
    this.changePasswordUnsubscribe$ =  this.authService.changePassword(data)
    .subscribe(
      result => {
        this.showLoader = false;
        if (result.intErrorCode === 1) {
          localStorage.removeItem('strTenantToken');
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
