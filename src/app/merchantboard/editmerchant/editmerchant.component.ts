import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-editmerchant',
  templateUrl: './editmerchant.component.html',
  styleUrls: ['./editmerchant.component.css']
})
export class EditmerchantComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
    merchant_name : new FormControl('KT PHONES',[Validators.required],),
    about_merchant : new FormControl('We sell phones', [Validators.maxLength(300)])
    email : new FormControl('femoxmed@k.com', [Validators.required , Validators.pattern(this.emailPattern)]),
    address : new FormControl('lagossd,',[Validators.required, Validators.minLength(5),Validators.maxLength(256)]),
    phone_number1 : new FormControl('080999', [Validators.required, Validators.pattern('[0-9]+')]) ,
    phone_number2 : new FormControl('', [ Validators.pattern('[0-9]+')])




  });

  constructor() { }

  get merchant_name(){
    return this.form.get('merchant_name')
  }

  ngOnInit() {
  }

}
