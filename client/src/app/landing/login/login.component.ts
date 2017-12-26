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
  user = new User();

  constructor(private _dataService: DataService, private _router: Router) { }
  
  ngOnInit() {
  }

  onSubmit(){
    this._dataService.login(this.user).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this._router.navigateByUrl('home');
      }
      }
    )
  }

}
