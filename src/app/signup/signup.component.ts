import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  condition = false;
  type = 'password';
  form = new FormGroup({
    name: new FormControl(null, [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(300), Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.maxLength(300), Validators.required]),
    password: new FormControl(null, [Validators.minLength(8),
     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$'),
    Validators.maxLength(200), Validators.required])
  });
  name = this.form.get('name');
  email = this.form.get('email');
  password = this.form.get('password');
  constructor() { }

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
  getNameError() {
    return this.name.hasError('pattern') ? 'Only letters and whitespace allowed' :
    this.name.hasError('maxLength') ? 'You have exceeded the number of characters' :
    this.name.hasError('required') ? 'Pls input your name' : '';
  }
  getEmailError() {
    return this.email.hasError('email') ? 'Pls put in a valid Email address' :
    this.email.hasError('maxLength') ? 'You have exceeeded the number of characters' :
    this.email.hasError('required') ? 'Pls input in your email' :
    '';
  }
  getPasswordError() {
    return this.password.hasError('pattern') ?
    'Weak' :
    this.password.hasError('maxLength') ? 'You have exceeded the number of characters' :
    this.password.hasError('minLength') ? 'Password too short' :
    this.password.hasError('required') ? 'Pls put in your password' : '';
  }
  submitForm(form) {
    // submit the form object to the api endpoint
    console.log(form);
  }
}
