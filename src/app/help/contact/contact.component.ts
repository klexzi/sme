import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
     this.subject.hasError('pattern') ? 'Only Letters and Spaces Allowed' :
      '';
  }
  getEmailError() {
    return this.email.hasError('required') ? 'Pls Enter Your E-mail Address' :
    this.email.hasError('email') ? 'Pls Enter a valid Email Address' :
    '';
  }
  getMessageError() {
    return this.message.hasError('pattern') ? 'Only letters and Spaces Allowed' :
    this.message.hasError('required') ? 'Please Enter the Message' : '';
  }
  sendMail(form) {
    if (this.form.valid) {
      // send the form object to the api endpoint to perform query
      console.log(form);
    }

  }
  ngOnInit() {
  }

}
