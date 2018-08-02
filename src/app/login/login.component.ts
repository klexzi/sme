import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  condition = false;
  type = 'password';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    loginType: new FormControl()
  });
  email = this.form.get('email');
  password = this.form.get('password');
  constructor(private route: Router ) { }

  ngOnInit() {
  }
  visibilityToggle() {
    this.condition = !this.condition;
    if (this.condition) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
  getEmailError() {
    return this.email.hasError('required') ? 'Email is required' :
     this.email.hasError('email') ? 'Email is invalid' : '';
  }
  getPasswordError() {
    return this.password.hasError('required') ? 'Password is required' : '';
  }
  login(form) {
    if (this.form.valid) {
      // send the form object to the api
      console.log(form);
      // do a quick local storage
      localStorage.setItem('email', form.email );
      localStorage.setItem('password', form.password );
        if (form.loginType === 'user' ) {
              // redirect the user to the profile page...playing something
              this.route.navigateByUrl('/user');
        }
    }
  }
}
