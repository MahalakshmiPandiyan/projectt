import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Features } from './features';
@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  featuresList: Features[] = []


  readonly baseUrl = 'http://localhost:3000/feature';
  constructor(private http: HttpClient) { }


  getList() {
    return this.http.get(this.baseUrl);
  }
  postDetails(featuresForm: Features) {
    return this.http.post(this.baseUrl, featuresForm)
  }
  putEvent(eventForm: History, _id: string) {
    return this.http.put(this.baseUrl + `/${_id}`, eventForm)
  }

  getUserId(_id: string) {
    return this.http.get<any>(this.baseUrl + `/${_id}`);
  }
  deleteUserId(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
}
