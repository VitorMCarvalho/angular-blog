import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"content/:id",
    component:ContentComponent
  },
  {
    path:"aboutme",
    component:AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
