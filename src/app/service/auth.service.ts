import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);
  apiurl='https://claimproject.azurewebsites.net/api/members';
  constructor(private http:HttpClient) {

   }
   ProceedLogin(UserCred:any){
     return this.http.post(this.apiurl,UserCred);
   }
   IsLoggedIn(){
     return localStorage.getItem('token')!=null;
   }
   GetToken(){
    return !!localStorage.getItem('token');
   }
   HaveAccess(){
     var loggintoken=localStorage.getItem('token')||'';
     var _extractedtoken=loggintoken.split('.')[1];
     var _atobdata=atob(_extractedtoken);
     var _finaldata=JSON.parse(_atobdata);
     console.log(_finaldata);
     if(_finaldata.role=='admin'){
       return true
     }else{
       alert('you not having access');
       return false
     }

   }
   async logout() {
    return this.http.get('https://claimproject.azurewebsites.net/api/Logins').toPromise().then(
      () => {
        // clear any current data
        this.clearData();

        // tell the rest of the application about the logout
        this.isLoggedIn.next(false);
        return true;
      },
      (err) => {
        return false;
      }
    );
  }
  clearData() {
    throw new Error('Method not implemented.');
  }
}