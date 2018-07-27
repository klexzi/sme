import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  // userdata coming from a service thru an api
  user = {
    name: 'Cristiano Ronaldo',
    email: 'ronaldo@gmail.com',
    dob: '22/03/2016',
    address: '39,ladipo,kasusu street,ikeja, lagos.',
    phoneNumber: '08088888',
    altPhoneNumber: '',
    password:  'ronaldo1'
  };

  constructor(public snackBar: MatSnackBar) { }
 // create a for validation for the form
 profileForm = new FormGroup({
  name: new FormControl(this.user.name, [Validators.pattern('^[a-zA-Z ]*$'), Validators.maxLength(300), Validators.required]),
  email: new FormControl({value: this.user.email , disabled: true}),
  dob: new FormControl(this.user.dob),
  address: new FormControl(this.user.address, [Validators.required]),
  phonenumber1: new FormControl (this.user.phoneNumber, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(11)]),
  phonenumber2: new FormControl(null, [Validators.maxLength(11), Validators.pattern('^[0-9]+$')]),
  


});

 // get the controls from the form
 name = this.profileForm.get('name');
 email = this.profileForm.get('email');
//  dateOfBirth = this.profileForm.get('dob');
 address = this.profileForm.get('address');
 phoneNumber = this.profileForm.get('phonenumber1');
 altPhoneNumber = this.profileForm.get('phonenumber2');


 

// return validation errors to the user
getNameError() {
return this.name.hasError('pattern') ? 'Only letters and whitespace allowed' :
this.name.hasError('maxLength') ? 'You have exceeded the number of characters' :
this.name.hasError('required') ? 'Please input your name' : '';
}

getPhoneNumberError() {
  return this.phoneNumber.hasError('required') ? 'Please input your phone number' :
  this.phoneNumber.hasError('pattern') || this.altPhoneNumber.hasError('pattern') ? 'Only numbers are allowed' : '';
}

getAddressError() {
  return this.address.hasError('required') ? 'Address cannot be blank' : '';
}

// getPasswordError() {
// return this.password.hasError('pattern') ?
// 'Weak' :
// this.password.hasError('maxLength') ? 'You have exceeded the number of characters' :
// this.password.hasError('minLength') ? 'Password too short' :
// this.password.hasError('required') ? 'Pls put in your password' : '';
// }



updateUser(userProfile) {
  //this method takes all input value from the form 
  //validates the form
  // if form is valid
     // use the updateUserService to send the data to the server
  //else 
    //returns false

    console.log(userProfile.value);

}

// SnackBar
openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 2000,
  });
   setTimeout(() => {
    UserComponent.viewChanger = false;
   }, 3000);
}



  ngOnInit() {
  }

}
