import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/switchMap';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersTeams;
  User: any
  Team: any;
  id;

  
  constructor(private _dataService : DataService, private _router: Router, private _activatedroute: ActivatedRoute) {}

  ngOnInit() {
    this.getUser();
    this.getUsersTeams();

  }
  
  getUsersTeams() {
    console.log('Running getUsersTeams function in home component');
    return this._dataService.getUsersTeams()
    .then(data => {
      this.User = data.userKey
      this.usersTeams = data.teamKey;
      console.log(this.usersTeams)
    })
  }


  getUser(){
  return this._dataService.getSessionid()
  .then(data => {
    this.User = data.userKey
  })
}
  // fuckme(id){
  //   return this._dataService.fuckme(id)
  // }

  // openTeam(event){
  //   let target = event.target || event.srcElement || event.currentTarget
  //   // return this._dataService.getUsersTeams()
  //   // .then((data)=> {
  //   //   this.id = data.teamKey._id
  //   //   console.log("!!!!!!THIS IS THE ID!!!!!!!!!!", this.id)
  //     console.log("!!!!!!!!SEEE MEEE!!!!!", target.attributes.id.nodeValue)
  //     document.location.href = `/home/${target.attributes.id.nodeValue}`
  //     // this._router.navigateByUrl(`/home/${target.attributes.id.nodeValue}`)
  //   // })
  // }
}