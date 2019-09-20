import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

import { admin } from 'models/admin';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
s=new admin;
role;

  constructor(private ds:ServerService,private router:Router) { }

  ngOnInit() {
  }


signup(s)
{
  this.s.role= "user";
  return this.ds.createplan(this.s).subscribe((d)=>{
    alert(JSON.stringify(d));

    this.router.navigate(['/userdashboard/listofplans']);


})
}
}
