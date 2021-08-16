import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworthComponent } from './networth/networth.component';
import { SellassetsComponent } from './sellassets/sellassets.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  { path: 'networth-component', component: NetworthComponent },
  { path: 'sellassets-component', component: SellassetsComponent},
  { path: '', component:LoginComponent  },
  { path: 'home', component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
