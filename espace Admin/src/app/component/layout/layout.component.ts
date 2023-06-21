import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/service/candidat.service';
import { ListecandidatureService } from 'src/app/service/listecandidature.service';
import { recruteurService } from 'src/app/service/recruteur.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  listecandidat:any
  listerecruteur:any

  listcandidature:any

  constructor(private candidatserv:CandidatService ,private candidature:ListecandidatureService,private recruteurserv:recruteurService) { }

  ngOnInit(): void {
    this.allcandidat()
    this.allcandidature()
    this.allrecruteur()

  }
  allcandidature(){
    this.candidature.getall().subscribe((res:any)=>{
this.listcandidature=res["data"]
console.log("list candidature",this.listcandidature)

    })
  }
  allcandidat(){
    this.candidatserv.getall().subscribe((res:any)=>{
this.listecandidat=res["data"]
console.log("list candidat",this.listecandidat)

    })
  }
  allrecruteur(){
    this.recruteurserv.getall().subscribe((res:any)=>{
this.listerecruteur=res["data"]
console.log("list recruteur",this.listerecruteur)

    })
  }
}
