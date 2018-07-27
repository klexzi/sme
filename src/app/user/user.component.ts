import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';


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
        constructor() { }
    static  viewChanger = false;
      user = {
          name: 'Cristiano Ronaldo',
          email: 'ronaldo@gmail.com',
          dob: '22/03/2016',
          address: '39,ladipo,kasusu street,ikeja, lagos.',
          phoneNumber: '08088888',
          password:  'ronaldo1'
      }
 

    changePasswordForm = new FormGroup({
        pass1: new FormControl(this.user.password, [Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$'),
       Validators.maxLength(200), Validators.required]),
       pass2: new FormControl()
    });


  //
  ngOnInit() {
     //takes the user profile from the server thru services
    //sets some fields in the class
    // and display it on the page
    UserComponent.viewChanger = false;
  }

  componentToView(profile) {
      UserComponent.viewChanger = profile;
  }
 // this property is used to change view state
  get changeComponent(): boolean {
    return UserComponent.viewChanger;
  }
}

