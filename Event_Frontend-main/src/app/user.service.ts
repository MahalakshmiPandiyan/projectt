import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role:string=''
  getRole(roleValue:string){
     this.role=roleValue
     return this.role;
  }

  check(){
    return this.role;
  }
  readonly baseUrl="http://localhost:3000/employees";

  constructor(private http:HttpClient){}

  // postLogin(emp)

getAdmin(email:string){
    return this.http.get(this.baseUrl+`/${email}`);

}

  getDetails(userForm:User){
    return this.http.get(this.baseUrl +`/${userForm.email}` + `/${userForm.password}`);
  }
}