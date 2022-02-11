import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenceComponent } from './competence/competence.component';
import { ConfigComponent } from './config/config.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aptitudes',component:ConfigComponent},
  {path:'competence/:id',component:CompetenceComponent},
  {path:'experience/:id',component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
