import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Features } from './features';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  featuresList:Features[] = []
//     id:1,
//     name:'photography',
//     amount:'50000'
// },
// {
//   id:2,
//     name:'food',
//     amount:'70000'
// },
// {
//   id:3,
//     name:'decoration',
//     amount:'40000'
// }]


readonly baseUrl='http://localhost:3000/feature';
constructor(private http:HttpClient){}
// getUsers() {
//   return this.featuresList
// }
// updateUser(user:Features){
//   const userIndex = this.featuresList.findIndex(x => x.id == user.id);
//   this.featuresList[userIndex] = user;
// }
// setUser(user :Features){
//   user.id = this.featuresList.length+1;
//   this.featuresList.push(user);
// }
// getUsersByID(id: number) {
//   return this.featuresList.find(x => x.id == id)
// }

getList(){
  return this.http.get(this.baseUrl);
}
postDetails(featuresForm:Features){
  return this.http.post(this.baseUrl,featuresForm)
}
putEvent(eventForm:History,_id:string){
  return this.http.put(this.baseUrl+`/${_id}`,eventForm)
}

getUserId(_id:string){
  return this.http.get<any>(this.baseUrl+`/${_id}`);
}
}
