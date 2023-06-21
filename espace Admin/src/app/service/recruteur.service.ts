

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class recruteurService {


  constructor(private http:HttpClient ) { }
  create(recruteur:any){
    return this.http.post(`${environment.urlback}/auth/signupR`,recruteur)
  }
  getall(){
    return this.http.get(`${environment.urlback}/recruteur`)
  }
  getbyid(id:any){
    return this.http.get(`${environment.urlback}/recruteur/${id}`)
  }
  delete(id:any){
    return this.http.delete(`${environment.urlback}/recruteur/${id}`)
  }
  update(id:any,recruteur:any){
    return this.http.put(`${environment.urlback}/recruteur/${id}`,recruteur)
  }
 confirmer(id:any)
 {
  return this.http.get(`${environment.urlback}/recruteur/confirm/${id}`)

 }
}

