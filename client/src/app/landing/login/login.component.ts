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

  constructor(private _dataService: DataService, private _router: Router) { }
  user = new User();
  
  ngOnInit() {
  }

  onSubmit(){
    this._dataService.login(this.user).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        if (this._dataService.getAllTeams == null){
          this._router.navigateByUrl('chooseTeam')
        } else {
          this._dataService.getUsersFirstTeamID()
          .then((response) => {
            this.firstTeamID = response.teamIdKey;
            console.log('Returned first teamID of the user from the getUsersFirstTeamID function', this.firstTeamID);
            this._router.navigateByUrl(`home/${this.firstTeamID}`);
          })
        }
      }
    })
  }
}
