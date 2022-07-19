import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  list: History[] = []

readonly baseUrl='http://localhost:3000/event';
constructor(private http:HttpClient){}

getList(){
  
  return this.http.get(this.baseUrl);
}

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
