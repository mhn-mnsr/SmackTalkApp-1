import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router'
import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  firstTeamID;
  currentUser;

  constructor(private _dataService: DataService, private _router: Router) { }
user = new User();
  error= ''
  
  ngOnInit() {
    this._dataService.userSession.subscribe(
      (user) => {
        console.log("User in SUBSCRIBE", user);
        if (user['loggedIn']) {
          this.currentUser = user
        }
      }
    )
  }


  onSubmit(){
    this._dataService.login(this.user)
    .then(response => {
      if (response['loggedIn']) {
        console.log("Returned to login")
        this._dataService.getUsersFirstTeamID()
          .then((response) => {
            this.firstTeamID = response.teamIdKey;
            console.log('Returned first teamID of the user from the getUsersFirstTeamID function', this.firstTeamID);
            if(this.firstTeamID == null){
                console.log("=====in login component, firstteamid is null===")
                this._router.navigateByUrl('/chooseTeam');
            } else {
                this._router.navigateByUrl(`home/${this.firstTeamID}`)
            }
          })
      } else {
        this.error = response['errors']
      }
    })
  }
}

