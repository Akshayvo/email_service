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

  auth(data: any): void {
    this.authService.auth(data)
        .subscribe(
          auth => {
          }, (err) => {
            this.credentialsInvalid = true;
          }
        );
  }


  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.auth(this.loginForm.value);
    }
  }

}
