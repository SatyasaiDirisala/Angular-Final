import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;
  password:string;
  token:String;

  constructor(private router: Router,private _auth: LoginService, private _router: Router) { 
     
  }

  ngOnInit() {
  }
  
  Details()
  {
    if(this._auth.login(this.userId,this.password))
    {
      this.router.navigate(['home']);
     
    }
    else{
      alert("Invalid credentials");
    this.router.navigate(['']);
    }

    
  }
}
