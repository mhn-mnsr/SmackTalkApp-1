import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersTeams;
  User: any
  username;
  Team: any;
  teamID;
  message = {
    message: String,
    author: this.User
  }

  constructor(private _dataService : DataService, private _router: Router, private _activatedroute: ActivatedRoute) { }

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

  // handleMessageCreation(){
  //   this._dataService.createMessage(this.message)
  //   .then(response => {
  //     if(response.error){
  //       console.log(response.error)
  //     } else {
  //       this.teamID = response.teamID
  //       this._router.navigateByUrl(`/home/${this.teamID}`)
  //     }
  //   })
  // }
}
