
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListecandidatureService } from 'src/app/service/listecandidature.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listecandidature',
  templateUrl: './listecandidature.component.html',
  styleUrls: ['./listecandidature.component.css']
})
export class ListecandidatureComponent implements OnInit {
  term:any;
  form:FormGroup
  closeResult=""
  p:any
listcandidature:any
  constructor(private candidature:ListecandidatureService, private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.allcandidature()
    this.form=this.formBuilder.group({
      candidat:['',Validators.required],
      offre:['',Validators.required],
     

  })}

  allcandidature(){
    this.candidature.getall().subscribe((res:any)=>{
this.listcandidature=res["data"]
console.log("list candidature",this.listcandidature)

    })
  }
//khdemmna hne update bel modal mouch b compsant jdid esmou update
  Updatecandidature(){
    this.candidature.update(this.form.value._id,this.form.value).subscribe((res:any)=>{
      console.log('candidature updated',res["data"]);
      Swal.fire('candidature updated')
      this.allcandidature()
  
  })
  }
 
  
  deletecandidature(id:any){
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
        this.candidature.delete(id).subscribe((res:any)=>{
          console.log(res["data"])
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      this.allcandidature()
    })
      }
    })
  }
}
