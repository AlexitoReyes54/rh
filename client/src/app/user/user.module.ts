import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { JobsComponent } from './jobs/jobs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ExperienceComponent } from './experience/experience.component';
import { CompetenceComponent } from './competence/competence.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ConfigComponent,
    JobsComponent,
    ExperienceComponent,
    CompetenceComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
