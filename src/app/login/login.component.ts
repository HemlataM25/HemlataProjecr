import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  
  responsedata: any;

  constructor(private service: AuthService,private route:Router,private http: HttpClient,) {
    localStorage.clear();
  }
  form = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }
  /* ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if(result!=null){
          this.responsedata=result;
          localStorage.setItem('token',this.responsedata.jwtToken)
          alert("Login Successful");
          this.route.navigate(['display'])
        }

      });
    }
    else{
      alert("Invalid Username or Password");
    }
  } */

  ProceedLogin(): void{

    this.http.get<any>("https://claimproject.azurewebsites.net/api/members")

    .subscribe(res=>{

      const user = res.find((a:any)=>{

        return a.Username === this.form.value.username && a.Password ===this.form.value.password;

      });

      if(user){

        alert("Login Success");

        this.form.reset();

        this.route.navigate(['/display'])

      }

      else{

        alert("Login Unsuccessfull");

      }},err=>{

        alert("Something went Wrong!!!")

    })

  }

  //navigate(): void{

    //this.router.navigate(['/display'])

  //}



}

