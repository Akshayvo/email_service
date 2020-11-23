import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  changePasswordForm: FormGroup;
  submitted = false;
  incorrectPassword = false;
  showLoader = false;

  passwordChanged = false;
  navTo: string;
   private changePasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dataSharingService: DataSharingService,
    public router: Router,

  ) {
    this.changePasswordForm = this.formBuilder.group({
      strOldPassword: ['', [Validators.required]],
      strNewPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (window.localStorage) {
      this.navTo = localStorage.getItem('paymentNavigationUrl');

    }
    if (this.passwordChanged === true) {
      this.router.navigate([`pay-rent/${this.navTo}/login`]);
    }
  }

  get f() { return this.changePasswordForm.controls; }

  goBack() {
    localStorage.removeItem('strTenantToken');
    this.dataSharingService.changePassword = false;
    this.router.navigate([`pay-rent/${this.navTo}/login`]);
  }

  public navigate(location: any) {
    this.router.navigate([`pay-rent/${this.navTo}/${location}`]);
  }

  public navigateToHOme(location: any) {
    this.router.navigate([location]);
  }


  changePassword(data: any): void {
    this.showLoader = true;
  this.changePasswordUnsubscribe$ =  this.authService.changePassword(data)
    .subscribe(
      result => {
        if (result.intErrorCode === 1) {
          this.showLoader = false;
          localStorage.removeItem('strTenantToken');
          localStorage.removeItem('paymentNavigationUrl');
          localStorage.removeItem('APIKey');
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