import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, NgForm, Validators ,PatternValidator, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Features } from '../features';
import { FeaturesService } from '../features.service';
@Component({
  selector: 'app-addtional-features',
  templateUrl: './addtional-features.component.html',
  styleUrls: ['./addtional-features.component.scss']
})


  export class AddtionalFeaturesComponent implements OnInit {

    featuresForm:FormGroup|any;
   
 constructor(private router:Router,private route: ActivatedRoute,private features:FeaturesService,private formBuilder:FormBuilder) {

   this.featuresForm=this.formBuilder.group({
     name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
     amount:new FormControl('',[Validators.required])
   })
  }
 _id: string = '';
 nameValue: any;
 amountValue:any;

 ngOnInit(): void {
   this.route.params.subscribe(params => {
     this._id=params['_id']
     
     console.log("route _id : "+this._id);        
   });
   this.onEdit(this._id);
 }
 onEdit(_id:any) {
   console.log("edit"+_id);
   this.features.getList();
   this.features.getUserId(this._id).subscribe((res)=>{
     console.log(res);
     this.featuresForm.name=Object.values(res)[1];
     this.featuresForm.amount=Object.values(res)[2];
   })        

 }
 backButton(){
   this.router.navigate(['/home'])
 }

 tableDisplay(featuresForm:FormGroup) {
 // {

 console.log("form:"+featuresForm);
 
   if (!this._id) {
     //Create New User
     this.features.postDetails(featuresForm.value).subscribe((data)=>{
       console.log(data);
     })
 
     alert("Details are added Successfully")
   } 
   else {
     //Update User info
     this.features.putEvent(featuresForm.value,this._id).subscribe((res)=>{
       console.log("update event info");
     })
     alert("Details are Updated Successfully")
   }
   this.router.navigate(['/features'])
 }
 featuresValue(){
   console.warn(this.featuresForm.value);
 }
 get name(){
   return this.featuresForm.get('name')
 }

 get amount(){
   return this.featuresForm.get('amount')
 }
   //tracking value changes in form
   trackNameChange(){
     this.featuresForm.get("name").valueChanges.subscribe((data: any)=>{
       console.log(data)
     })
   }
   trackAmountChange(){
     this.featuresForm.get("amount").valueChanges.subscribe((data: any)=>{
       console.log(data)
     })
   }
}

