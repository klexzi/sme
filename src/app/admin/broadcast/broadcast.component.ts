import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  form = new FormGroup({
    to: new FormControl(),
    message: new FormControl('', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required])
  });
  message = this.form.get('message');
  constructor() { }

  ngOnInit() {
  }
  getMessageError() {
    return this.message.hasError('pattern') ? 'Only letters and Spaces Allowed' :
    this.message.hasError('required') ? 'Please Enter the Message' : '';
  }
  sendBroadcast(form) {
    // implement the send broadcast message to the API
    console.log(form);
  }

}
