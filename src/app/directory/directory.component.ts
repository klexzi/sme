
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  name="1"
 url="http://ictbrainchallenge.com/wp-content/uploads/2018/05/1-1024x256.jpg"
  constructor(private route : ActivatedRoute) {
       

   }
  
  ngOnInit() {

    
    this.route.paramMap.subscribe(
      params=> {
      let merchantname = params.get('name');
      console.log(merchantname);
    } )  
  }

}
