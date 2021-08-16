import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {Asset} from './asset'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private httpClient:HttpClient,private router:Router){}
  token:string;
  userid:any;
  networth:any;
  sai:Array<Asset>;
  FinalValue:string;

  getUser()
  {
    return this.userid;
  }

  login(userid: string, upassword: string)
  {  
    this.userid=userid;
    this.httpClient.post("http://localhost:9000/login",{userid,upassword},{responseType:'text'}).subscribe((data)=> {this.token=(data);
    console.log(data);
    },(error:HttpErrorResponse)=>
    {alert("Invalid Credentials");
    this.router.navigate([''])}
    );
    localStorage.setItem('currentUser',this.userid);
    localStorage.setItem('accessToken',this.token);
    return this.loggedIn;
  }  

  logout() {  
    localStorage.removeItem('currentUser');  
  }  

  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }  
  
  
  
   calculateNetworth()
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
       return this.httpClient.get("http://localhost:9000/NetWorth/101",{headers:header,responseType:'text'});
       
    }

    GetStocks()
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
      return this.httpClient.get("http://localhost:8000/NetWorth/getStocksList/"+this.userid,{headers:header,responseType:'text'});
    }

    GetStockCount()
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
      return this.httpClient.get("http://localhost:8000/NetWorth/getCountList/"+this.userid,{headers:header,responseType:'text'});
    }

    GetShares()
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
      return this.httpClient.get("http://localhost:8000/NetWorth/getMutualFundsList/"+this.userid,{headers:header,responseType:'text'});
    }

    GetShareCount()
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
      return this.httpClient.get("http://localhost:8000/NetWorth/getUnitsList/"+this.userid,{headers:header,responseType:'text'});
    }

    SellAssets(assetsList:String,countList:String)
    {
      let tokenstr='Bearer '+this.token;
      const header=new HttpHeaders().set("Authorization",tokenstr);
      console.log(assetsList+" "+countList);
      return this.httpClient.put("http://localhost:8000/NetWorth/sellAssets/101",{assetsList,countList},{headers:header,responseType:'text'});
    }
   
    

    
}
