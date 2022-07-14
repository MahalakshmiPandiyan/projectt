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
  eventForm:FormGroup|any;

 
  historyList:History[]=[]
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
  message: any;
  message2: any;
  error:any=''

  constructor(private router:Router,private route: ActivatedRoute,private history:HistoryService,private userService:UserService,private formBuilder:FormBuilder) { 
    this.role=this.userService.role;

    this.eventForm=this.formBuilder.group({
      event_name:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]{1,15}$')]),
      event_date:new FormControl('',[Validators.required]),
      event_time:new FormControl('',Validators.required),
      food:new FormControl('',Validators.required),
      decoration:new FormControl('',Validators.required),
      photography:new FormControl('',Validators.required),
      organiser:new FormControl('')
    })
   
  }
  
  ngOnInit(): void {
    this.role=this.userService.role;
    
    this.route.params.subscribe(params => {
      this._id=params['_id']
      
      console.log("route _id : "+this._id);        
    });
    if(this._id.length==24)
    {
      this.onEdit(this._id);
    }
    
   this.dateValidation();
     
  }
  
  onEdit(_id:any) {
    console.log("edit"+_id);
    this.history.getList();
    this.history.getUserId(this._id).subscribe((res)=>{
      console.log(res);
      this.editFeatures(res)
    })        
  }

  editFeatures(historyList:History){

    this.eventForm.patchValue({
      event_name:historyList.event_name,
      event_date:formatDate(historyList.event_date,'yyyy-MM-dd',this.locale),
      event_time:historyList.event_time,
      food:historyList.food,
      decoration:historyList.decoration,
      photography:historyList.photography,   
      organiser:historyList.organiser,      

    })
   }

  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay(eventForm:FormGroup) {

    if (!this._id) {
      //Create New User
      this.history.postDetails(eventForm.value).subscribe((data)=>{
        console.log(data);
        this.message=Object.values(data)[1];
         alert(this.message)
      },
      (err) => {
        this.error = err.message;
        alert(err.error.message)

      });
        } 
    else {
      //Update User info
      this.history.putEvent(eventForm.value,this._id).subscribe((res)=>{
        console.log("update event info"+JSON.stringify(res));
        this.message2=Object.values(res)[1];
        alert(this.message2)
      },
      (err) => {
        this.error = err.message;
        alert(err.error.message)

      });
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