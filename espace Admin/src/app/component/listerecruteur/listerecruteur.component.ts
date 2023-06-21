
import { Component, OnInit } from '@angular/core';
import { recruteurService } from 'src/app/service/recruteur.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listerecruteur',
  templateUrl: './listerecruteur.component.html',
  styleUrls: ['./listerecruteur.component.css']
})
export class ListerecruteurComponent implements OnInit {
  term:any
  p:number=1

  listerecruteur:any
  constructor(private recruteurserv:recruteurService) { }

  ngOnInit(): void {
    this.allrecruteur()
  }
  allrecruteur(){
    this.recruteurserv.getall().subscribe((res:any)=>{
this.listerecruteur=res["data"]
console.log("list recruteur",this.listerecruteur)

    })
  }
/*   confirmer(id:any){
    this.recruteurserv.confirmer(id).subscribe((res:any)=>{
console.log("recruteur confirmed")
this.allrecruteur()

Swal.fire("recruteur confirmé pour s'authenfier")

  }
)} */

  
  deleterecruteur(id:any)
  {
    Swal.fire({
      title: 'Vous etes sur?',
      text: "vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui ,spprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.recruteurserv.delete(id).subscribe((res:any)=>{
          console.log(res["data"])
        Swal.fire(
          'supprime!',
          ' recruteur est supprimé avec succées.',
          'success'
        )
        this.allrecruteur()
      })}
    })}}


  