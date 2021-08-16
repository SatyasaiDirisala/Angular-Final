import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.css']
})
export class NetworthComponent implements OnInit {

  constructor(private service:LoginService,private router: Router) { }
  value:any;
  ngOnInit(): void {
    let resp=this.service.calculateNetworth();
    resp.subscribe((data)=> this.value=(data));
  }

  logout()
  {
    this.service.logout();
    this.router.navigate(['']);
  }
  home()
  {
    this.router.navigate(['home']);
  }
}
