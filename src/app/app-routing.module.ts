import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworthComponent } from './networth/networth.component';
import { SellassetsComponent } from './sellassets/sellassets.component';

const routes: Routes = [
  { path: 'networth-component', component: NetworthComponent },
  { path: 'sellassets-component', component: SellassetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
