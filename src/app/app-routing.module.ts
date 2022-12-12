import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './login/display/display.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { PpDisplayComponent } from './pp-display/pp-display.component';
import { PpRegComponent } from './pp-register/pp-reg.component';
import { PpShowComponent } from './pp-show/pp-show.component';
import { AuthGuard } from './shared/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'adminlogin',component: AdminloginComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'display',component:DisplayComponent},
  {path:'delete',component:PpDisplayComponent},
  {path:'register',component:PpRegComponent},
  {path:'update',component: PpShowComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  
  {path:'logout',component: LogoutComponent},

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
