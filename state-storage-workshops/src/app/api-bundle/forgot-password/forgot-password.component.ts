import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  forgotPasswordForm: FormGroup;
  submitted = false;

   private forgotPasswordUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,

  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      strEmailID: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
  }

  get f() { return this.forgotPasswordForm.controls; }

  goBack() {
    this.router.navigate(['pay-rent/login']);
  }

  forgotPassword(data: any): void {
  this.forgotPasswordUnsubscribe$ =  this.authService.forgotPassword(data)
    .subscribe(
      result => {
        this.router.navigate(['pay-rent/verifyCode']);
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.invalid) {
      return;
    } else {
      this.forgotPassword(this.forgotPasswordForm.value);
    }
  }

  public ngOnDestroy(): void  {
    if (this.forgotPasswordUnsubscribe$ && !this.forgotPasswordUnsubscribe$.closed) {
      this.forgotPasswordUnsubscribe$.unsubscribe();
    }
  }

}
