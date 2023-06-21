
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologieService } from 'src/app/service/technologie.service';

@Component({
  selector: 'app-ajoutertechnologie',
  templateUrl: './ajoutertechnologie.component.html',
  styleUrls: ['./ajoutertechnologie.component.css']
})
export class AjoutertechnologieComponent implements OnInit {

  form:FormGroup
  constructor(
   private  technologie:TechnologieService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    
    this.form=this.formBuilder.group({
      libelle:['',Validators.required],
     

    })
  }
 
Createtechnologie(){
  this.technologie.create(this.form.value).subscribe((res:any)=>{
console.log("fffff")})
this.router.navigateByUrl('/home/listetechnologie');


}
}