import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  AdminLogin = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
submit():void {

if (this.AdminLogin.value.username==="Admin"&&this.AdminLogin.value.password==="Admin123"){
  alert("Login Successful");
  this.router.navigate(["delete"])
}
else{
  alert("Login  is invalid");
}
}

  
}
