import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { RegisterService } from 'src/app/service/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
admin:any
filetoupload:Array<File>=[];
id=this.activateroute.snapshot.params["id"];


  form:FormGroup
    constructor(
      private adminserv:AdminService,
      private activateroute:ActivatedRoute,
      private formBuilder:FormBuilder,
      private router:Router
      ) { }
  
  ngOnInit(): void {
 this.getadminbyid()
    this.form=this.formBuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      file:['',Validators.required],
      
    })

      
  
  }

  handleFileInput(files:any){
    this.filetoupload=<Array<File>>files.target.files
    console.log(this.filetoupload)
  }
  getadminbyid(){
    this.adminserv.getbyid(this.userconnect.admin._id).subscribe((res:any)=>{
      
  this.admin=res["data"]
  console.log("admin by id ",this.admin)
  console.log(this.admin.username)
  this.form.patchValue({
    username:this.admin.username,
    email:this.admin.email,

    file:this.admin.file,
    
    

    })
    })
  }
 /*  Edit(up:any){
    setTimeout(() => {
      location.reload();
    }, 700);
    let formdata=new FormData()
    formdata.append('username',this.form.value.username)
    formdata.append('email',this.form.value.email)
  

    formdata.append('file',this.filetoupload[0])
    this.adminserv.update(this.userconnect.admin._id,formdata).subscribe((res:any)=>{
      console.log('profil updated',res["data"]);
      Swal.fire('profil updated')
     const userstore=localStorage.getItem("userconnect")
      if (userstore!==null)
      {
const userdata=JSON.parse(userstore)
userdata.admin.username=up.username
userdata.admin.email=up.email

userdata.admin.file=up.file

localStorage.setItem("userconnect",JSON.stringify(userdata)) 

      }
      
     //this.router.navigateByUrl('/');
  
  })
  } */
  Edit(up: any) {
    setTimeout(() => {
      location.reload();
    }, 700);
    // Vérifier si une nouvelle image a été sélectionnée
    if (this.filetoupload.length > 0) {
      let formdata = new FormData();
      formdata.append('username', this.form.value.username);
      formdata.append('email', this.form.value.email);
      formdata.append('file', this.filetoupload[0]);
      this.adminserv.update(this.userconnect.admin._id, formdata).subscribe((res: any) => {
        console.log('profil updated', res["data"]);
        Swal.fire('profil updated');
        const userstore = localStorage.getItem("userconnect");
        if (userstore !== null) {
          const userdata = JSON.parse(userstore);
          userdata.admin.username = up.username;
          userdata.admin.email = up.email;
          userdata.admin.file = up.file;
          localStorage.setItem("userconnect", JSON.stringify(userdata));
        }
      });
    } else {
      // Aucune nouvelle image sélectionnée, envoyer uniquement les données de texte
      const userData = {
        username: this.form.value.username,
        email: this.form.value.email
      };
      this.adminserv.update(this.userconnect.admin._id, userData).subscribe((res: any) => {
        console.log('profil updated', res["data"]);
        Swal.fire('profil updated');
        const userstore = localStorage.getItem("userconnect");
        if (userstore !== null) {
          const userdata = JSON.parse(userstore);
          userdata.admin.username = up.username;
          userdata.admin.email = up.email;
          localStorage.setItem("userconnect", JSON.stringify(userdata));
        }
      });
    }
  }



}

