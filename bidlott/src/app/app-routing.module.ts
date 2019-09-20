import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewplanComponent} from './newplan/newplan.component';
import { ListofplansComponent } from './listofplans/listofplans.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MysocityComponent } from './mysocity/mysocity.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent,children:[{path:"mysocity",component:MysocityComponent},
  {path:"newplan",component:NewplanComponent},{path:"listofplans",component:ListofplansComponent}]},
  {path:"signup",component:SignupComponent},
  {path:"userdashboard",component:UserdashboardComponent,children:[{path:"listofplans",component:ListofplansComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
