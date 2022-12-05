import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './login/display/display.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PpDisplayComponent } from './pp-display/pp-display.component';
import { PpRegComponent } from './pp-register/pp-reg.component';
import { PpShowComponent } from './pp-show/pp-show.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'display',component:DisplayComponent},
  {path:'delete',component:PpDisplayComponent},
  {path:'register',component:PpRegComponent},
  {path:'update',component: PpShowComponent},
  {path:'about',component: AboutComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
