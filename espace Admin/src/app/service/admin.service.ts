import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
  getall(){
    return this.http.get(`${environment.urlback}/administrateur`)
  }
  getbyid(id:any){
    return this.http.get(`${environment.urlback}/administrateur/${id}`)
  }
  delete(id:any){
    return this.http.delete(`${environment.urlback}/administrateur/${id}`)
  }
  update(id:any,admin:any){
    return this.http.put(`${environment.urlback}/administrateur/${id}`,admin)
  }
}
