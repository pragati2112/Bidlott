import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { admin } from 'models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
t= new admin();
  constructor(private ds:ServerService) { }

  ngOnInit() {
  }

  login(t)
  {
    return this.ds.verifyadmin(this.t).subscribe((data)=>{

        if(data.status=="ok")
        {
        console.log("hy");
        }
        else{
          console.log("no");
        }
    })
  }



}
