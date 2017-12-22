import { Component, OnInit } from '@angular/core';
import { FilterPipePipe } from '../filter-pipe.pipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.css']
})
export class JoinTeamComponent implements OnInit {
allTeams: any
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getAllTeams();
  }
  
  getAllTeams() {
    this._dataService.getAllTeams()
    .then((response) => {
      this.allTeams = response.teamKey;
      console.log('Returned all teams from db', this.allTeams);
    });
  }

  joinTeam(selectedTeam) {
    console.log('This is the team you selected to join', selectedTeam);
    this._dataService.joinTeam(selectedTeam);
  }
}
