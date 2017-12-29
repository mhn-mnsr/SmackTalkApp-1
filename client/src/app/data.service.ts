import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  sessionUsername;

  constructor(private _http: Http) { }

  addUser(newUser) {
    return this._http.post('/api/registerUser', newUser)
    .map(data => data.json())
    .toPromise();
  }

  getAllUsers() {
    console.log('reached the getAllUsers function in service.ts file');
    return this._http.get('/api/getAllUsers')
    .map(data => data.json())
    .toPromise();
  }

  login(user){
    return this._http.post('/api/loginUser', user)
    .map(data => data.json())
    .toPromise();
  }

  getAllTeams() {
    console.log("====In data service, get all teams====");
    return this._http.get('/api/getAllTeams')
    .map(data => data.json())
    .toPromise();
  }

  createTeam(newTeam) {
    console.log('Hello from createTeam in dataService!');
    return this._http.post('/api/createTeam', newTeam)
    .map(data => data.json())
    .toPromise();
  }

  joinTeam(selectedTeam) {
    console.log('Hello from joinTeam in dataService!');
    return this._http.post('/api/joinTeam', selectedTeam)
    .map(data => data.json())
    .toPromise();
  }

  getSessionid() {
    console.log("====In data service, set sessionID====");
    return this._http.get('/api/getOneUser')
    .map(data => data.json())
    .toPromise();
  }

  getUsersTeams() {
    console.log("====In data service, getUsersTeams====");
    return this._http.get('/api/getUsersTeams')
    .map(data => data.json())
    .toPromise();
  }
  
  // This function may not be neccessary for routing and is being placed on hold for now.
  getUsersFirstTeamID() {
    console.log("====In data service, getUsersFirstTeamID====");
    return this._http.get('/api/getUsersFirstTeamID')
    .map(data => data.json())
    .toPromise();
    
  }

}
