import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'Rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  constructor(private _http: Http, private _router: Router) { }

  userSession: BehaviorSubject<any> = new BehaviorSubject([]);

  returnSession(){
    return this.userSession.getValue();
  }

  addUser(newUser) {
    return this._http.post('/api/registerUser', newUser)
    .map(data => data.json())
    .toPromise();
  }

  getAllUsers() {
    //console.log('reached the getAllUsers function in service.ts file');
    return this._http.get('/api/getAllUsers')
    .map(data => data.json())
    .toPromise();
  }

  login(user){
    //console.log('Logging in User:', user)
    return new Promise((resolve, reject)=> {
      this._http.post('/api/loginUser', user)
      .map(response => response.json())
      .subscribe(response => {
        //console.log("Adding response to observable -- make sure it is json --", response);
        this.userSession.next(response)
        resolve(response);
      });
      error => {
        //console.log("There were errors in login process in database");
        reject(error);
      }
    })
  }

  getAllTeams() {
    //console.log("====In data service, get all teams====");
    return this._http.get('/api/getAllTeams')
    .map(data => data.json())
    .toPromise();
  }

  createTeam(newTeam) {
    //console.log('Hello from createTeam in dataService!');
    return this._http.post('/api/createTeam', newTeam)
    .map(data => data.json())
    .toPromise();
  }

  joinTeam(selectedTeam) {
    //console.log('Hello from joinTeam in dataService!');
    return this._http.post('/api/joinTeam', selectedTeam)
    .map(data => data.json())
    .toPromise();
  }

  getSessionid() {
    //console.log("====In data service, set sessionID====");
    return this._http.get('/api/getOneUser')
    .map(data => data.json())
    .toPromise();
  }

  getUsersTeams() {
<<<<<<< HEAD
    console.log("====In data service, getUsersTeams====");
    return this._http.get(`/api/getUsersTeams`)
=======
    //console.log("====In data service, getUsersTeams====");
    return this._http.get('/api/getUsersTeams')
>>>>>>> fdcdb92a120cd2b4b5273d9bf8ec7dd506599a0b
    .map(data => data.json())
    .toPromise();
  }
  
  // This function may not be neccessary for routing and is being placed on hold for now.
  getUsersFirstTeamID() {
    //console.log("====In data service, getUsersFirstTeamID====");
    return this._http.get('/api/getUsersFirstTeamID')
    .map(data => data.json())
    .toPromise();
    
  } 

  // fuckme(id){
  //   console.log("===In data service, fuckme=====");
  //   return this._http.get(`/api/fuckme/${id}`)
  //   .map( data => data.json())
  //   .toPromise()
  // }

}
