import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';


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
  ) {
    this.forgotPasswordForm = this.formBuilder.group({
      strEmailID: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
  }

  get f() { return this.forgotPasswordForm.controls; }

  forgotPassword(data: any): void {
  this.forgotPasswordUnsubscribe$ =  this.authService.forgotPassword(data)
    .subscribe(
      result => {
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
