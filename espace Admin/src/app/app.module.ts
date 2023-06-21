import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListecandidatureComponent } from './component/listecandidature/listecandidature.component';
import { ListetechnologieComponent } from './component/listetechnologie/listetechnologie.component';
import { ListecandidatComponent } from './component/listecandidat/listecandidat.component';
import { ListerecruteurComponent } from './component/listerecruteur/listerecruteur.component';
import { AjoutertechnologieComponent } from './component/ajoutertechnologie/ajoutertechnologie.component';
import { UpdatetechnologieComponent } from './component/updatetechnologie/updatetechnologie.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AjouterrecruteurComponent } from './component/ajouterrecruteur/ajouterrecruteur.component';

@NgModule({
  declarations: [
    ListetechnologieComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    SidebarComponent,
    ListecandidatureComponent,
    
    ListecandidatComponent,
    ListerecruteurComponent,
    AjoutertechnologieComponent,
    UpdatetechnologieComponent,
    ProfilComponent,
    AjouterrecruteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
       ReactiveFormsModule,
       Ng2SearchPipeModule,
       NgxPaginationModule,
       HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
