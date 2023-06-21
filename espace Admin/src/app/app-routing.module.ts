import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ListecandidatureComponent } from './component/listecandidature/listecandidature.component';
import { ViewcandidatureComponent } from './component/viewcandidature/viewcandidature.component';
import { ListetechnologieComponent } from './component/listetechnologie/listetechnologie.component';
import { ListecandidatComponent } from './component/listecandidat/listecandidat.component';
import { ListerecruteurComponent } from './component/listerecruteur/listerecruteur.component';
import { AjoutertechnologieComponent } from './component/ajoutertechnologie/ajoutertechnologie.component';
import { UpdatetechnologieComponent } from './component/updatetechnologie/updatetechnologie.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AjouterrecruteurComponent } from './component/ajouterrecruteur/ajouterrecruteur.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},



  {path:"home" , canActivate:[AuthGuard] ,component:HomeComponent, children:[
    {path:"" ,component:LayoutComponent},
    {path:"listetechnologie" ,component:ListetechnologieComponent},
    {path:"listecandidat" ,component:ListecandidatComponent},
    {path:"listerecruteur" ,component:ListerecruteurComponent},
    {path:"ajoutertechnologie" ,component:AjoutertechnologieComponent},
    {path:"ajouterrecruteur" ,component:AjouterrecruteurComponent},

    {path:"profil" ,component:ProfilComponent},

    {path:"listecandidature" ,component:ListecandidatureComponent},
    

  {path:"updatetechnologie/:id",component:UpdatetechnologieComponent},


    {path:"viewcandidature/:id",component:ViewcandidatureComponent},

 ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
