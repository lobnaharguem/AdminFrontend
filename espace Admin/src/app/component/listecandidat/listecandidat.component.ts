
import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/service/candidat.service'
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {
  term:any
  p:number=1

  listecandidat:any
  constructor(private candidatserv:CandidatService) { }

  ngOnInit(): void {
    this.allcandidat()
  }
  allcandidat(){
    this.candidatserv.getall().subscribe((res:any)=>{
this.listecandidat=res["data"]
console.log("list candidat",this.listecandidat)

    })
  }
  deletecandidat(id:any)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.candidatserv.delete(id).subscribe((res:any)=>{
          console.log(res["data"])
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.allcandidat()
      })}
    })}}


  