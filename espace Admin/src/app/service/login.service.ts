import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(  private http:HttpClient) { }
  login(admin:any){
    return this.http.post(`${environment.urlback}/auth/signinad`,admin)
}}
