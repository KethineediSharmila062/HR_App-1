import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { MyactivitiesComponent } from './myactivities/myactivities.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
const routes: Routes = [

  {path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  {path: 'app', component: AppComponent},
  {path: 'leave', component: LeaveComponent},
  {path: 'attendence', component: AttendenceComponent},
  {path: 'myactivities', component: MyactivitiesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signout', component: SignoutComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
