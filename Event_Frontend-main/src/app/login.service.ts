import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  name:string=''
  passwordValue:string=''
  emailId:string=''
  phoneNum:string=''
  confirmpasswordValue:string=''

  readonly baseUrl='http://localhost:3000/employees';

  constructor(private http:HttpClient){}
  // postLogin(emp)
  getDetails(userForm:Login){

    console.log("email id: "+userForm.emailId);
    console.log("name : login "+userForm.phoneNum);
    
    
    return this.http.post(this.baseUrl,userForm)

    // this.name=name;
    // this.passwordValue=passwordValue;
    // console.log("name : "+this.name);
    // console.log("password : "+this.passwordValue);

    // return this.http.post(this.baseUrl ,`/${this.name}` + `/${this.passwordValue}`);
  }}
