import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators ,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Features } from '../features';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

   formvalid:FormGroup;
    
  constructor(private router:Router,private route: ActivatedRoute,private features:FeaturesService,private formBuilder:FormBuilder) {

    this.formvalid=this.formBuilder.group({
      name:['',[Validators.required]],
      amount:['',[Validators.required]]
    })
   }
  _id: string = '';
  name: any;
  amount:any;

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
      this.name=Object.values(res)[1];
      this.amount=Object.values(res)[2];
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
}
