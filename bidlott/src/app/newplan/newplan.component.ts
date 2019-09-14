import { Component, OnInit } from '@angular/core';
import { newplan } from 'models/newplan';
import { ServerService } from '../server.service';
import{ Router } from '@angular/router'

@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {
f=new newplan();
  constructor(private ds:ServerService, private router:Router) { }

  ngOnInit() {
  }

create()
{ alert("create");
  return this.ds.createplan(this.f).subscribe((d)=>{
    alert(JSON.stringify(d));

    this.router.navigate(['/dashboard/listofplans']);


  })
}




}
