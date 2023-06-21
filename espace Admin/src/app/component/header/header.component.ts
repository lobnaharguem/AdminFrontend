import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userconnect=JSON.parse(localStorage.getItem("userconnect")!)
admin:any
  constructor(private router:Router,private adminserv:AdminService,
    ) { }

  ngOnInit(): void {
    this.getadminbyid()
  }

  getadminbyid(){
    this.adminserv.getbyid(this.userconnect.admin._id).subscribe((res:any)=>{
      
  this.admin=res["data"]
  console.log("admin by id ",this.admin)
  console.log(this.admin.username)
  
    })
  }
  logout(){
    localStorage.clear()
    this.router.navigateByUrl("/")
  }
}
