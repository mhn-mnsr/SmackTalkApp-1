import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { LandingComponent } from './landing/landing.component';
<<<<<<< HEAD
// import { SuccessComponent } from './success/success.component';
=======
import { CreateTeamComponent } from './/choose-team/create-team/create-team.component';
import { ChooseTeamComponent } from './choose-team/choose-team.component';
>>>>>>> 379781b82c9e6f6e7a952fbbbb54459f1ec1186b
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
<<<<<<< HEAD
    // SuccessComponent,
=======
    CreateTeamComponent,
    ChooseTeamComponent,
>>>>>>> 379781b82c9e6f6e7a952fbbbb54459f1ec1186b
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
