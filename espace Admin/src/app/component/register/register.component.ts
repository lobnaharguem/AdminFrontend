

//register bel photo


import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted=false
  form:FormGroup
filetoupload:Array<File>=[];
  constructor( private formBuilder:FormBuilder,private registerserv:RegisterService,private router:Router) { }

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
              
        file: [null, Validators.required]

            
        
      }
      
  );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  handleFileInput(files:any){
    this.filetoupload=<Array<File>>files.target.files
    console.log(this.filetoupload)
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    if (this.form.invalid || this.form.controls['file'].errors?.['required']) {
      return;
    }
  
//kif yabda bech tdakhel image bel formdata(postman)
    let formdata=new FormData()
    formdata.append('username',this.form.value.username)
    formdata.append('email',this.form.value.email)
    formdata.append('password',this.form.value.password)
  

    formdata.append('file',this.filetoupload[0])    
      



      this.registerserv.register(formdata).subscribe((res:any)=>{
    console.log("admin inscri",res)
    Swal.fire('inscription avec succees')
    // hedhi maaneha t3adik toul toul maghir matenzel 3la bouton

 this.router.navigateByUrl("/")

    
    
    })
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

 



