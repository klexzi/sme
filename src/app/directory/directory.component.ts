
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  searchText="";
  directoryPage=true;
  searchPage= false;
  panelOpenState = false;
  result: any[];
  bckdata: any[] = [{ 'name': 'kt phones ltm' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'samsung', 'tag3': 'used ', 'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
  { 'name': 'adele' , 'category': 'accessories' , 'tag1': 'new', 'tag2': 'new', 'tag3': 'new',  'description':'we sell used phones at Ikeja' ,'location':'ikeja'},
];
  form = new FormGroup({
    search: new FormControl(null),

  });

  name="1"
 url="http://ictbrainchallenge.com/wp-content/uploads/2018/05/1-1024x256.jpg"
  constructor(private route : ActivatedRoute, private router: Router) {
       

   }
   submit(f){
     console.log(f.value);
     this.router.navigate(['/listmerchant'],{queryParams : {'merchantname': f.value.search } })
   }

      searchPagefn(){

        this.directoryPage = false;
        this.searchPage =true;
       if (this.searchText == null ){
        this.directoryPage = true;
        this.searchPage = false;
       } 
      }
  
  ngOnInit() {
    console.log(this.searchText);
  }
  // search(search) {
  //   console.log(search);
 
  //   let query = (search as string).toLowerCase();
  //   this.result = this.bckdata.filter(x => {
  //     console.log(x == query);
  //     return x == query;
  //   });
  //   console.log(this.result);


  

}
