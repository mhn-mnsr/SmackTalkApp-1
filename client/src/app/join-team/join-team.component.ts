import { Component, OnInit } from '@angular/core';
import { FilterPipePipe } from '../filter-pipe.pipe';
import { DataService } from '../data.service';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.css']
})
export class JoinTeamComponent implements OnInit {
team : any
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getAllTeams();
  }

}
