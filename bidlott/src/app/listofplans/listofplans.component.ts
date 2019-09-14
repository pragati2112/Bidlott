import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-listofplans',
  templateUrl: './listofplans.component.html',
  styleUrls: ['./listofplans.component.css']
})
export class ListofplansComponent implements OnInit {
p;

  constructor(private ds:ServerService) { }

  ngOnInit() {


this.ds.getplans().subscribe((data)=>{
  this.p=data.documents;

})

  }

}
