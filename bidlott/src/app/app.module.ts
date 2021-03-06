import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { NewplanComponent } from './newplan/newplan.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { ListofplansComponent } from './listofplans/listofplans.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { MysocityComponent } from './mysocity/mysocity.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    SidebarComponent,
    LoginComponent,
    NewplanComponent,
    ListofplansComponent,
    SignupComponent,
    UserdashboardComponent,
    MysocityComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
