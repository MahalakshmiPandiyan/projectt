import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role:string=''
  name: string='';
  email:string='';
  passwordValue: string='';
  roleValue: string='';
  getRole(roleValue:string){
     this.role=roleValue
     return this.role;
  }

  readonly baseUrl="http://localhost:3000/employees";

  constructor(private http:HttpClient){}

  // postLogin(emp)

getAdmin(email:string){
  this.email=email;
  console.log("getAdmin"+email);
  
    return this.http.get(this.baseUrl+`/${email}`);

}

  getDetails(name:string,passwordValue:string){
    this.name=name;
    this.passwordValue=passwordValue;
    console.log("name : "+this.name);
    console.log("password : "+this.passwordValue);

    return this.http.get(this.baseUrl +`/${name}` + `/${passwordValue}`);
  }
}