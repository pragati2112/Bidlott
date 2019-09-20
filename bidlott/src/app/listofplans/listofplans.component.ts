import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { newplan } from 'models/newplan';

@Component({
  selector: 'app-listofplans',
  templateUrl: './listofplans.component.html',
  styleUrls: ['./listofplans.component.css']
})
export class ListofplansComponent implements OnInit {
p;
masterPlanId;

f=new newplan();

  constructor(private ds:ServerService) { }

  ngOnInit() {


this.ds.getplans().subscribe((data)=>{
  this.p=data.documents;

})

  }

  delete(f)
  {
    
    this.ds.deleteplan(f).subscribe((data)=>{
      
    this.ds.getplans().subscribe((data)=>
    { 
      
      this.p=data.documents;
      // alert(JSON.stringify(this.del));
    
    })
  })
}

setMasterPlanForSocity(f)
{
  this.masterPlanId=f;
}

createsocity()
{
  alert("go");
  this.f.masterPlanId=this.masterPlanId;
  alert(JSON.stringify(this.f));
this.ds.mysocity(this.f).subscribe((data)=>
{
  
})

}

}
