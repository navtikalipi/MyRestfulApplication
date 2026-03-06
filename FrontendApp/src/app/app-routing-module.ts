import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Red } from './red/red';
import { Yellow } from './yellow/yellow';
import { Blue } from './blue/blue';
import { Green } from './green/green';
import { Orange } from './orange/orange';

const routes: Routes = [
 { path:'',redirectTo:'red',pathMatch:'full' },   
 {path:'red', component:Red},
 {path:'yellow', component:Yellow},
{path:'blue', component:Blue},
  {path:'green', component:Green},
{path:'orange', component:Orange}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
