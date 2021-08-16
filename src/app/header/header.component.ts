import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  userId:String;
  constructor(private service:LoginService, private router: Router) { }

  ngOnInit(): void {

    this.userId=this.service.getUser();
  }

}
