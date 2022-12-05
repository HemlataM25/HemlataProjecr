import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public objservice:CrudService,
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:'',
      password: ''
    });
  }

  submit(): void{
    this.http.post(this.objservice.ApiUrl,this.form.getRawValue(),
    {
      withCredentials:true
    }).subscribe(res => this.router.navigate(['/']));

  }
  navigate(): void{
    this.router.navigate(['/display'])
  }

}
