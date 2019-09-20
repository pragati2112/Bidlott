import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { admin } from 'models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
t= new admin();
d;
  constructor(private ds:ServerService ,private route:Router) { }

  ngOnInit() {
  }

  login(t)
  {
     this.ds.verifyadmin(this.t).subscribe((data)=>{
       this.d=data;
      //  alert(JSON.stringify(data));
       console.log(this.d);
        if(this.d.status=="ok")
        {
          this.route.navigate(['/dashboard']);
        console.log("hy");
        }
        else{
          console.log("no");  
        }
    })
  }



}
