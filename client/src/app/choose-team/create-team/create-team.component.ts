import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {
  allUsers;
  selectedUsers: Array<any> = [];
  newTeam: Object = {'teamName': '', 'description': '', 'members': this.selectedUsers};

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  createTeam() {
    console.log('new team data', this.newTeam);
    this._dataService.createTeam(this.newTeam);
  }


  getAllUsers() {
    this._dataService.getAllUsers()
    .then((response) => {
      this.allUsers = response.userKey;
      console.log('Returned all users from db', this.allUsers);
    });
  }

  selectTeamMember(idx) {
    this.selectedUsers.push(this.allUsers[idx]);
    this.allUsers.splice(idx, 1);
  }

  unselectTeamMember(idx) {
    this.selectedUsers.splice(idx, 1);
    this.allUsers.push(this.selectedUsers[idx]);
  }
}
