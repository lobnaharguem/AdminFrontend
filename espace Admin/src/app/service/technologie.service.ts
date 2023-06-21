import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  constructor(private http:HttpClient) { }
  create(technologie:any){
    return this.http.post(`${environment.urlback}/technologie`,technologie)}
    getalltechnologie(){
      return this.http.get(`${environment.urlback}/technologie`)
    }
    getbyid(id:any){
      return this.http.get(`${environment.urlback}/technologie/${id}`)
    }
    delete(id:any){
      return this.http.delete(`${environment.urlback}/technologie/${id}`)
    }
    update(id:any,technologie:any){
      return this.http.put(`${environment.urlback}/technologie/${id}`,technologie)
    }
    
}
