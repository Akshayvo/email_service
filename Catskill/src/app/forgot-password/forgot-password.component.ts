import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submitted = false;

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
    this.authService.forgotPassword(data)
    .subscribe(
      result => {
        console.log(result);
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
    console.log(this.forgotPasswordForm.value);
  }
}
