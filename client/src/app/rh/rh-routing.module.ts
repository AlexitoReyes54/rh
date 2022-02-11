import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from './applicants/applicants.component';
import { CompetenceComponent } from './competence/competence.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguagesComponent } from './languages/languages.component';
import { PositionsComponent } from './positions/positions.component';

const routes: Routes = [
  {path:'rh',component:DashboardComponent},
  {path:'languages/:id',component:LanguagesComponent},
  {path:'aplicants/:id',component:ApplicantsComponent},
  {path:'competences/:id',component:CompetenceComponent},
  {path:'positions/:id',component:PositionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RhRoutingModule { }
