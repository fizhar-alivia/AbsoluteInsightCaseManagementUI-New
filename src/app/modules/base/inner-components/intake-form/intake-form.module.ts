import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { IntakeFormComponent } from "./intake-form.component";
import { PrimarySubjectComponent } from './primary-subject/primary-subject.component';
import { ReporterInfoComponent } from './reporter-info/reporter-info.component';
import { AssociatedSubjectsComponent } from './associated-subjects/associated-subjects.component';
import { IntakeAttachmentsComponent } from './intake-attachments/intake-attachments.component';

const routes: Routes = [
  {
    path: '',
    component: IntakeFormComponent,
  }
];

@NgModule({
  declarations: [
    IntakeFormComponent,
    PrimarySubjectComponent,
    ReporterInfoComponent,
    AssociatedSubjectsComponent,
    IntakeAttachmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IntakeFormModule { }
