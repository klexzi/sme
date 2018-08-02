import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


// user interface
// interface User {
//   name: string;
//   email: string;

// }


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
        constructor(public snackBar: MatSnackBar) { }
       static  viewChanger = 'viewProfile'; 
      condition = false ; // state of the form field
      type = 'password';  //   ````````````````````

      user = {
          name: 'Cristiano Ronaldo',
          email: 'ronaldo@gmail.com',
          dob: '22/03/2016',
          address: '39,ladipo,kasusu street,ikeja, lagos.',
          phoneNumber: '08088888',
          password:  'ronaldo1'
      };

    changePasswordForm = new FormGroup({
        pass1: new FormControl(this.user.password, [Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$'),
       Validators.maxLength(200), Validators.required]),
        pass2: new FormControl(null, [Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$'),
         Validators.maxLength(200), Validators.required])
    });

    // get the form variables
    pass1 = this.changePasswordForm.get('pass1');
    pass2 = this.changePasswordForm.get('pass2');

        getPassword1Error() {
    return this.pass1.hasError('pattern') ?
    'Weak' :
    this.pass1.hasError('maxLength') ? 'You have exceeded the number of characters' :
    this.pass1.hasError('minLength') ? 'Password too short' :
    this.pass1.hasError('required') ? 'Pls put in your password' : '';
    }
      getPassword2Error() {
        if (this.pass1.value !== this.pass2.value) {

          return 'password mismatch!';
        }
        return this.pass2.hasError('pattern') ?
        'Weak' :
        this.pass2.hasError('maxLength') ? 'You have exceeded the number of characters' :
        this.pass2.hasError('minLength') ? 'Password too short' :
        this.pass2.hasError('required') ? 'Pls put in your password' : '';
      }

      // swap form field visibility
      visibilityToggle() {
        this.condition = !this.condition;
        if (this.condition) {
          this.type = 'text';

        } else {
          this.type = 'password';
        }
      }

      

      updatePassword(changePasswordForm) {
         // only perfom this action if this.pass1.value === this.pass2.value
         if (this.pass1.value === this.pass2.value) {
            // converts the value to a json
          // sends the json to an api call to update the password
          console.log(changePasswordForm.value);
          this.openSnackBar('password', 'updated');
          UserComponent.viewChanger = 'viewProfile';
         }
      }
         // SnackBar
    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

  ngOnInit() {
     //takes the user profile from the server thru services
    //sets some fields in the class
    // and display it on the page
    UserComponent.viewChanger = 'viewProfile';
  }

  componentToView(profile) {
      UserComponent.viewChanger = profile;
  }
 // this property is used to change view state
  get changeComponent(): string {
    return UserComponent.viewChanger;
  }
}

