import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  featuresList:Features ={
   _id:'', name:'',amount:''}
    
  constructor(private router:Router,private route: ActivatedRoute,private features:FeaturesService) { }
  _id: string = '';
  name: any;
  amount:any;

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   if (this.id != null) {
    //     this.featuresList.id = (params['id']);
    //     const data = this.features.getUsersByID(this.id);
    //     if (data) {
    //       this.featuresList = (data);
    //     }
    //   }
    // });
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

      this.name=Object.values(res)[2];
      this.featuresList.name=this.name;


      this.amount=Object.values(res)[1];
      this.featuresList.amount=this.amount;
    })        

  }
  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay(featuresForm:NgForm) {
  // {
    if (!this._id) {
      //Create New User
      this.features.postDetails(featuresForm.value).subscribe((data)=>{
        console.log(data);
      })
      console.log("id : " + this.featuresList._id);
      console.log(this.featuresList);
      alert("Details are added Successfully")
    } 
    else {
      //Update User info
      // this.formData(eventForm);
      this.features.putEvent(featuresForm.value,this._id).subscribe((res)=>{
        console.log("update event info");
      })
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/features'])
  }
    // if (this.featuresList.id === 0) {
      //Create New User
      // console.log("id : " + this.featuresList.id);
      // this.features.setUser(this.featuresList);
    //   alert("Details are added Successfully")
    // }
    // else {
      //Update User info
      // this.features.updateUser(this.featuresList);
      // alert("Details are Updated Successfully")
    // }
    // this.router.navigate(['/features'])
  // }
}
