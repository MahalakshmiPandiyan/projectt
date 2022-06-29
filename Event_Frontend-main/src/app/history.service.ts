import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  list: History[] = []
  // _id:string=''
  // event_name:string=''
  // event_date:string=''
  // event_time:string=''
  // food:string=''
  // photography:string=''
  // decoration:string=''
  // organiser:string=''
    // {
//     id:1,
//     event_name:'birthday',
//     event_date:"09/09/2022",
//     event_time:"6pm-10pm",
//     food:"yes",
//     photography:"yes",
//     decoration:"yes",
//     organizer:''
    
// },
// {
//   id:2,
//   event_name:'farewell',
//   event_date:"20/11/2022",
//   event_time:"6:30pm-11pm",
//   food:"yes",
//   photography:"yes",
//   decoration:"yes",
//   organizer:'lakshmi'

// },
// {
//   id:3,
//   event_name:'birthday',
//   event_date:"25/09/2022",
//   event_time:"5pm-9pm",
//   food:"yes",
//   photography:"yes",
//   decoration:"no",
//   organizer:''

// }]
readonly baseUrl='http://localhost:3000/event';
constructor(private http:HttpClient){}
// getUsers() {
//   return this.list
// }

getList(){
  
  return this.http.get(this.baseUrl);
}
// setUser(user :History){
//   user.id = this.list.length+1;
//   this.list.push(user);

// }
// getUsersByID(id: number) {
//   return this.list.find(x => x.id == id)
// }
// updateUser(user:History){
//   const userIndex = this.list.findIndex(x => x.id == user.id);
//   this.list[userIndex] = user;
// }
postDetails(eventForm:History){
  return this.http.post(this.baseUrl,eventForm)
}
putEvent(eventForm:History,_id:string){
  return this.http.put(this.baseUrl+`/${_id}`,eventForm)
}

getUserId(_id:string){
  return this.http.get<any>(this.baseUrl+`/${_id}`);
}
}
