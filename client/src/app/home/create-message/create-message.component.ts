import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../data.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
message = {message: ''}
teamID;
  constructor(private _dataService : DataService, private _router: Router, private _activatedroute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(){
    this._dataService.createMessage(this.message)
    .then(response => {
      if(response.error){
        console.log(response.error)
      } else {
        this.teamID = response.teamID
        this._router.navigateByUrl(`/home/${this.teamID}`)
      }
    })
  }

}
