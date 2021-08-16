import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sellassets',
  templateUrl: './sellassets.component.html',
  styleUrls: ['./sellassets.component.css']
})
export class SellassetsComponent implements OnInit {

  userId:String;
  stocksList:String[];
  stockCount:String[];
  shares:String[];
  sharesList:String[];
  shareCount:String[];
  selectList:Array<String>=[];
  selectCount:Array<number>=[];
  NoAsset:String;
  finalValue:any;
  str:string;
  
  constructor(private service:LoginService, private router: Router ) { 

  }

  ngOnInit(): void {


    this.service.GetStocks().subscribe((data)=>{
      console.log(data);
      this.stocksList=data.split(",");
    });

    this.service.GetStockCount().subscribe((data)=>{
      console.log(data);
      this.stockCount=data.split(",");
    });
    this.service.GetShares().subscribe((data)=>{
      console.log(data);
      this.sharesList=data.split(",");
    });

    this.service.GetShareCount().subscribe((data)=>{
      console.log(data);
      this.shareCount=data.split(",");
    });

  }


  AddCart1(item:String,regForm:NgForm,x:number)
  {

    if(regForm.controls['NoAssets'].value<=this.stockCount[x] && regForm.controls['NoAssets'].value>=0 )
    {
        this.str="";
    this.selectList.push(item);
    console.log("item:"+this.selectList);

    this.selectCount.push(regForm.controls['NoAssets'].value);
    console.log("count:"+this.selectCount);
    }
    else{
      this.str="Not a valid Value";
    }  
  }



  AddCart2(item:String,regForm:NgForm,x:number)
  {

    if(regForm.controls['NoAssets'].value<=this.shareCount[x] && regForm.controls['NoAssets'].value>=0 )
    {
        this.str="";
    this.selectList.push(item);
    console.log("item:"+this.selectList);

    this.selectCount.push(regForm.controls['NoAssets'].value);
    console.log("count:"+this.selectCount);
    }
    else{
      this.str="Not a valid Value";
    }  
  }


  Details(regForm:NgForm)
  {
    if(confirm("Do you really want to sell assets"))
    {
    var countstring= this.selectCount.map(function(value) {
      return String(value);
     });
     console.log(countstring);
     var countstr=countstring.toString();
     console.log(countstr);

     var assetstr=this.selectList.toString();
     console.log(assetstr);

     this.service.SellAssets(assetstr,countstr).subscribe((data)=>{
      console.log(data);
      this.finalValue=data;
    });
    
    this.router.navigate(['networth-component']);
    }
    else
    {
    this.router.navigate(['home']);
    }  
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
