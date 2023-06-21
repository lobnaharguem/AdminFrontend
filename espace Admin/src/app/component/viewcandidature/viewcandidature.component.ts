
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListecandidatureService } from 'src/app/service/listecandidature.service';

@Component({
  selector: 'app-viewcandidature',
  templateUrl: './viewcandidature.component.html',
  styleUrls: ['./viewcandidature.component.css']
})
export class ViewcandidatureComponent implements OnInit {
  candidature:any
  p:number=1
  id=this.activateRoute.snapshot.params["id"];
  constructor(private candidatures :ListecandidatureService , private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyid() 
  }

  getbyid(){
    this.candidatures.getbyid(this.id).subscribe((res:any)=>{
  this.candidature=res["data"]
  console.log("candidature by id ",this.candidature)
    })
  }
  }
