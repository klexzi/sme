import { Component, OnInit, OnDestroy } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit, OnDestroy {
    productId: any;
    params: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // get the product id on init and pull out contents from the server
   this.params = this.route.paramMap.subscribe(data => {
       console.log (data.get('id'));
    });

    // console.log(this.route.snapshot.paramMap.get('id') );
  }

  ngOnDestroy(): void {
    this.params.unsubscribe();
  }

}
