import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-msidenav',
  templateUrl: './msidenav.component.html',
  styleUrls: ['./msidenav.component.css']
})
export class MsidenavComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }

  
  constructor() { }

  ngOnInit() {
  }

}
