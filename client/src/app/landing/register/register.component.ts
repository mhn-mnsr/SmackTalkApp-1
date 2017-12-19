import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { DataService } from '../../data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new User();

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._dataService.addUser(this.user).then(data =>{
      if(data.error){
        console.log(data.error)
      } else {
        this._router.navigateByUrl('success');
      }
    })
  }

}
