import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-sellassets',
  templateUrl: './sellassets.component.html',
  styleUrls: ['./sellassets.component.css']
})
export class SellassetsComponent implements OnInit {

  
  assets:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.assets=[
      {
        "assetname":"Amazon",
        "value":"5"
      },

        {
          "assetname":"Tata",
        "value":"6"
        },
        {
          "assetname":"Relaince",
        "value":"6"
        }
    ]

  }
  Details(regForm:NgForm)
  {
    console.log(regForm.value);

  }


}
