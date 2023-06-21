import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListecandidatureService {


  constructor(private http:HttpClient ) { }
  create(candidature:any){
    return this.http.post(`${environment.urlback}/candidature`,candidature)
  }
  getall(){
    return this.http.get(`${environment.urlback}/candidature`)
  }
  getbyid(id:any){
    return this.http.get(`${environment.urlback}/candidature/${id}`)
  }
  delete(id:any){
    return this.http.delete(`${environment.urlback}/candidature/${id}`)
  }
  update(id:any,candidature:any){
    return this.http.put(`${environment.urlback}/candidature/${id}`,candidature)
  }
 
}
