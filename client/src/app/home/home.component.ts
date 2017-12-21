import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usersTeams;
  User: any
  username;

  constructor(private _dataService : DataService, private _router: Router, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.usersTeams = this.getUsersTeams();
    this.getUser();
    console.log("This.user", this.User.username);
  }

  getUsersTeams() {
    console.log('Running getUsersTeams function in home component');
    this.usersTeams = this._dataService.getUsersTeams();
  }

  getUser(){
  return this._dataService.getSessionid()
  .then(data => {
    this.User = data.userKey
  })
  }

}
