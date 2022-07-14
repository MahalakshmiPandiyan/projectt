import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 

  readonly baseUrl='http://localhost:3000/employees';

  constructor(private http:HttpClient){}
  // postLogin(emp)
  getDetails(userForm:Login){

    console.log("email id: "+userForm.email);
    console.log("name : login "+userForm.phone);
    
    
    return this.http.post(this.baseUrl,userForm)

    // this.name=name;
    // this.passwordValue=passwordValue;
    // console.log("name : "+this.name);
    // console.log("password : "+this.passwordValue);

    // return this.http.post(this.baseUrl ,`/${this.name}` + `/${this.passwordValue}`);
  }

loggedIn(){
  return !!localStorage.getItem('token');
}

getToken(){
  return localStorage.getItem('token');
}
}
