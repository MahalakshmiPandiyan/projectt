import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,Validators,ReactiveFormsModule ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  userForm:FormGroup|any
  message: string='';
  error: string='';
 
  constructor(private router:Router,private route: ActivatedRoute,private loginSerice:LoginService,private userService:UserService,private formBuilder:FormBuilder) { 

    this.userForm = this.formBuilder.group({
      nameValue:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9]{4,13}@[a-z]+\.[a-z\.]{2,6}$')]),
      phone:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')])

    });
  }
  roleValue:string='';
  output:string=''

  ngOnInit(): void {
  }


  register(userForm:FormGroup){
    
    this.loginSerice.getDetails(userForm.value).subscribe((res)=>{      
      this.message=Object.values(res)[0];
      alert(this.message)
    },
    (err) => {
      this.error = err.message;
      alert(err.error.message)

    });
    this.roleValue='user'
    this.router.navigate(['/login']);
  }
  login(){
    this.router.navigate(['/login']);
  }
  get nameValue(){
    return this.userForm.get('nameValue')
  }
  get password(){
    return this.userForm.get('password')
  }
  get email(){
    return this.userForm.get('email')
  }
  get phone(){
    return this.userForm.get('phone')
  }


    back(){
      this.router.navigate(['/first']);  
    }
}
