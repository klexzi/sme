import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './add-merchant.component.html',
  styleUrls: ['./add-merchant.component.css']
})
export class AddMerchantComponent implements OnInit {
  yep = "password";
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
    merchant_name : new FormControl('',[Validators.required],),
    about_merchant : new FormControl('', [Validators.maxLength(300)]),
    email : new FormControl('', [Validators.required , Validators.pattern(this.emailPattern)]),
    address : new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(256)]),
    phone_number1 : new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]) ,
    phone_number2 : new FormControl( null),

    category: new FormControl(null,[Validators.required]),
     password : new FormControl(null, [Validators.required])


  });
  
control  =  [{name:'fashion', value:'fashion'},
                       {name:'food', value:'food'},
                       {name:'accessories', value:'accessories'} ]
  



  constructor() { }
log(){
  this.yep = "text";
  setTimeout(() => {
    this.yep="password"
  }, 1000);
  
}

submit(f) {
console.log(f.value);
}


  ngOnInit() {
  }

}
