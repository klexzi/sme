import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profiledirectory',
  templateUrl: './profiledirectory.component.html',
  styleUrls: ['./profiledirectory.component.css']
})



export class ProfiledirectoryComponent implements OnInit {
  view = "1" 
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params=> {
      let merchantname = params.get('name');
      console.log(merchantname);
    } )  
  }

}
