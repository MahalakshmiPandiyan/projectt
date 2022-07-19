import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private router: Router, private userService: UserService) { }

  emailId: string = "";
  passwordValue: string = '';
  roleValue: string = '';
  newRole: string = ''
  ngOnInit(): void {
  }
  dashBoard(userForm: NgForm) {
    this.userService.getDetails(userForm.value).subscribe((res:any) => {
      localStorage.setItem('token', res['token']);
      this.userService.getAdmin(this.emailId).subscribe((res1:any) => {

        if (res['message'] === 'true') {
          if (res1['role'] !== 'admin') {
            this.roleValue='user'
            this.userService.getRole(this.roleValue)
            this.router.navigate(['/home']);
            console.log("role"+this.roleValue);

          }
          else {
            this.roleValue = 'admin'
            this.userService.getRole(this.roleValue)
            this.router.navigate(['/home']);
            console.log("role"+this.roleValue);
          }
        }
      })
    }, (err) => {
      this.error = err.message;
      alert(err.error.message)

    });

  }
  register() {
    this.router.navigate(['/register']);
  }
  back() {
    this.router.navigate(['/first']);

  }
}