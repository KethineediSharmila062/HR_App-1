import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { MyactivitiesComponent } from './myactivities/myactivities.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
const appRoutes:
Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'app', component: AppComponent},
  {path: 'leave', component: LeaveComponent},
  {path: 'attendence', component: AttendenceComponent},
  {path: 'myactivities', component: MyactivitiesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signout', component: SignoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LeaveComponent,
    AttendenceComponent,
    MyactivitiesComponent,
    HomeComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
