import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false
  form:FormGroup
  constructor(private formBuilder:FormBuilder, private loginserv :LoginService,private router:Router) { }

  ngOnInit(): void {

    
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]})

  }
  get f(): { [key: string]: AbstractControl
   } {
    return this.form.controls;
  }
  onSubmit(){

    //hedha bech tsir passage m login to home sans refresh
    
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

      this.loginserv.login(this.form.value).subscribe((res:any)=>{
    console.log("admin authentifié",res)
    
//hedhom bech yethatou  fil inspecter->Application
    localStorage.setItem("userconnect",JSON.stringify(res))
    localStorage.setItem("token",res.tokens.accessToken) //kelmet accesstoken eli mahtouta fil postman  w token hiya variable bech tethat fil inspecter->Application
    localStorage.setItem("refreshtoken",res.tokens.refreshToken) //kelmet refreshtoken eli mahtouta fil postman
    //state=0  cad connecté
    localStorage.setItem("state","0")
    this.router.navigateByUrl('/home')
    // hedhi maaneha t3adik toul toul maghir matenzel 3la bouton
    setTimeout(() => {
      location.reload();
    }, 1000);

    
    
    }
    
    ,
    (err: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'nom utilisateur ou mot de passe incorrect',
        footer: 'verifier',
      
      });})
     
  }

  


}
