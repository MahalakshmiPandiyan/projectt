import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,NgForm ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../history';
import { HistoryService } from '../history.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers:[HistoryService]
})
export class EventComponent implements OnInit {
  minDate:any=''
  today = new Date().toLocaleDateString()
  // list:History={
  //   _id: '', event_name: '', event_date: '', event_time: '', food: '', photography: '', decoration: '',
  //   organiser: 'unassigned'
  // }

  eventForm:FormGroup|any;

 
  name: any;
  date:any;
  time:any;
  foodValue:any;
  photo:any;
  decorationValue:any;
  organiserValue:any;
  locale ='en-US'

  _id: string = '';
  role:string=''

  constructor(private router:Router,private route: ActivatedRoute,private history:HistoryService,private userService:UserService,private formBuilder:FormBuilder) { 

    this.eventForm=this.formBuilder.group({
      event_name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      event_date:new FormControl('',[Validators.required]),
      event_time:new FormControl('',Validators.required),
      food:new FormControl('',Validators.required),
      decoration:new FormControl('',Validators.required),
      photography:new FormControl('',Validators.required),
      organiser:new FormControl('',Validators.required)
    })
   
  }

  
  ngOnInit(): void {
    this.role=this.userService.role;
    
    this.route.params.subscribe(params => {
      this._id=params['_id']
      
      console.log("route _id : "+this._id);        
    });
    this.onEdit(this._id);
    
   this.dateValidation();
     
  }
  
  onEdit(_id:any) {
    console.log("edit"+_id);
    this.history.getList();
    this.history.getUserId(this._id).subscribe((res)=>{
      console.log(res);


      this.name=Object.values(res)[1];
      this.date=Object.values(res)[2];
      this.date=formatDate(res.event_date,'yyyy-MM-dd',this.locale)
      this.time=Object.values(res)[3];
      this.foodValue=Object.values(res)[4];
      this.photo=Object.values(res)[5];
      this.decorationValue=Object.values(res)[6];
      this.organiserValue=Object.values(res)[7];


    })        
  }

  submit(){
    // console.log(this.list)
  }
  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay(eventForm:FormGroup) {

    if (!this._id) {
      //Create New User
      this.history.postDetails(eventForm.value).subscribe((data)=>{
        console.log(data);
      })
      // console.log("id : " + this.list._id);
      // console.log(this.list);
      alert("Details are added Successfully")
    } 
    else {
      //Update User info
      // this.formData(eventForm);
      this.history.putEvent(eventForm.value,this._id).subscribe((res)=>{
        console.log("update event info");
      })
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/home'])
  }

  dateValidation(){
    var date:any= new Date();
     
    var toDate:any=date.getDate();
    if(toDate < 10){
     toDate ="0"+ toDate;
    }
    var month=date.getMonth()+1;
    if(month < 10){
     month = '0'+month;
    }
    var year =date.getFullYear();
    this.minDate= year+"-"+month+"-"+toDate;
    return true;
  }

  get event_name(){
    return this.eventForm.get('event_name')
  }
  get event_date(){
    return this.eventForm.get('event_date')
  }
  get event_time(){
    return this.eventForm.get('event_time')
  }
  get food(){
    return this.eventForm.get('food')
  }
  get photography(){
    return this.eventForm.get('photography')
  }
  get decoration(){
    return this.eventForm.get('decoration')
  }
  get organiser(){
    return this.eventForm.get('organiser')
  }
  
    //tracking value changes in form
    trackNameChange(){
      this.eventForm.get("event_name").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackDateChange(){
      this.eventForm.get("event_date").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackTimeChange(){
      this.eventForm.get("event_time").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackFoodChange(){
      this.eventForm.get("food").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }
    trackPhotoChange(){
      this.eventForm.get("photography").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }

    trackOranginserChange(){
      this.eventForm.get("organiser").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }
    trackDecorationChange(){
      this.eventForm.get("decoration").valueChanges.subscribe((data: any)=>{
        console.log(data)
      })
    }



}