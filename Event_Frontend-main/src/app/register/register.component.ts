import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,Validators,ReactiveFormsModule ,FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  userForm:FormGroup|any
  message: any;
 
  constructor(private router:Router,private route: ActivatedRoute,private loginSerice:LoginService,private userService:UserService,private formBuilder:FormBuilder) { 

    this.userForm = this.formBuilder.group({
      nameValue:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      password:new FormControl('',[Validators.required,Validators.pattern('^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$')]),
      email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9]{4,13}@[a-z]+\.[a-z\.]{2,6}$')]),
      phone:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')])

    });
  }
  // name:string=''
  // passwordValue:string=''
  // ConfirmpasswordValue:string=''
  roleValue:string='';
  // emailId:string='';
  // phoneNum:string='';
  output:string=''

  ngOnInit(): void {
  }


  register(userForm:FormGroup){
    
    this.loginSerice.getDetails(userForm.value).subscribe((res)=>{
      console.log("res register : "+JSON.stringify(res));
      this.message=Object.values(res)[1];
      alert(this.message)
    });
    this.roleValue='user'
    console.warn(this.userService.getRole(this.roleValue));
    console.log(this.roleValue);
    this.router.navigate(['/home']);
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

  
    //tracking value changes in form
    trackNameChange(){
      this.userForm.get("event_name").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackPasswordChange(){
      this.userForm.get("password").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackEmailChange(){
      this.userForm.get("email").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }
    trackPhoneChange(){
      this.userForm.get("phone").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }
}
