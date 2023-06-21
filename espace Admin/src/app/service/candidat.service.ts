

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {


  constructor(private http:HttpClient ) { }
  create(candidat:any){
    return this.http.post(`${environment.urlback}/candidat`,candidat)
  }
  getall(){
    return this.http.get(`${environment.urlback}/candidat`)
  }
  getbyid(id:any){
    return this.http.get(`${environment.urlback}/candidat/${id}`)
  }
  delete(id:any){
    return this.http.delete(`${environment.urlback}/candidat/${id}`)
  }
  update(id:any,candidat:any){
    return this.http.put(`${environment.urlback}/candidat/${id}`,candidat)
  }
 
}

