import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact-merchant',
  templateUrl: './contact-merchant.component.html',
  styleUrls: ['./contact-merchant.component.css']
})
export class ContactMerchantComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [ Validators.maxLength(300), Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),
    subject: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]),
    email: new FormControl('', [ Validators.email, Validators.required]),
    message: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required])
  });
  name = this.form.get('name');
  subject = this.form.get('subject');
  email = this.form.get('email');
  message = this.form.get('message');
  constructor() {
  }
  getNameError() {
    return this.name.hasError('required') ? 'Pls Enter Your Name' : this.name.hasError('pattern') ? 'Only Letters Allowed' : ''
      ;
  }
  getSubjectError() {
    return this.subject.hasError('required') ? 'Pls Enter The Subject' :
     this.subject.hasError('pattern') ? 'Only Letters Allowed' :
      '';
  }
  getEmailError() {
    return this.email.hasError('required') ? 'Pls Enter Your E-mail Address' :
    this.email.hasError('email') ? 'Pls Enter a valid Email Address' :
    '';
  }
  sendMail(form) {
    if (this.form.valid) {
      console.log(form);
    }

  }
  ngOnInit() {
  }

}