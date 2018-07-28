import { ContactMerchantComponent } from './../merchantstore/contact-merchant/contact-merchant.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledirectory',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  reviewbox = false;
  constructor() { }

  review() {
    this.reviewbox = !(this.reviewbox);
  }

  ngOnInit() {
  }

}
