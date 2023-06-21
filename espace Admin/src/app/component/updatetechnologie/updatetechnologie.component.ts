
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TechnologieService } from 'src/app/service/technologie.service';
@Component({
  selector: 'app-updatetechnologie',
  templateUrl: './updatetechnologie.component.html',
  styleUrls: ['./updatetechnologie.component.css']
})
export class UpdatetechnologieComponent implements OnInit {
  //bech nekhou id mel url
id=this.activateroute.snapshot.params['id'];
technologie:any;
form:FormGroup
  constructor(
   private  technologies:TechnologieService,
    private activateroute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.gettechnologie()
    this.form=this.formBuilder.group({
      libelle:['',Validators.required],
    
    })
  }
  gettechnologie(){
    this.technologies.getbyid(this.id).subscribe((res:any)=>{
      this.technologie=res["data"]
      console.log("techn by iden",this.technologie)
      this.form.patchValue({
        libelle:this.technologie.libelle,
       
      })
      
  })

}
Updatetechnologie(){
  this.technologies.update(this.id,this.form.value).subscribe((res:any)=>{
    console.log('technologie updated',res["data"]);
    Swal.fire('technologie updated')
    this.router.navigateByUrl('/home/listetechnologie');

})
}}

