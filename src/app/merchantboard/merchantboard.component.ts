import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchantboard',
  templateUrl: './merchantboard.component.html',
  styleUrls: ['./merchantboard.component.css']
})
export class MerchantboardComponent implements OnInit {
profile = true;
editprofile = false;
managePost = false;

  constructor() { }


   showProfile(){ 
     this.profile = true;
     this.editprofile = false;
     this.managePost= false
     
   }

   showEditProfile(){ 
     this.editprofile = true;
     this.profile = false;
     this.managePost= false;
    
   }

   showManagePost() {
     this.managePost = true;
      this.profile = false;
     this.editprofile = false;
   }



  ngOnInit() {
  }

}
