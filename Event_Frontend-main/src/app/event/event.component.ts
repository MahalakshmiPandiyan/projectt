import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  list:History={
    _id: '', event_name: '', event_date: '', event_time: '', food: '', photography: '', decoration: '',
    organiser: 'unassigned'
  }

  name: any;
  date:any;
  time:any;
  food:any;
  photo:any;
  decoration:any;
  organiser:any;
  locale ='en-US'

  _id: string = '';
  role:string=''

  constructor(private router:Router,private route: ActivatedRoute,private history:HistoryService,private userService:UserService) { 
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
      this.list.event_name=this.name;

      this.date=Object.values(res)[2];
      this.date=formatDate(res.event_date,'yyyy-MM-dd',this.locale)
      this.list.event_date=this.date;


      this.time=Object.values(res)[3];
      this.time.toString();
      this.list.event_time=this.time;


      this.food=Object.values(res)[4];
      this.food.toString();
      this.list.food=this.food;


      this.photo=Object.values(res)[5];
      this.photo.toString();
      this.list.photography=this.photo;


      this.decoration=Object.values(res)[6];
      this.name.toString();
      this.list.decoration=this.decoration;

      
      // this.organiser=Object.values(res)[7];
      // this.organiser.toString();
      // this.list.organiser=this.organiser;
    })        
  }

  submit(){
    console.log(this.list)
  }
  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay(eventForm:NgForm) {

    if (!this._id) {
      //Create New User
      this.history.postDetails(eventForm.value).subscribe((data)=>{
        console.log(data);
      })
      console.log("id : " + this.list._id);
      console.log(this.list);
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

}