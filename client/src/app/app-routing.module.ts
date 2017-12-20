import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { CreateTeamComponent } from './choose-team/create-team/create-team.component';
import { ChooseTeamComponent } from './choose-team/choose-team.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '',
    component: LandingComponent,
    children: [  
      { path: '', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'chooseTeam',
    component: ChooseTeamComponent,
    children: [
      {
        path: 'createTeam',
        pathMatch: 'full',
        component: CreateTeamComponent,
        children: [],
      }
    ],
    {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: [],
  },
];
// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
