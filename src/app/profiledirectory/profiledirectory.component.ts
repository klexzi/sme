import { ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profiledirectory',
  templateUrl: './profiledirectory.component.html',
  styleUrls: ['./profiledirectory.component.css']
})



export class ProfiledirectoryComponent implements OnInit {
  view = "1" ;
  starList: boolean[] = [true,true,true,true,true]; 
  constructor(private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(
      params=> {
      let merchantname = params.get('name');
      console.log(merchantname);
    } )  
  }

}
