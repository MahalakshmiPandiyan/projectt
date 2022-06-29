import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,private userService:UserService) { }

  name:string="maha";
  passwordValue:string='';
  roleValue:string='';
  ngOnInit(): void {
  }
  dashBoard(){
    this.userService.getDetails(this.name,this.passwordValue).subscribe((res)=>{
      console.log(this.name);
      
      console.log("res : "+res);

      if(res==true){
        if(this.name!='lakshmi' && this.passwordValue!='Mahalakshmi1')
        {
          this.roleValue='user'
          console.warn(this.userService.getRole(this.roleValue));
          console.log(this.roleValue);
          this.router.navigate(['/home']);
        }
        else
        {
          this.roleValue='admin'
          console.warn(this.userService.getRole(this.roleValue));
          console.log(this.roleValue);
          this.router.navigate(['/home']);
        }
      }
      else{
        alert("Invalid Username or Password!!!!!!!")
      }
    });
 

    // else{
    //   this.router.navigate(['/dashboard']);

    // }
  }
  register(){
      this.router.navigate(['/register']);
  }
}