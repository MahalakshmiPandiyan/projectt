import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,private loginSerice:LoginService,private userService:UserService) { }
  name:string=''
  passwordValue:string=''
  ConfirmpasswordValue:string=''
  roleValue:string='';
  emailId:string='';
  phoneNum:string='';
  output:string=''

  ngOnInit(): void {
  }

  conform(){
    if(this.passwordValue ===this.ConfirmpasswordValue){
      console.log("true");
      console.log(this.passwordValue);
      console.log(this.ConfirmpasswordValue);
      this.output='true';
      return true;
    }
    else{
      console.log("false");
      console.log(this.passwordValue);
      console.log(this.ConfirmpasswordValue);
      this.output='false'
      return false;
    }

  }


  register(userForm:NgForm){
    
    this.loginSerice.getDetails(userForm.value).subscribe((res)=>{
      console.log("res register : "+res.toString());
    });
    
    this.roleValue='user'
    console.warn(this.userService.getRole(this.roleValue));
    console.log(this.roleValue);
    this.router.navigate(['/home']);
  }
  login(){
    this.router.navigate(['/login']);
  }
}
