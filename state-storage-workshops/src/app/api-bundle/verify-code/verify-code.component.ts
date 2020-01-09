import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit, OnDestroy {

  verifyCodeForm: FormGroup;
  submitted = false;

   private verifyCodeUnsubscribe$: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router,

  ) {
    this.verifyCodeForm = this.formBuilder.group({
      strEmailID: ['', [Validators.required, Validators.email]],
      strPasswordToken: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  get f() { return this.verifyCodeForm.controls; }

  goBack() {
    this.router.navigate(['pay-rent/forgotPassword']);
  }

  verifyCode(data: any): void {
  this.verifyCodeUnsubscribe$ =  this.authService.verifyCode(data)
    .subscribe(
      result => {
        if (result.intErrorCode === 1) {
          this.router.navigate(['pay-rent/reset']);
        }
       }, (err) => {
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.verifyCodeForm.invalid) {
      return;
    } else {
      this.verifyCode(this.verifyCodeForm.value);
    }
  }

  public ngOnDestroy(): void  {
    if (this.verifyCodeUnsubscribe$ && !this.verifyCodeUnsubscribe$.closed) {
      this.verifyCodeUnsubscribe$.unsubscribe();
    }
  }
}
