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

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getAllUsers();

  }

  createTeam() {
    console.log('Create team button clicked.');
  }


  getAllUsers() {
    this._dataService.getAllUsers()
    .then((response) => {
      this.allUsers = response.userKey;
      console.log('Returned all users from db', this.allUsers);
    });
  }
}
