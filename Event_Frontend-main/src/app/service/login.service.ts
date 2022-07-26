import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  readonly baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }
  // postLogin(emp)
  getDetails(userForm: Login) {
    return this.http.post(this.baseUrl, userForm)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
