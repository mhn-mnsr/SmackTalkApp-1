import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { RegisterComponent } from './landing/register/register.component';
import { LandingComponent } from './landing/landing.component';
<<<<<<< HEAD
// import { SuccessComponent } from './success/success.component';
=======
import { CreateTeamComponent } from './choose-team/create-team/create-team.component';
import { ChooseTeamComponent } from './choose-team/choose-team.component';
>>>>>>> 379781b82c9e6f6e7a952fbbbb54459f1ec1186b
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: LandingComponent,children: [
      { path: '', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
<<<<<<< HEAD
    ]
  },
  // {
  //   path: 'success',
  //   pathMatch: 'full',
  //   component: SuccessComponent,
  //   children: [],
  // },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
    children: [],
  },
];
=======
  ]},

  { path: 'chooseTeam', component: ChooseTeamComponent, children: [
    { path: 'createTeam', pathMatch: 'full', component: CreateTeamComponent},
    { path: 'home', pathMatch: 'full', component: HomeComponent}]}
]
  

>>>>>>> 379781b82c9e6f6e7a952fbbbb54459f1ec1186b
// export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
