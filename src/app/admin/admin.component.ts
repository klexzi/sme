import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  manage_users = true;
  manage_merchants = false;
  constructor() { }

  ngOnInit() {
  }
  activate(component: string) {
    if (component === 'users') {
      this.manage_users = true;
      this.manage_merchants = false;
    } else if (component === 'merchants') {
      this.manage_merchants = true;
      this.manage_users = false;
    }
  }
  
}
