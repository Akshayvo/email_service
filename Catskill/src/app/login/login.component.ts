import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  credentialsInvalid = false;

  allowedToshow = false;

  showForgotPassword = false;
  showPayRent = false;

  showLoader = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      strUserName: ['', Validators.required],
      strPassword: ['', Validators.required],
      intAuthMethod: 1
    });
  }

  get f() { return this.loginForm.controls; }

  handleForgotPassword() {
    this.showForgotPassword = true;
  }

  handleShowLoader() {
    this.showLoader = true;
  }

  auth(data: any): void {
    this.authService.auth(data)
        .subscribe(
          auth => {
            this.showPayRent = true;
          }, (err) => {
            this.credentialsInvalid = true;
            this.showLoader = false;
          }
        );
  }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {

      this.allowedToshow = true;
      this.auth(this.loginForm.value);
    }
  }

}
