import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RhRoutingModule } from './rh-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { LanguagesComponent } from './languages/languages.component';
import { PositionsComponent } from './positions/positions.component';
import { CompetenceComponent } from './competence/competence.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicantsDetailComponent } from './applicants-detail/applicants-detail.component';
import { CompetenceDetailComponent } from './competence-detail/competence-detail.component';
import { PositionsDetailComponent } from './positions-detail/positions-detail.component';
import { LanguagesDetailComponent } from './languages-detail/languages-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LanguagerowComponent } from './languagerow/languagerow.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    LanguagesComponent,
    PositionsComponent,
    CompetenceComponent,
    ApplicantsComponent,
    ApplicantsDetailComponent,
    CompetenceDetailComponent,
    PositionsDetailComponent,
    LanguagesDetailComponent,
    LanguagerowComponent,
    
    
  ],
  imports: [
    CommonModule,
    RhRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
  ]
})
export class RhModule { }
