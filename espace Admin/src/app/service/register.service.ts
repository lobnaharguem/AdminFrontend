import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient) { }
  register(admin:any){
    return  this.http.post(`${environment.urlback}/auth/signupad`,admin)
  }
 
}
