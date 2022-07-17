import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  emailId: string = "";
  passwordValue: string = '';
  roleValue: string = '';
  newRole: string = ''
  ngOnInit(): void {
  }
  dashBoard(userForm: NgForm) {
    this.userService.getDetails(userForm.value).subscribe((res) => {
      console.log("res"+JSON.stringify(res));
      console.log(Object.values(res)[1] );
      
      localStorage.setItem('token',Object.values(res)[0]);
      this.userService.getAdmin(this.emailId).subscribe((res1) => {
        if (Object.values(res)[1] === 'true') {
          if (Object.values(res1)[0] !== 'admin') {
            this.roleValue = 'user'
            console.warn(this.userService.getRole(this.roleValue));
            console.log(this.roleValue);
            this.router.navigate(['/home']);
          }
          else {
            this.roleValue = 'admin'
            console.warn(this.userService.getRole(this.roleValue));
            console.log(this.roleValue);
            this.router.navigate(['/home']);
          }
        }
     
      });
    },
      (err) => {
        this.error = err.message;
        console.log(this.error);
        alert(err.error.message)
      });

  }
  register() {
    this.router.navigate(['/register']);
  }
  back(){
    this.router.navigate(['/first']);

  }
}