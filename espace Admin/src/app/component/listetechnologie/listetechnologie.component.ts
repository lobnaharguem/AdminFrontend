
  
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TechnologieService } from 'src/app/service/technologie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listetechnologie',
  templateUrl: './listetechnologie.component.html',
  styleUrls: ['./listetechnologie.component.css']
})
export class ListetechnologieComponent implements OnInit {
  

  term:any;
  form:FormGroup
  closeResult=""
  p:any
listtechnologie:any
  constructor(private technologie:TechnologieService, private formBuilder:FormBuilder,
    private router:Router ) { }

  ngOnInit(): void {
    this.alltechnologie()
    this.form=this.formBuilder.group({
      libelle:['',Validators.required],
      

  })}

  alltechnologie(){
    this.technologie.getalltechnologie().subscribe((res:any)=>{
this.listtechnologie=res["data"]
console.log("list technologie",this.listtechnologie)

    })
  }
//khdemmna hne update bel modal mouch b compsant jdid esmou update
  Updatetechnologie(){
    this.technologie.update(this.form.value._id,this.form.value).subscribe((res:any)=>{
      console.log('technologie updated',res["data"]);
      Swal.fire('technologie updated')
      this.alltechnologie()
  
  })
  }
  

  deletetechnologie(id:any){
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
        this.technologie.delete(id).subscribe((res:any)=>{
          console.log(res["data"])
        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      this.alltechnologie()
    })
      }
    })
  }
}
