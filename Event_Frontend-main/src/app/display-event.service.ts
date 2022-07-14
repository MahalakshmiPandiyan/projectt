import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { display_event } from './display_event';

@Injectable({
  providedIn: 'root'
})
export class DisplayEventService {


  readonly baseUrl='http://localhost:3000/displayEvent';
  constructor(private http:HttpClient){}

    getList(){
    return this.http.get(this.baseUrl);
  }
  postDetails(add_details:display_event){
    console.log("add_details"+add_details.feature+add_details.details);
    
    return this.http.post(this.baseUrl,add_details)
  }
  putEvent(add_details:display_event,_id:string){
    return this.http.put(this.baseUrl+`/${_id}`,add_details)
  }
  
  getUserId(_id:string){
    console.log("hellooooooooooooooooooooo");
    
    return this.http.get<any>(this.baseUrl+`/${_id}`);
  }
  deleteUserId(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}

