import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { recruteurService } from 'src/app/service/recruteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterrecruteur',
  templateUrl: './ajouterrecruteur.component.html',
  styleUrls: ['./ajouterrecruteur.component.css']
})
export class AjouterrecruteurComponent implements OnInit {
  form:FormGroup
  filetoupload:Array<File>=[];
  submitted=false

  constructor(
    private  recruteur:recruteurService,
     private formBuilder:FormBuilder,
     private router:Router
     ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
              
        file: [null, Validators.required],

            
        
      }
    )
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  handleFileInput(files:any){
    this.filetoupload=<Array<File>>files.target.files
    console.log(this.filetoupload)
  }
  Createrecruteur(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    if (this.form.invalid || this.form.controls['file'].errors?.['required']) {
      return;
    }
    let formdata=new FormData()
    formdata.append('username',this.form.value.username)
    formdata.append('email',this.form.value.email)
    formdata.append('password',this.form.value.password)
  

    formdata.append('file',this.filetoupload[0])    
      



    this.recruteur.create(formdata).subscribe((res:any)=>{
  console.log("fffff",res)
  Swal.fire('ajout avec succees')
  this.router.navigateByUrl('/home/listerecruteur');


}

,
  (err: any) => {
    Swal.fire({
    
      
      text: 'verifier recruteur deja existe',
      footer: 'Please try again',
    
    });}
  
  )
  
  
  }
}
